import React, { useEffect, useState } from 'react'

const Temp = () => {
    useEffect(() => {
        console.log('peter1');
    });
    useEffect(() => {
        console.log('peter2');
    });
  return (
    <>
      {console.log('hello')}
    </>
  )
}

export default Temp