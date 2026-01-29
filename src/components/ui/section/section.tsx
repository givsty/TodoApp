import type { Todo } from '../../../types'
import { TodoCard } from '../../todo-card/todo-card'
import style from './section.module.css'
interface SectionUiProps {
    todos: Todo[]
}

export const SectionUi = ({ todos }: SectionUiProps) => {
    return (
        <section className={style.section}>
            {[...todos].reverse().map((todo)=>{
                return <TodoCard todo={todo} key={todo.id}/>
            })}
        </section>
    )
}
