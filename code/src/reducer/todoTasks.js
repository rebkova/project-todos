import { createSlice } from "@reduxjs/toolkit"

export const todoTasks = createSlice({
  name: "todoTasks",
  initialState: [
    { id: 1, text: 'Watch video on actions & reducers', complete: true },
    { id: 2, text: 'Follow redux codealong', complete: true },
    { id: 3, text: 'Fork weekly assignment', complete: true },
    { id: 4, text: 'Create a todo app', complete: false },
  ]
}) 