import { TodoCardUi } from '../todo-card/todo-card'
import style from './section.module.css'

export const SectionUi = () => {
  return (
    <section className={style.section}>
        {[...new Array(4)].map(()=>{
            return <TodoCardUi />
        })}
    </section>
  )
}
