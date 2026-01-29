import { useAppSelector } from '../../store/store'
import { SectionUi } from '../ui/section/section'

export const Section = () => {
    const todos = useAppSelector(state => state.todo.todo)
    return (
        <SectionUi todos={todos}/>
    )
}
