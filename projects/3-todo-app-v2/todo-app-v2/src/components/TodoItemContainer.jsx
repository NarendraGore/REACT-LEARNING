import TodoItem from "./TodoItem";
import styles from './todoItem.module.css'
const TodoItemContainer = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
     {todoItems.map((item) => (
        <TodoItem key = {item.name} todoDate={item.date} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItemContainer;
