import { useState } from "react";
import TodoTable from "./TodoTable.jsx";

function TodoList() {
  const [todo, setTodo] = useState({ desc: "", date: "" });
  const [todos, setTodos] = useState([]);

  const handleDescChange = (event) => {
    setTodo({ ...todo, desc: event.target.value });
  };

  const handleDateChange = (event) => {
    setTodo({ ...todo, date: event.target.value });
  };

  const addTodo = () => {
    if (todo.desc == "") {
      alert("A todo cannot be empty.");
    } else if (todo.date == "") {
      alert("A todo must have a date.");
    } else {
      setTodos([...todos, todo]);
      setTodo({ ...todo, desc: "", date: "" });
    }
  };

  const deleteTodo = (event) => {
    const deletedIndex = parseInt(event.target.value);
    const newTodos = todos.filter((todo, index) => index !== deletedIndex);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Simple todolist</h1>
      <h2>Add a todo</h2>
      <form>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          value={todo.desc}
          onChange={handleDescChange}
          name="description"
        ></input>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          value={todo.date}
          onChange={handleDateChange}
          name="date"
        ></input>
        <button type="button" onClick={addTodo}>
          Add
        </button>
      </form>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoList;
