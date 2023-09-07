import React from "react"
import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import Todo from "./components/Todo"

function App() {
  
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  const [inputText, setInputText] = useState("")

  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  function deleteTodo(todoId) {
    setTodos(oldTodos => oldTodos.filter(todo => todo.id !== todoId))
  }

  function completeTodo(todoId) {
    setTodos(prevTodos =>  prevTodos.map(todo => {
        return todo.id === todoId ? {...todo, isCompleted: !todo.isCompleted} : todo
      })
    )
  }

  function editTodo(todoId, newTodoText) {
    setTodos(prevTodos =>  prevTodos.map(todo => {
      return todo.id === todoId ? {...todo, isEditing: !todo.isEditing, text: newTodoText} : todo
    })
  )
  }

  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const addTodoHandler = () => {
    if(inputText === "") {
      alert("You can't enter an empty todo!")
    } else {
      setTodos(prevTodos => [
        ...prevTodos, 
        {
          text: inputText,
          isCompleted: false,
          isEditing: false,
          id: nanoid()
        }
      ])
      setInputText("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-orange-300 font-quicksand flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-6xl mb-4 mt-8">Todo List</h1>
        <div className="flex justify-center items-center mt-4">
          <input type="text" onChange={inputTextHandler} value={inputText} placeholder="What do you have to do?" className="outline-none rounded-lg text-xl py-3 px-4 w-[280px] hover:w-[300px] md:w-[540px] md:hover:w-[560px] duration-200 shadow-xl" />
          <button className="bg-green-400 hover:bg-green-500 duration-200 rounded-full ml-4 py-2 px-2 shadow-xl" onClick={addTodoHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            text={todo.text}
            id={todo.id}
            isCompleted={todo.isCompleted}
            isEditing={todo.isEditing}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>

    </div>
  )
}

export default App
