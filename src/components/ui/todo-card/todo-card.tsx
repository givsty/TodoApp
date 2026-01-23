import CheckboxTodoUi from '../todo-checkbox/todo-checkbox'
import style from './todo-card.module.css'

export const TodoCardUi = () => {
  return (
    <article className={style.article}>
        <div className={style.wrapper}>
            <CheckboxTodoUi />
            <span>todo-card</span>
        </div>
        <div className={style.line}></div>
    </article>
  )
}
