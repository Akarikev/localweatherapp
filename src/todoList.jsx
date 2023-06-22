import { useState } from "react";

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodo] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      setTodo([...todos, { textValue: text, isCompleted: false }]);
    }
    setText("");
  };

  const handleComplete = (index) => {
    setTodo(
      todos.map((todo, i) => {
        if (i === index) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  };

  const handleDelete = (index) => {
    setTodo(todos.filter((_, i) => i !== index));
  };
  return (
    <>
      <div>
        <form onSubmit={handleAdd}>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button>Add</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span
                style={{
                  color: todo.isCompleted ? "gray" : "none",
                }}
              >
                {todo.textValue}
              </span>

              {!todo.isCompleted && (
                <button onClick={() => handleComplete(index)}>+</button>
              )}

              <button onClick={() => handleDelete(index)}>Del</button>
            </li>
          ))}
        </ul>

        {/* {todo.map((todos, id) => {
        return <li>{todos}</li>;
      })} */}
      </div>
    </>
  );
}

export default TodoList;
