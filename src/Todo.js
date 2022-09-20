import React, { useState } from 'react'
import {Button} from '@mui/material'

const Todo = () => {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState([])
    const createTodo = () => {
        if(text === '') {
            alert('Todoを入力してください')
            return
        }
        
        setTodos([...todos, text])
        setText('')
    }

    const deleteTodo = () => {
        alert('削除')
    }

    const onChangeText = (e) => {
        setText(e.target.value)
    }

    return (
    <div className='wrapper'>
        <div>
        <h1>Todoリスト</h1>
        </div>
        <div>
            <div className='createTodo'>
                <h2>新規作成</h2>
                <input type='text' placeholder='Todoを入力' value={text} onChange={onChangeText} />
                <Button variant="contained" onClick={createTodo}>作成</Button>
            </div>

            <div className='todo'>
                <h2>TODOリスト</h2>
                <ul>
                    {todos.map((todo, index) => {
                        return(
                            <li key={index}>
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
