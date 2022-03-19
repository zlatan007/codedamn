import React, { useEffect, useState } from 'react'

const Test = () => {
    const [value, setValue] = useState(0);

    
    useEffect(() => {
        if(value !==4) {
            setTimeout(() => setValue(value => value + 1),2000);
        }
        else{
            return;
        }
    })
  return (
    <div>{value}</div>
  )
}

export default Test