import React, { useState } from "react"
import styled from "styled-components"

import { useDispatch } from "react-redux"
import { todoTasks } from "reducer/todoTasks"

export const AddTodo = () => {

  //local state property -> will be used only in this component
  const [value, setValue] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(todoTasks.actions.addTask(value))
    setValue("")
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>

        <label>
          <Input
            type="text"
            value={value}
            placeholder="Add your task here ..."
            required
            onChange={(event) => setValue(event.target.value)}
          />
        </label>
        <Button type="submit">
          <span role="img"
            aria-label="plus-sign">
            ➕
          </span>
        </Button>
      </Form>
    </section>
  )
}

// --- STYLED COMPONENTS ---

const Form = styled.form`
  margin: 30px 0;
`
const Button = styled.button`
  cursor: pointer;
  margin-left: 8px;
  padding: 7px;
  border-radius: 50%;
  border: 1px solid #819FA6;
  background: #F2F2EB;
  outline: none;
  font-size: 12px;

  &:hover {
    border: 2px solid #819FA6;
    margin-left: 7px;
  }
`

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #819FA6;
  outline: none;
  background: #F2F2EB;
  font-size: 14px;
` 