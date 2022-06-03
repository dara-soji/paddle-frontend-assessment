import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Navbar = () => {

  const [path, setPath] = useState("comingsoon");
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState(['about us', 'blog', 'github', 'contact us'])
  const [openContact, setOpenContact] = useState(false)

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const helpRef = useRef();

  const changePathAndClose = (path) => {
    setPath(path);
    
}


  return (
    <div className="navbar ">
      <Link to="/comingsoon">

      <img src={process.env.PUBLIC_URL + '/metricks.png'} /> 
      </Link>
      <ul className="navbar__link app__flex">
      {menu.map((item) =>(
                <li className={item === 'contact us' ? `app__flex p-text navbar__btn` : `app__flex p-text`} key={`link-${item}`}>
                <div />
                {item === "contact us"? <p onClick={() => setOpenContact(true)}>{item}</p>:<Link className="app__link" to={item === "about us"? "/about": `/${item}`}>{item}</Link>}
                </li>
            ))}
      </ul>

      <div className="app__navbar-menu">
            <MenuIcon onClick={() => setToggle(true)} />

            {
              toggle && (
                <div
                >
                  <CloseIcon onClick={() => setToggle(false)} />
                  <ul className="app__navbar-links">
          {menu.map((item) =>(
            <li className={item === 'contact us' ? `app__flex navbar__btn` : `app__flex`} onClick={() => setToggle(false)} key={`link-${item}`}>
            {/* <div /> */}
            {item === "contact us"? <p onClick={() => setOpenContact(true)}>{item}</p>:<Link className="app__link" to={item === "about us"? "/about": `/${item}`}>{item}</Link>}
            </li>
            // <li key={`${item}`}>
            // <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
            // </li>
          ))}
        </ul>
                </div>
              )}
        </div>

              {
                openContact && (

                  <>
                    <div className="contact__back app__flex" onClick={() => setOpenContact(false)}><ArrowForwardIcon fontSize="large" /></div>
                  <div className="contact">

                    <h1>Hey, we are still in the works, but you can send us a message!</h1>
                    <form className="contact__form">
                      <label>
                        <p>First Name</p>
                        <input type="text" name="firstName" id="contact-firstname" placeholder="Enter your first name" ref={firstNameRef} required/>
                      </label>
                      <label>
                        <p>Last Name</p>
                        <input type="text" name="lastName" id="contact-lastname" placeholder="Enter your last name" ref={lastNameRef} required/>
                      </label>
                      <label>
                        <p>Email Address</p>
                        <input type="email" name="email" id="contact-email" placeholder="Enter your email address" ref={emailRef} required/>
                      </label>
                      <label>
                        <p>Tell us what you need help with:</p>
                        <textarea type="text" name="help" id="contact-help" placeholder={`Enter a topic, like " channel problem... "`} ref={firstNameRef} required/>
                      </label>
                      <button>send now</button>
                    </form>
                  </div>
                    <div className="contact__blur"></div>
                  </>
                )
              }

    </div>
  )
}

export default Navbar
