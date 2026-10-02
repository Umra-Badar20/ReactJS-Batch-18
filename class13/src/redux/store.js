import { configureStore } from '@reduxjs/toolkit'
import  counterReducer from './features/counterSlice'
import todosReducer from './features/todosSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos : todosReducer,
  }
})