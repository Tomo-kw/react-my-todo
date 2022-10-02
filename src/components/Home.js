import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>React学習</h1>
      <h3>■ <Link to={'/todolist'}>Todoリスト</Link></h3>
      <h3>■ <Link to={'/counter'}>カウンター</Link></h3>
    </div>
  )
}

export default Home
