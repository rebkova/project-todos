import React from "react"
import { useDispatch } from "react-redux"

import { todoTasks } from "../reducer/todoTasks"

export const SingleTodo = ({ id, text, complete }) => {

  // TODO:
  //styled component for done and undone state

  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todoTasks.actions.toggleComplete(id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(todoTasks.actions.removeTask(id))
  }
  //console.log(`Text in single todo: ${text.text}`)

  return (

    <li>
      <label>
        <input
          type="checkbox"
          checked={complete}
          onChange={handleCheckboxClick}
        />
      </label>

      {text}

      <button
        type="button"
        onClick={handleRemoveButtonClick}>
        Remove
      </button>
    </li>
  )
}