import { useState } from 'react'
import Inputcontainer from './components/Inputcontainer'
import './App.css'
import Todocontainer from './components/Todolistcontainer'

function App() {
  const [inputval, setInputval] = useState('');
  const [todos, setTodos] = useState([]);

  function writetodo(e) {
    setInputval(e.target.value);
  }

  function addtodo() {
    setTodos((prevtodo) => [...prevtodo, inputval]);
    setInputval(''); // Optional: clear input after adding
  }

  function deltodo(todoindex) {
    setTodos((prevtodo) =>
      prevtodo.filter((_, index) => index !== todoindex)
    );
  }

  return (
    <div>
      <div>
        <h1>To Do List</h1>
        <Inputcontainer val={inputval} writetodo={writetodo} addtodo={addtodo} />
      </div>
      <div>
        <Todocontainer todos={todos} deltodo={deltodo} />
      </div>
    </div>
  );
}

export default App;
