import React, { useState } from 'react'

// const Sample = () => {
//   const [state,setState] = useState({
//     counter: 0,
//     name: "Harshit Shukla",
//   });
//   console.log(state);
//   return (
//     <>
//       <div onClick = { (state) => {
//         // console.log('fr2w4e');
//         return { ...state, counter: 10}
//       }}>Sample</div>

//     </>
//   )
// }

const Sample = () => {
  const [state, setState] = useState(1);
  return (
    <>
      <div onClick = { () => {
        setState((state) => {
          return {...state, counter: 10};5
        })}}>Sample
      </div>
    </>
  )
}
export default Sample;