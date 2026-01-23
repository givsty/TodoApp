import { Header } from '../header/header'
import { Section } from '../section/section'
import style from './App.module.css'

function App() {
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
