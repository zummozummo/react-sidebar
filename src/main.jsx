import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
// render()

// let stateValues = [];

// const useState =(initialValue)=>{
//   callIndex= callIndex+1
//   const currentCallIndex  = Number(callIndex)
//   if(stateValues[currentCallIndex] === undefined){
//     console.log(initialValue)
//     stateValues[currentCallIndex] = initialValue
//   }
//   const setValue = (newValue)=>{
//     stateValues[currentCallIndex] = newValue
//     console.log('setvalue', newValue)
//     render()
//   }
//   return [stateValues[currentCallIndex], setValue]
// }

// function Delete() {
//   const [num, setNum] = useState(1);
//   const [num2, setNum2] = useState(0);

//   function incrementNum(num) {
//     setNum(num + 1);
//   }
//   function incrementNum2(num2) {
//     setNum2(num2 + 1);
//   }

//   return (
//     <div>
//       <button onClick={() => incrementNum(num)}>{num}</button>
//       <button onClick={() => incrementNum2(num2)}>{num2}</button>
//     </div>
//   );
// }
