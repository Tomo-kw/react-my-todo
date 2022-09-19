import React from 'react'
import {Button} from '@mui/material'

const Todo = () => {
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
                    <li>
                        <div className='todo-list'>
                            <p>Reactを勉強する</p>
                            <p><Button variant="contained" color="error" onClick={() =>{
                                deleteTodo()
                            }}>削除</Button></p>
                        </div>
                    </li>
                    <li>
                        <div className='todo-list'>
                            <p>Reactを勉強する</p>
                            <p><Button variant="contained" color="error" onClick={() =>{
                                deleteTodo()
                            }}>削除</Button></p>
                        </div>
                    </li>
                    <li>
                        <div className='todo-list'>
                            <p>Reactを勉強する</p>
                            <p><Button variant="contained" color="error" onClick={() =>{
                                deleteTodo()
                            }}>削除</Button></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Todo
