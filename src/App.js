import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Counter from './components/Counter'
import Todo from './components/Todo'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/todolist'} element={<Todo />} />
          <Route path={'/counter'} element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
