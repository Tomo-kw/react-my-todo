import React from 'react'
import { Button } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, resetCount } from '../features/counter/counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <div>
            <h1>カウンター(Redux)</h1>
            <h2>COUNT : {count}</h2>
            <Button onClick={() => dispatch(increment())} variant="contained">UP</Button>
            <Button onClick={() => dispatch(decrement())} variant="contained" color="error">Down</Button>
            <Button onClick={() => dispatch(resetCount())} variant="contained" color="success">Reaset</Button>
        </div>
    )
}

export default Counter