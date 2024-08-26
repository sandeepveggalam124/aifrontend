import React from 'react';
import { Link} from 'react-router-dom';
import './index.css';

const WelcomeText = () => {

  return (
    <div className="bg-black d-flex flex-column justify-content-center align-items-center m-5 position-relative text-center">
        <h2>Rules:</h2>
        <p>Candidates should be aware that discriminatory behavior or
        comments will not be tolerated. 
        The interview process is based solely on qualifications and merit.
        </p>
        <p>
        These rules and regulations are intended to create a 
        professional and respectful interview environment while 
        ensuring that candidates have a clear understanding of 
        expectations during the AI HR interview process.
        </p>
        <p>
        Online interview rules: Limited chances to adjust in front 
        of AIDishaCode during HR Round. Over 10 wrong head 
        moves result in disqualification; must reappear next time.
        </p>
        <div className='ms-1'>
          <button 
          type="button" 
          className="btn rounded-4 fs-6 fw-bold btn-light"
          >
            <Link to='/interview/startCapture' className='text-decoration-none text-dark'>Start</Link>
            
          </button>
        </div>
    </div>
  )
}

export default WelcomeText