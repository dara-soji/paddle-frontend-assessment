import React, { useRef, useState } from 'react'
import './Comingsoon.scss'

import { Footer, Navbar } from '../../components'
import { useLocation } from 'react-router-dom'

const Comingsoon = () => {

  const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()

    const location = useLocation().pathname;
    const [path, setPath] = useState("comingsoon");
    
    const changePath = (path) => {
        setPath(path);
      }
 
      console.log(path)
      console.log(location)
  return (
    <div className="comingsoon">
      <Navbar />
      <div className="comingsoon__content">
        <h1 className="comingsoon__content-heading">Something awesome is coming soon</h1>
        <p className="comingsoon__content-subtext">Your all-in-one affiliate marketing tracking software <span>track, automate </span>and <span>optimize</span> your campaigns.</p>

        <div className="the-countdown">
                        
              {["days", "hours", "minutes", "seconds"].map((item) =>(
               
                <div className="countdown-box" key={`count-${item}`}>
                <h1>12</h1>
                <p>{item}</p>
            </div>
            ))}

        </div>

        <form className="comingsoon__waiting-list app__flex">

            <div className="comingsoon__name-input app__flex">
                <input className="login_input" type="text" id="firstname-waiting" placeholder="First Name.." ref={firstNameRef} required/>
                <input className="login_input" type="text" id="lastname-waiting" placeholder="Last Name.." ref={lastNameRef} required/>
            </div>
            <div className="comingsoon__email-submit app__flex">
                <input className="login_input" type="email" id="lastname-waiting" ref={emailRef} placeholder="Enter your email address.." required/>
            <button  className="login_btn">
                Join Our Waiting List
            </button>
            </div>
        </form>
      </div>
      <div className="comingsoon__circle" />
      <Footer location={location} />
    </div>
  )
}

export default Comingsoon
