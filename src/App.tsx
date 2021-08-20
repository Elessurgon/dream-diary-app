import React from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <>
      <TodoList></TodoList>
      <AddTodoForm />
    </>
  );
}

export default App;
