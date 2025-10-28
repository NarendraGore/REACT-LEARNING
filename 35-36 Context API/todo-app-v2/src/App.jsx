import AppName from "./components/AppName";
import TodoInput from "./components/TodoInput";
import TodoItemContainer from "./components/TodoItemContainer";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import { useReducer } from "react";
import TodoItemsContext from "./store/TodoItemsContext";


const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, date: action.payload.itemDueDate },

      
    ];
   
    
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
    
  }return newTodoItems;}

function App() {


    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  
    const addNewItem = (itemName, itemDueDate) => {
      const newItemAction = {
        type: "NEW_ITEM",
        payload: {
          itemName,
          itemDueDate,
        },
      };
      dispatchTodoItems(newItemAction);
    };
  
    const deleteItem = (todoItemName) => {
      const deleteItemAction = {
        type: "DELETE_ITEM",
        payload: {
          itemName: todoItemName,
        },
      };
      dispatchTodoItems(deleteItemAction);
    };
  
  
  return (
   <TodoItemsContext.Provider
         value={{
           todoItems,
           addNewItem,
           deleteItem,
         }}
       >
      <center className="todo-container">
        <AppName />
        <TodoInput />
        <WelcomeMessage></WelcomeMessage>
        <TodoItemContainer></TodoItemContainer>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
