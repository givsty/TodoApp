import { TodoApi } from '../../api/todo'
import { Header } from '../header/header'
import { Section } from '../section/section'
import style from './App.module.css'

function App() {
    const todo = new TodoApi()
    todo.getTodo().then((res)=>{
        console.log(res)
    })
    return (
        <main className={style.app}>
            <div className="wrapper">
                <Header />
                <Section />
            </div>
        </main>
    )
}

export default App
