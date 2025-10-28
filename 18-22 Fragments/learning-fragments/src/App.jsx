import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems =[];
//  let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([
    "Dal",
    "Green Vegetable",
    "Roti",
    "Salad",
  ]);

 

  const OnKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems);
  };
  }
  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodInput handleKeyDown={OnKeyDown}></FoodInput>
      
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}
export default App;

/* By using Ternary Operator */
// let emptyMessage = foodItems.length===0 ? <h3>I am Still Hungry.</h3>:null

/*if(foodItems.length===0){
    return <h3>I am Hungry.</h3>;
  }  
  By Using IF ELSE Loop........*/

// UseState Method
// {let textStateArr = useState("Food Item is Entered By User ");
// let textToShow = textStateArr[0];
// let setTextState = textStateArr[1]; }
