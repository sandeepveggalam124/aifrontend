import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './index.css'


const CaptureIcons = ({onIconClick,resetCapture}) => {
  const [clickedIcons,setClickedIcons]=useState([])
  const [isConfirmed,setIsConfirmed]=useState(false)


  const handleIconClick=(iconType)=>{

    const updatedIcons=clickedIcons.includes(iconType)?clickedIcons.filter((clickedIcons)=>clickedIcons !== iconType):[...clickedIcons,iconType]
    setClickedIcons(updatedIcons)
    console.log(`capturing image clicked`)
    onIconClick(iconType);
    checkAllIconsClicked(clickedIcons)
  }
  const checkAllIconsClicked=(icons)=>{
    if(icons.length===4)
    setIsConfirmed(true)
  }

  const handleReset=()=>{
    resetCapture()
    setClickedIcons([])
    console.log(clickedIcons)

  }
  
  return (
    <div className='icon-grid bg-black d-flex flex-column justify-content-center align-items-center'>
      <div className='row d-flex'>
        <div className='col d-flex flex-column justify-content-center align-items-center'>
          <label>Look Above</label>
          <img src='/assests/images/lookAbove.svg' alt={'lookAboveIcon'} onClick={()=>handleIconClick('Look Above')}
            className={`icon d-flex flex-column justify-content-center align-items-center mb-5 ${clickedIcons.includes('Look Above')? 'green-icon':''}`}
            data-testid="lookAboveIcon"
          />
          </div>
      </div>
      <div className='row d-flex justify-content-center align=items-center m-1 w-100'>
      <div className='col col-lg-4 d-flex flex-column justify-content-center align-items-center'>
          <label>Look Left</label>
        <div className='col col-lg-4 d-flex flex-column justify-content-center align-items-center'>
          <img src='/assests/images/lookLeft.svg' alt={'lookLeftIcon'} onClick={()=>handleIconClick('Look Left')}
            className={`icon d-flex flex-column justify-content-center align-items-center mb-5 ${clickedIcons.includes('Look Left')?'green-icon':''}`}/>        
      </div>
      </div>
      <div className='col col-lg-4 d-flex flex-column justify-content-center align-items-center'>
        <label>Look Front</label>
        <img src='/assests/images/lookFront.svg' alt={'lookFrontIcon'} onClick={()=>handleIconClick('Look Front')}
            className={`icon d-flex flex-column justify-content-center align-items-center mb-5 ${clickedIcons.includes('Look Front')?'green-icon':'white-icon'}`}/>        
      </div>
      <div className='col col-lg-4 d-flex flex-column justify-content-center align-items-center'>
        <label className='py-1'>Look Right</label>
        <img src='/assests/images/lookRight.svg' alt={'lookRightIcon'} onClick={()=>handleIconClick('Look Right')}
            className={`icon d-flex flex-column justify-content-center align-items-center mb-5 ${clickedIcons.includes('Look Right') ? 'green-icon':''}`}/>        
            </div>
      </div>
      <div className='row d-flex'>
      <div className='col col-lg d-flex flex-column justify-content-center align-items-center'>
        <label>Look Down</label>
        <img src='/assests/images/lookDown.svg' alt={'lookDownIcon'} onClick={()=>handleIconClick('Look Down')}
            className={`icon d-flex flex-column justify-content-center align-items-center mb-5 ${clickedIcons.includes('Look Down') ?'green-icon':''}`}/>        
            </div>
      </div>
      <div className='row d-flex'>
        <div className='col'>
          <button onClick={handleReset} className='btn btn-light rounded-4 fs-6 fw-bold'>Reset</button>
        </div>
        <div className='col'>
          <button className={`btn btn-light rounded-4 fs-6 fw-bold ${isConfirmed? '':'disabled'}`} disabled={!isConfirmed} >
            <Link to='/interview/startInterview' className='text-decoration-none text-dark'>
            Confirm
            </Link></button>
        </div>
      </div>
    </div>
  )
}

export default CaptureIcons