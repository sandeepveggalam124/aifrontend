import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { LoginContext } from '../../../../contexts/loginContext'

const EndCard = () => {
  const {logout}=useContext(LoginContext)
  // const handleClick=()=>{
  //   logout()
  // }
  return (
    <div className="card bg-black" style={{width:'25rem'}}>
    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
      <p className="card-text">Thank you for completing your interview with us. We 
              appreciate your time and interest in our company. We 
              will be in touch with you regarding the next steps in our 
              hiring process. Have a great day!</p>
      <button className="btn btn-light fs-6 fw-medium">
        <Link to='/login' className='text-decoration-none text-dark'>
          Ok
        </Link>
      </button>
    </div>
  </div>
   
  )
}

export default EndCard