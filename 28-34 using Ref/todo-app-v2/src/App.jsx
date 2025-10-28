import AppName from "./components/AppName";
import AddTodo from "./components/TodoInput";
import TodoItemContainer from "./components/TodoItemContainer";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

function App() {
  // const initialTodoItems = [
  //   { name: "item1", date: "12/06/2025" },
  //   { name: "item2", date: "12/06/2025" },
  // ];
  const [todoitems, setTodoItems] = useState([]);

  const onNewItem = (newItem, newDate) => {
    setTodoItems((currValue) => [
     ...currValue,
      { name: newItem, date: newDate }
    
  ]);
};

  const handleDeleteClick = (todoItemName) => {
    const newTodoitems = todoitems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoitems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onAddTodo={onNewItem} />
      {todoitems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItemContainer
        todoItems={todoitems}
        onDeleteClick={handleDeleteClick}
      ></TodoItemContainer>
    </center>
  );
}

export default App;
