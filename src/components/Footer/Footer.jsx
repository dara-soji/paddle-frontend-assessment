import React from 'react'
import './Footer.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = ({ location}) => {

  const HOME_STYLES = {
  

      backgroundImage: "none"
  }

  const CIRCLE_STYLES = {

    position: 'absolute',
    
    width: '1989px',
    height: '1989px',
    background: 'transparent linear-gradient(180deg, #213F72 0%, #19073B 100%) 0% 0% no-repeat padding-box',
    border: '1px solid #707070',
    opacity: '0.5',
    backdropFilter: 'blur(27px)', 
    borderRadius: '50%',
    top: '0',
    left: '0',
    right: "0",
//   left: 50%;
  transform: 'translate(-15%, 0)',
  }
  return (
    <div className="footer" style={location === "/"? HOME_STYLES: {display: "flex"}}>
      <div className="footer__circle" style={location === "/"? CIRCLE_STYLES: {display: "none"}}></div>
      <div className="footer__icons app__flex">
      {[<FacebookOutlinedIcon/>, <TwitterIcon />, <InstagramIcon />, <LinkedInIcon/>, <YouTubeIcon />].map((item) =>(
                <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                {item}
                </li>
            ))}
      </div>
      <div className="footer__policy app__flex">
          <p>Terms and services</p>
          <p>Privacy Policy</p>

      </div>
      <div className="footer__copyright">
        <p>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
