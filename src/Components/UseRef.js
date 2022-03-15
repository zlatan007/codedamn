import React,{useEffect, useRef} from 'react'

const UseRef = () => {
  const elementRef = useRef("ojiyhnj");

//   useEffect(() => {
//       console.log('Ref element', elementRef.current);
//   })

  const focus = () => {
    elementRef.current.focus();
  }
  return (
      <>
        <input ref={elementRef} />
        <button onClick={focus}>Focus</button>
      </>
    
  )
}

export default UseRef;