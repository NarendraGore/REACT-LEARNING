import AppName from "./components/AppName";
import AddTodo from "./components/TodoInput";
import TodoItemContainer from "./components/TodoItemContainer";
import "./App.css";

function App() {

  const todoitems = [
    {name:"Buy Milk",
      date: "4/10/2025",
    },
    {name:"Do Study",
      date: "Now",
    },
    {name:"Go to College",
      date: "4/10/2025",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItemContainer todoItems= {todoitems}></TodoItemContainer>
    </center>
  );
}

export default App;
