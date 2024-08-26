import React,{useState} from 'react'
import './index.css'

const GoLink = () => {
  const [highlightedLink, setHighlightedLink] = useState(0);

  const links = [
    "GoStandOut",
    "GoLearn",
    "GoToTest",
    "GoSolveCode"
  ];

  const handleLinkClick = (index) => {
    setHighlightedLink(index);
  };

  return (
    <div className='row text-white'>
        <div className="col col-lg-12 d-flex align-items-center flex-column ">
          <div className='py-5'>
          <img src="/assests/images/profile.svg" alt="Bootstrap" />

          </div>
        <div className="rotate-text p-5">
        <a
            href={`link_to_${links[0].toLowerCase()}`}
            className={`welcome-text ${highlightedLink === 0 ? 'highlighted-link' : ''}`}
            onClick={() => handleLinkClick(0)}
          >
            {links[0]}
          </a>
        </div>
        <div className="rotate-text p-5">
        <a
            href={`link_to_${links[1].toLowerCase()}`}
            className={`welcome-text ${highlightedLink === 1 ? 'highlighted-link' : ''}`}
            onClick={() => handleLinkClick(1)}
          >
            {links[1]}
          </a>
        </div>
        <div className="rotate-text p-5">
        <a
            href={`link_to_${links[2].toLowerCase()}`}
            className={`welcome-text ${highlightedLink === 2 ? 'highlighted-link' : ''}`}
            onClick={() => handleLinkClick(2)}
          >
            {links[2]}
          </a>
        </div>
        <div className="rotate-text p-5">
        <a
            href={`link_to_${links[3].toLowerCase()}`}
            className={`welcome-text ${highlightedLink === 3 ? 'highlighted-link' : ''}`}
            onClick={() => handleLinkClick(3)}
          >
            {links[3]}
          </a>
        </div>
      </div>
    </div>
  )
}

export default GoLink