import { fetchTodo } from '../../store/reducers/todoSlice'
import { Header } from '../header/header'
import { Section } from '../section/section'
import style from './App.module.css'
import { useEffect } from 'react'
import { useAppDispatch } from '../../store/store'

function App() {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(fetchTodo())
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
