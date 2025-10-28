import TodoItemsContext from "../store/TodoItemsContext";
import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./todoItem.module.css";

const TodoItemContainer = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.date}
          todoName={item.name}
          
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItemContainer;
