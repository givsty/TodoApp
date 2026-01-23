import { TodoCardUi } from '../todo-card/todo-card'
import CheckboxTodoUi from '../todo-checkbox/todo-checkbox'
import style from './section.module.css'

export const SectionUi = () => {
  return (
    <section className={style.section}>
        <TodoCardUi />
    </section>
  )
}
