import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  todos:[]//[{id:9749837492749 , text:"Hello", completed:false},{}]
}
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
     addTodo: (state,action)=>{
      state.todos.push({
        id: Date.now(),
        text:action.payload,
        completed:false
      })
     },
     deleteTodo:(state, action)=>{
      state.todos = state.todos.filter(
        todo => todo.id  !== action.payload
      )
     } //deleteTodo(279467284682)
  }
})

export const {addTodo,deleteTodo } = todosSlice.actions


export default todosSlice.reducer