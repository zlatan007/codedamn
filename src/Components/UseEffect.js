import React,{ useEffect } from 'react'

const UseEffect = () => {
    // console.log('App started');

    const fetchData = async () => {
    //   const [ value, setValue ] = useState({}) 
      try {
        const response = await fetch('https://mocki.io/v1/e1d0e7d2-1ea1-4791-9503-1006f47644bf');
        const resObj = await response.json();
        console.log('response', resObj);
        // setValue(resObj);
      }
      catch (error) {
          console.log('error', error);
      }
    }
    useEffect(() => {
        fetchData();
    })

  return (
    <div>Hello</div>
  );
}

export default UseEffect