import './App.css';
import Counter from './components/Counter';
import Todo from './components/Todo';

const App = () => {
  return (
    <div className="App">
      <Todo />
      <Counter />
    </div>
  );
}

export default App;
