import { useState, type ChangeEvent } from 'react'
import InputHeaderUi from '../ui/input-header/input-header'
import { addTodo } from '../../store/reducers/todoSlice'
import { useAppDispatch } from '../../store/store'

export const InputHeader = () => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const submitTodo = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(addTodo(value))
        setValue('')
    }

    return (
        <InputHeaderUi handleChange={handleChange} submitTodo={submitTodo} value={value}/>
    )
}
