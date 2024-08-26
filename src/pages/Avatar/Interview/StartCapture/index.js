import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../../../contexts/loginContext'
import { CapitalizeName } from '../../../../utils/capitalizeName'

const StartCapture = () => {
  const {user:name}=useContext(LoginContext)
  const userName=CapitalizeName(name)
  return (
    <>
    <div className='card bg-black'>
        <div className='card-body'>
            <p className='card-text text-center'>
            {userName}, Please be ready to sit in front of your system's camera
            as we'll be capturing pictures of your face from various angles:
             left, right, straight on, top corner, and bottom corner.
            </p>
        </div>
      </div>
      <div>
        <button className='btn btn-light rounded-4 fs-6 fw-bold'><Link to='/interview/captureIcons' className='text-decoration-none text-dark'>Click</Link></button>
      </div>
      </>
  )
}

export default StartCapture