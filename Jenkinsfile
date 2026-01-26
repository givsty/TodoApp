pipeline {
    agent any
    
    environment {
        NODE_VERSION = '18' // Укажите нужную версию Node.js
        PROJECT_NAME = 'frontend-app'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm // Клонирование репозитория
            }
        }
        
        stage('Setup Node.js') {
            steps {
                script {
                    // Установка нужной версии Node.js
                    nvmInstall = """
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
                    export NVM_DIR="\$HOME/.nvm"
                    [ -s "\$NVM_DIR/nvm.sh" ] && \\. "\$NVM_DIR/nvm.sh"
                    nvm install ${NODE_VERSION}
                    nvm use ${NODE_VERSION}
                    """
                    
                    sh nvmInstall
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci' // Использует package-lock.json для точных версий
                // или sh 'npm install' для обычной установки
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint' // Если есть скрипт lint в package.json
            }
        }
        
        stage('Unit Tests') {
            steps {
                sh 'npm test'
                // Сохранение результатов тестов
                junit 'reports/junit/*.xml' // Если используется JUnit формат
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
            post {
                success {
                    archiveArtifacts 'dist/**/*' // Сохранение артефактов сборки
                }
            }
        }
        
        stage('Integration Tests') {
            steps {
                sh 'npm run test:e2e' // Если есть E2E тесты
            }
        }
    }
    
    post {
        always {
            // Очистка рабочей директории
            cleanWs()
        }
        success {
            // Уведомления при успешной сборке
            echo 'Build successful!'
        }
        failure {
            // Уведомления при ошибке
            echo 'Build failed!'
        }
    }
}