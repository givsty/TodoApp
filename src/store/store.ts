import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/todoSlice'

const rootReducer = combineReducers({
    todo: todoReducer
});
export const store = configureStore({
  reducer: rootReducer,
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch