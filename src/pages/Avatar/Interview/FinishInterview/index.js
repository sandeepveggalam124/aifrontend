import React from 'react';
import { useLocation } from 'react-router-dom';
import ImageComponent from '../../Landing/AvatarImage/index';
import VideoComponent from '../CaptureVideo';
import {Link} from 'react-router-dom'
import Timer from '../Timer';

const FinishInterview = () => {
  const location=useLocation()
  const avatarSrc='/assests/images/avatar.svg'
  const avatarAlt='Avatar Image'
  const containerWidth='100%'
  const containerHeight='auto'
  const interviewTime=new Date()
  interviewTime.setMinutes(interviewTime.getMinutes()+30)
  


  return (
    <div className="row custom-div text-white">
      <div className="col col-lg-1 bg-last-image"></div>
        <div className="col col-lg-10 bg-black d-flex flex-column align-item-stretch p-0 position-relative">
            {location.pathname==="/interview/finish" && <ImageComponent src={avatarSrc}  alt={avatarAlt}/>}
        {/* </div> */}
      
       {/* <div className=""> */}
       <button  className="login py-1 justify-content-center align-items-center position-absolute bottom-0 end-0 m-2" >
          <Link 
            to="/interview/end"
            className="text-decoration-none finsih-link fs-6 fw-medium">
            Finish
          </Link>
       </button>
      </div>
      <div className="col col-lg-1 bg-last-image"></div>
    </div>
  )
}

export default FinishInterview