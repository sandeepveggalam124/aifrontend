import React ,{useState,useRef}from 'react'
import {useLocation } from 'react-router-dom'
import ImageComponent from '../AvatarImage'
import WelcomeText from '../WelcomeText'
import GoLink from '../../../../components/home/GoLink'
import StartCapture from '../../Interview/StartCapture'
import StartInterview from '../../Interview/StartInterview'
import CameraComponent from '../../Interview/CaptureImage'
import CaptureIcons from '../../Interview/CaptureIcon'
import VideoComponent from '../../Interview/CaptureVideo'

const AvatarLanding = () => {
  const location=useLocation()
  const avatarSrc='/assests/images/avatar.svg'
  const avatarAlt='Avatar Image'
  const containerWidth='100%'
  const containerHeight='auto'

  const webcamRef=useRef(null);
  const [capturedImages,setCapturedImages]=useState([])
  const captureImage=()=>{
    if(webcamRef.current){
    const imageSrc=webcamRef.current.getScreenshot();
    setCapturedImages((prevImages)=>[...prevImages,imageSrc])
    console.log(capturedImages)
  }
  }

  const resetCapture=()=>{
    setCapturedImages([])
  }
  return (
    <div className="row custom-div text-white">
        <div className='col col-lg-1 border-end d-flex flex-column align-items-center'>
            <GoLink/>
        </div>
        <div className='col col-lg-5 border-end d-flex flex-column align-item-stretch p-0'>
            {location.pathname==='/avatarLanding' && <ImageComponent src={avatarSrc} alt={avatarAlt}/>}            
            {location.pathname==='/interview/startCapture' && <ImageComponent src={avatarSrc} alt={avatarAlt}/>}
            {location.pathname==='/interview/startInterview' && <ImageComponent src={avatarSrc} alt={avatarAlt}/>}                      
            {location.pathname==='/interview/captureIcons' && <CameraComponent  ref={webcamRef}/>}
            {location.pathname==='/interview/captureVideo' && <ImageComponent src={avatarSrc} alt={avatarAlt}/>}

        </div>
        <div className='col col-lg-5 bg-black d-flex flex-column justify-content-center align-items-center img-fluid'>
            {location.pathname==='/avatarLanding' && <WelcomeText/>}
            {location.pathname==='/interview/startCapture' && <StartCapture/>}
            {location.pathname==='/interview/startInterview' && <StartInterview/>}                      
            {location.pathname==='/interview/captureIcons' && <CaptureIcons onIconClick={captureImage} resetCapture={resetCapture}/>}
            {location.pathname==='/interview/captureVideo' && <VideoComponent ref={webcamRef} width={containerWidth} height={containerHeight} audio={false} showConfirmButton={true}/>}

        </div>
        <div className='col col-lg-1 bg-last-image'></div>
        
    </div>
  )
}

export default AvatarLanding