import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // const todos = [
  //   new Todo('Learn rx'),
  //   new Todo('Learn ts')
  // ]

  const [todos, setTodos] = useState<Todo[]>([]);
  const addToDoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

const removeTodoHandler=(todoId:string)=>{
  setTodos((prevTodos)=>{
    return prevTodos.filter(todo => todo.id !== todoId)
  })
}

  return (
    <div className="App">
      <NewTodo onAddTodo={addToDoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
