import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseLayoutEffect = () => {
    const [color,setColor ] = useState('red');
    useEffect(() => {
        setColor('green');
    })
    useLayoutEffect(() => {
        setColor('blue');
    })
    console.log(color);
  return (
    <div style = {{color: color}}>UseLayoutEffect</div>
  )
}

export default UseLayoutEffect;