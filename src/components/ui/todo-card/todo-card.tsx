import CheckboxTodoUi from '../todo-checkbox/todo-checkbox'
import style from './todo-card.module.css'
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
export const TodoCardUi = () => {
  return (
    <article className={style.article}>
        <div className={style.wrapper}>
            <CheckboxTodoUi />
            <span>todo-card</span>
            {false ? <DoneIcon /> : <DeleteIcon />}
        </div>
        <div className={style.line}></div>
    </article>
  )
}
