import TodoItem from "./TodoItem";
import styles from "./todoItem.module.css";
const TodoItemContainer = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem key={item.name} todoDate={item.date} todoName={item.name} onDeleteClick={onDeleteClick}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItemContainer;
