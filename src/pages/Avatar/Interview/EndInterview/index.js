import React from 'react'
import { useLocation } from 'react-router-dom';
import ImageComponent from '../../Landing/AvatarImage/index';
import EndCard from '../EndCard';

const EndNote = () => {
  
  const avatarSrc='/assests/images/avatar.svg'
  const avatarAlt='Avatar Image'

  return (
    <div className="row custom-div text-white">
      <div className="col col-lg-1 bg-last-image"></div>

        <div className="col col-lg-10 bg-black d-flex flex-column align-item-stretch position-relative p-0">
        <ImageComponent src={avatarSrc}  alt={avatarAlt}/>
        {/* </div> */}
      
      {/* <div className="col col-lg-4 bg-black d-flex flex-column align-items-left justify-content-center"> */}
      <div className='position-absolute m-4' style={{right:'10%',bottom:'40%'}}>        
        <EndCard/>
      </div>

    </div>
      <div className="col col-lg-1 bg-last-image"></div>
    </div>
  )
}

export default EndNote