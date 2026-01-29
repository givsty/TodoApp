import CheckboxTodoUi from '../todo-checkbox/todo-checkbox'
import style from './todo-card.module.css'
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import type { Todo } from '../../../types';

interface TodoCardUiProps {
    todo: Todo
    deleteTodo : ()=> void
}

export const TodoCardUi = ( {todo, deleteTodo}: TodoCardUiProps ) => {
    const {title, completed} = todo

    return (
        <article className={style.article}>
            <div className={style.wrapper}>
                <CheckboxTodoUi />
                <span className={completed ? style.done : ''}>{title}</span>
                <div className={style.iconsWrapper}>
                    {completed && <DoneIcon />}
                    <div className={style.delete} onClick={deleteTodo}><DeleteIcon /></div>
                </div>
            </div>
            
            <div className={style.line}></div>
        </article>
    )
}
