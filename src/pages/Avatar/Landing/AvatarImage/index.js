import React,{memo} from 'react'
import './index.css'


const ImageComponent=memo(({src,alt})=>{
  return(
  
      <div className='embed-container p-0'>
        <img src={src} alt={alt} loading='lazy'></img>

      </div>
  )
})
export default ImageComponent