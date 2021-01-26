import React from 'react'
import TodoList from './Todo/TodoList'

function App() {
const todos = [
  {id: 1, completed: false, title: 'Купить  хлеб'}
]

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>

      <TodoList />
    </div>
  );
}

export default App;
