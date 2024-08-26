import React,{forwardRef} from 'react'
import Webcam from 'react-webcam'
import './index.css'

const CameraComponent =forwardRef ((props,ref) => {

  return (
    <div className='embed-container d-flex flex-column align-items-center justify-content-center img-fluid'>
        <Webcam 
        audio={false}
        ref={ref}
        screenshotFormat='image/jpeg'
        className='responsive-webcam'
        // width={585}
        // height={786}
        />
    </div>
  )
})

export default CameraComponent