import { useState } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

function TodoInput({ onAddTodo }) {
  const [todoItem, setTodoitem] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoitem(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleButtonClicked = () => {
    event.preventDefault();
    onAddTodo(todoItem, dueDate) 
    setTodoitem("");
    setDueDate("");
  };
  return (
    <div className="container text-center">
      <form className="row kg-row"
      onSubmit={handleButtonClicked}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoItem} onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            
            className="btn btn-success kg-button"
           
          >
            <MdFormatListBulletedAdd />

          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoInput;
