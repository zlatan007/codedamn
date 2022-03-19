import React, { useReducer, useState } from 'react'

const UseReducer = () => {
//   const [value,setValue] = useState(0);
 
  const reducer = (state, action) => {
    return {
        ...state, count: state.count + 1
    }
  }
  const [state, dispatch] = useReducer(reducer,{count:0})
  const increment = () => {
    dispatch();
  }
  console.log('state',state.count);
  return (
    <>
        <button>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
    </>
  )
}

export default UseReducer