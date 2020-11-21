import React from "react"
import { useSelector } from "react-redux"

import { SingleTodo } from "./SingleTodo"

export const TodoList = () => {

  //fetch all tasks from the store
  const tasks = useSelector((store) => store.todoTasks)

  return (
    <div>
      {tasks.map((task) => (
        <SingleTodo key={task.id} taskText={task.text} />
      ))}
    </div>
  )
}

