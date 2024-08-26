import React, { memo, useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';
import { ReactComponent as ClockVector } from './clockVector.svg';

import './index.css'

const Timer = memo(({ expiryTimestamp, displaySize, showCountdown,showClock,onExpireNavigate }) => {
  const[showClockVector,setShowClockVector]=useState(showClock)
  // useEffect{()=>{
  //   setShowClockVector(showClockVector)
  // }}
  const navigate = useNavigate();

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
  } = useTimer({ expiryTimestamp, onExpire: () => onExpireNavigate && navigate(onExpireNavigate) });

  useEffect(() => {
    start();
  }, [start]);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-2'>
    <div className='d-flex justify-content-center align-items-center'>
    {showClockVector &&
     <ClockVector className='clock-vector-class mx-1'/>
    }     
      <div style={{fontSize:displaySize}}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
    <div>
        <p>{isRunning && showCountdown ? `${minutes} minutes left to start the interview` : ''}</p>
    </div>
    </div>
  );
});

export default Timer;
