import React,{useEffect, useRef} from 'react'

const UseRef = () => {
  const elementRef1 = useRef("ojiyhnj");
  const elementRef2 = useRef("ojiyhnj");

useEffect(() => {
    elementRef1.current.focus();
})
const functiondown = (e) => {
    console.log('shun');
    if(e.key === 'Enter') {
        elementRef2.current.focus();
        console.log('ekey',e.key);
    }
}

  return (
      <>    
        <input ref={elementRef1} onKeyDown={functiondown}/>
        <input ref={elementRef2} />
      </>
    
  )
}

export default UseRef;
