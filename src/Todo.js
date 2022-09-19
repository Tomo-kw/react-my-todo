import React, { useState } from 'react'
import {Button} from '@mui/material'

const Todo = () => {
    const [todos, setTodos] = useState([
        'Reactを勉強する',
        'Laravelを勉強する',
        '設計を勉強する',
        'CQRSを勉強する',
    ])
    // console.log(todos)
    const createTodo = () => {
    alert('登録')
    }

    const deleteTodo = () => {
        alert('削除')
    }

  return (
    <div className='wrapper'>
      <div>
        <h1>TodoList</h1>
      </div>
        <div>
            <div className='createTodo'>
                <h2>新規作成</h2>
                <input type='text' placeholder='Todoを入力' />
                <Button variant="contained" onClick={() => {
                    createTodo()
                }}>作成</Button>
            </div>

            <div className='todo'>
                <h2>TODOリスト</h2>
                <ul>
                    {todos.map((todo) => {
                        return(
                            <li>
                                <div className='todo-list'>
                                    <p>{todo}</p>
                                    <p><Button variant="contained" color="error" onClick={() =>{
                                        deleteTodo()
                                    }}>削除</Button></p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Todo
