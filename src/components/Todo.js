import React, { useState } from 'react'
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'

const Todo = () => {
    const [text, setText] = useState('')
    // const [todos, setTodos] = useState([])
    const [todos, setTodos] = useState([
        'あああああ',
        'いいいいい'
    ])
    const [completeTodos, setCompleteTodos] = useState([
        'かかかかかか',
        'きききききき'
    ])

    const onChangeText = (e) => {
        setText(e.target.value)
    }

    // 作成
    const clickCreateTodo = () => {
        if(text === '') {
            alert('Todoを入力してください')
            return
        }
        
        setTodos([...todos, text])
        setText('')
    }

    // 削除
    const clickDeleteTodo = (index) => {
        const updateTodo = [...todos]

        updateTodo.splice(index, 1)
        setTodos(updateTodo)
    }

    // 完了
    const clickCompleteTodo = (index) => {
        const completeTodo = [...todos]

        completeTodo.splice(index, 1)
        setTodos(completeTodo)
        setCompleteTodos([...completeTodos, todos[index]])
    }

    // 戻す
    const clickReturnTodo = (index) => 
    {
        const returnTodo = [...completeTodos]
        
        setTodos([...todos, returnTodo[index]])
        returnTodo.splice(index, 1)
        setCompleteTodos(returnTodo)

    }

    return (
        <>
            <div className='wrapper'>
                <div>
                <h1>Todoリスト</h1>
                </div>
                <div>
                    <div className='createTodo'>
                        <h2>新規作成</h2>
                        <input type='text' placeholder='Todoを入力' value={text} onChange={onChangeText} />
                        <Button variant="contained" onClick={clickCreateTodo}>作成</Button>
                    </div>

                    <div className='incompleteTodo'>
                        <h2>未完了リスト</h2>
                        <ul>
                            {todos.map((todo, index) => {
                                return(
                                    <li key={index}>
                                        <div className='incomplete-list'>
                                            <p>{todo}</p>
                                            <p><Button variant="contained" color="success" onClick={() =>{
                                                clickCompleteTodo(index)
                                            }}>完了</Button></p>
                                            <p><Button variant="contained" color="error" onClick={() =>{
                                                clickDeleteTodo(index)
                                            }}>削除</Button></p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='completeTodo'>
                        <h2>完了リスト</h2>
                        <ul>
                            {completeTodos.map((todo, index) => {
                                return(
                                    <li key={index}>
                                        <div className='complete-list'>
                                            <p>{todo}</p>
                                            <p><Button variant="contained" color="secondary" onClick={() =>{
                                                clickReturnTodo(index)
                                            }}>戻す</Button></p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <Link to={'/'}>ホームへ</Link>
            </div>
        </>
    )
}

export default Todo
