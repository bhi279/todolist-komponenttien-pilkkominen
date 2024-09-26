import React from "react";

function TodoTable({ todos, deleteTodo }) {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
              <td>
                <button type="button" value={index} onClick={deleteTodo}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoTable;
