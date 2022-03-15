import React, {useState,useEffect} from 'react'

const TimerLoader = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if(timer === 10) {
           return;
        }
        else{
            setTimeout(() => setTimer(time => time + 1),1000);
        }
    },[timer])
  return (
    <>
        <div>{timer}</div>
    </>
  )
}

export default TimerLoader