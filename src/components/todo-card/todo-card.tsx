import { TodoCardUi } from '../ui/todo-card/todo-card'
import type { Todo } from '../../types'
import { useAppDispatch } from '../../store/store'
import { removeTodo } from '../../store/reducers/todoSlice'

interface TodoCard {
    todo: Todo
}

export const TodoCard = ( {todo}: TodoCard) => {
    const dispatch = useAppDispatch()

    const deleteTodo = () =>{
        dispatch(removeTodo(todo.id))
    }

    return (
        <TodoCardUi todo={todo} deleteTodo={deleteTodo}/>
    )
}
