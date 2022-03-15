import React, { useState } from 'react'

const UseState = () => {
  const [state, setState] = useState({count: 4,theme: "blue"});
  const count = state.count;
  const theme = state.theme;

  // const handleAmount = (type) => {
  //   console.log(type);
  //   switch (type) {
  //     case "plus":
  //       console.log("type")
  //       setCount(count => count + 1);
  //       break;
  //     case "minus": 
  //       setCount(count => count - 1);
  //       break;
  //   }
  // }

  const decrementCount = () => {
    setState(prevState => {
      return {count: prevState.count + 1};
    })
  }
  return (
    <>
      {/* <button onClick={() => handleAmount("minus")}>-</button>
      <span>{count}</span>
      <button onClick={() => handleAmount("plus")}>+</button> */}
      <button>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={decrementCount}>+</button>
    </>
  )
}

export default UseState;