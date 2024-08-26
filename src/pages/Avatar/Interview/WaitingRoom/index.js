import React from 'react'
import Timer from '../Timer'
import GoLink from '../../../../components/home/GoLink'

const WaitingRoom = () => {
  const interviewStartTime = new Date();
  interviewStartTime.setMinutes(interviewStartTime.getMinutes() + 1);
  return (
    <div className="row custom-div text-white">
    <div className='col col-lg-1 border-end d-flex flex-column align-items-center'>
        <GoLink/>
    </div>
    <div className='col col-lg-10 d-flex flex-column justify-content-around align-items-center'>
      <Timer expiryTimestamp={interviewStartTime} displaySize={100} showCountdown={true} onExpireNavigate="/interview/question" />

    </div>
    <div className='col col-lg-1 bg-last-image'></div>


    </div>
  )
}

export default WaitingRoom