import React from 'react'

const Todo = ({text, id, isCompleted, isEditing, deleteTodo, editTodo, completeTodo}) => {

  const [editInputText, setEditInputText] = React.useState(text)

  const editInputTextHandler = (e) => {
    setEditInputText(e.target.value)
  }

  return (
    <div className={isCompleted ? "flex items-center justify-center mb-4 line-through opacity-75 hover:shadow-xl duration-200" : "flex items-center justify-center mb-4 hover:shadow-xl duration-200"}>
            {
              !isEditing ? 
              <div  className="flex items-center bg-white text-black h-[60px] px-4 text-xl w-[202px] md:w-[400px] rounded-l-xl">
              <h1>{text}</h1>
              </div> :
              <input placeholder={text} onChange={editInputTextHandler} className="flex items-center bg-white text-black h-[60px] px-4 text-xl w-[202px] md:w-[400px] rounded-l-xl outline-none"/>
            }
            <button onClick={() => {editTodo(id, editInputText)}} className="bg-yellow-400 flex justify-center items-center w-[55px] h-[60px]">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
              <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
              <path d="M16 5l3 3" />
            </svg>
            </button>
            <button onClick={() => {completeTodo(id)}} className="bg-green-600 flex justify-center items-center w-[55px] h-[60px]">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </button>
            <button onClick={() => {deleteTodo(id)}} className="bg-red-500 flex justify-center items-center rounded-r-xl w-[55px] h-[60px]">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 7l16 0" />
                <path d="M10 11l0 6" />
                <path d="M14 11l0 6" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </button>
          </div>
  )
}

export default Todo