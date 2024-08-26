import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../../../contexts/loginContext'
import { CapitalizeName } from '../../../../utils/capitalizeName'

const StartInterview = () => {
  const {user:name}=useContext(LoginContext)
  const userName=CapitalizeName(name)
  return (
    <>
    <div className='card bg-black'>
        <div className='card-body'>
            <p className='card-text text-center'>
                {userName}, Now please prepare to be in front of your computer's 
                camera for video capture, showcasing your face from different 
                angles: left, right, straight on, top corner, and bottom corner.
            </p>
        </div>
      </div>
      <div>
        <button className='btn btn-light fs-6 fw-medium'>
          <Link to='/interview/captureVideo' className='text-decoration-none text-dark'>
            Start
          </Link>
        </button>
      </div>
      </>
  )
}

export default StartInterview