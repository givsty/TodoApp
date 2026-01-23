import { createSlice } from '@reduxjs/toolkit';
import type { Todo } from '../../types/intex';


type todoSlice = {
  todo: Todo[] | null
};

const initialState: todoSlice = {
  todo: null
};


const todoSlice = createSlice({
  name: 'feedSlice',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todo?.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    
  }
});

export const {addTodo} = todoSlice.actions;

export default todoSlice