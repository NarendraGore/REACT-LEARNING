import { useRef, useState } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

function TodoInput({ onAddTodo }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleButtonClicked = () => {
    event.preventDefault();
    const todoItem = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    onAddTodo(todoItem, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleButtonClicked}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input 
          ref={dueDateElement}
          type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <MdFormatListBulletedAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoInput;
