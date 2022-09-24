import { Button } from "@mui/material"
import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    const countUp = () => {
        setCount(count + 1)
    }

    const countDown = () => {
        setCount(count - 1)
    }

    const countReset = () => {
        setCount(0)
    }

    return(
        <div>
            <h1>カウンターでRedux</h1>
            <h2>COUNT : {count}</h2>
            <Button onClick={countUp} variant="contained">UP</Button>
            <Button onClick={countDown} variant="contained" color="error">Down</Button>
            <Button onClick={countReset} variant="contained" color="success">Reaset</Button>

        </div>
    )
}

export default Counter