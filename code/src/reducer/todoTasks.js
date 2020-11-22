import { createSlice } from "@reduxjs/toolkit"

const allTodoTasks = [
  //more categories can be added as keys (dueDate, category ...)
  { id: 1, text: 'Watch video on actions & reducers', complete: true },
  { id: 2, text: 'Follow redux codealong', complete: true },
  { id: 3, text: 'Fork weekly assignment', complete: true },
  { id: 4, text: 'Create a todo app', complete: false },
]

export const todoTasks = createSlice({

  //name of the slice
  name: "todoTasks",
  initialState: allTodoTasks
  // reducers: {
  //   //adds a task to allTodoTasks array
  //   addTask: (store) => {

  //   }

  //   //removes the task from 
  //   removeTask: (store) => {

  //   }
  // }

}) 