import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Todo } from '../../types';
import { getTodo } from '../../api/todo';

type todoSlice = {
    todo: Todo[]
};

const initialState: todoSlice = {
    todo: []
};

export const fetchTodo = createAsyncThunk(
    'todo/fetchTodo',
    getTodo
)

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todo?.push({
                title: action.payload,
                userId: Math.random(),
                id: Math.random(),
                completed: false
            })
        },
        removeTodo(state, action) {
            state.todo = state.todo.filter(element => element.id !== action.payload)
        },
        doneTodo(state, action) {
            if(action.payload) {
                state.todo.find(todo => todo.id === action.payload ? todo.completed = true: '')
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.fulfilled, (state, action)=>{
            state.todo = action.payload
        })
        builder.addCase(fetchTodo.rejected, (_state, action)=>{
            console.log(action.error)
        })
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer