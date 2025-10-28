import { useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import TodoItemsContext from "../store/TodoItemsContext";

function TodoItem({todoName, todoDate}) {
  const contextObj = useContext(TodoItemsContext);
  const onDeleteClick = contextObj.deleteItem;

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" onClick={() =>onDeleteClick(todoName)}>
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
