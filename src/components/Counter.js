import React from 'react'
import { Button } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, resetCount } from '../features/counter/counterSlice'
import { Link } from 'react-router-dom'

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <>
            <div>
                <h1>カウンター(Redux使用)</h1>
                <h2>COUNT : {count}</h2>
                <Button onClick={() => dispatch(increment())} variant="contained">UP</Button>
                <Button onClick={() => dispatch(decrement())} variant="contained" color="error">Down</Button>
                <Button onClick={() => dispatch(resetCount())} variant="contained" color="success">Reaset</Button>
            </div>
            <div>
                <Link to={'/'}>ホームへ</Link>
            </div>
        </>
    )
}

export default Counter