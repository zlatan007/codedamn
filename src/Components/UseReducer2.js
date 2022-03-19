import React,{ useReducer, useState} from 'react'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

const UseReducer2 = () => {
  const [ name,setName ] = useState('');

  const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false }
  }

  const reducer = (state,action) => {
      switch(action.type) {
          case "add":
              return [...state, newTodo(action.payload.name)]
      }
  }
  const [state, dispatch] = useReducer(reducer,[]);
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({ type: "add", payload: { name: name}});
      console.log('name', name);
      setName('');
  }
  console.log("state", state);
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setName(e.target.value)} />
    </form>
  )
}

export default UseReducer2;