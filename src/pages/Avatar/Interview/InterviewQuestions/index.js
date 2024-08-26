import React from 'react';
import { useLocation } from 'react-router-dom';
import ImageComponent from '../../Landing/AvatarImage/index';
import VideoComponent from '../CaptureVideo';
import {Link} from 'react-router-dom'
import Timer from '../Timer';


const InterviewQuestion = () => {
  const location=useLocation()
  const avatarSrc='/assests/images/avatar.svg'
  const avatarAlt='Avatar Image'
  const containerWidth='100%'
  const containerHeight='auto'
  const displaySize='100%'
  const interviewTime=new Date()
  interviewTime.setMinutes(interviewTime.getMinutes()+30)
  


  return (
    <div className="row custom-div text-white">
      <div className="col col-lg-1 bg-last-image"></div>
      <div className="col col-lg-2 bg-black d-flex flex-column justify-content-between p-1">
        <div className='border border-opacity-10 rounded-5 w-50 m-2 align-items-center'> 
          <Timer expiryTimestamp={interviewTime} displaySize={displaySize} showCountdown={false} showClock={true} onExpireNavigate="/interview/endInterview" />
        </div>
        <div className='mt-auto'>        
          <VideoComponent width={containerWidth} height={containerHeight} audio={false} showConfirmButton={false}/>
        </div>
      </div>

        <div className="col col-lg-6 bg-black d-flex flex-column align-item-stretch p-0">
            {location.pathname==="/interview/question" && <ImageComponent src={avatarSrc}  alt={avatarAlt}/>}
        </div>
      
       <div className="col col-lg-2 bg-black d-flex justify-content-center align-items-end mb-2">
       <button  className="login py-1 justify-content-center align-items-center" >
          <Link 
            to="/interview/finish"
            className="text-decoration-none finsih-link fs-6 fw-medium">
            Next
          </Link>
       </button>
      </div>
      <div className="col col-lg-1 bg-last-image"></div>
    </div>
  )
}

export default InterviewQuestion