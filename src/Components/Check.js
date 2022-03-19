import React, { useEffect, useState } from 'react'

const Check = () => {
    const [value,setValue]= useState(false)
    console.log('App started');
    useEffect(() => {
        console.log('useEffect called');
        setValue(true);
        return () => {
            console.log('cleanUp called');
        }
    },[])
    console.log('App ended');
  return (
      <>
        <div>Check</div>
        <button onClick={() => setValue(!value)}>Click me</button>
      </>
  )
}

export default Check