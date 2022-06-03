import React from 'react'
import './About.scss'

import { useLocation } from 'react-router-dom'
import { Footer, Navbar } from '../../components';


const About = () => {

  const location = useLocation().pathname;


  console.log(location)

  return (
    <div className="about">
      <Navbar />
      <div className="about__content">
        <div className="about__content-us">
          <div className="about__content-us-rectangle">
          </div>
          <div className="about__content-us-circle"></div>
          <div className="about__content-us-blur">
            <div className="about__content-us-rectangle-inner"></div>

          </div>
          <div className="about__content-us-content">
            <p>about us</p>
            <h1>Built for Saas and E-commerce</h1>
          </div>
          <p>Our tools are easy to set up and use with a user friendly dashboard that enables you to set up, launch, automate and manage multi-affiliate campaigns in 5 minutes.</p>
        </div>
        <h1 className="about__content-good-value">Metricks was developed because just like you, we needed a product that could give us<span> good value.</span></h1>
        <div className="about__content-know-us">
          <div className="about__content-know-us-left">
            <h4 className="about__content-know-us-left-why">why us?</h4>
            <p className="about__content-know-us-left-content">We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advertisers and affiliates.</p>
          </div>
          <div className="about__content-know-us-right">
            <div className="about__content-blur">
            <div className="about__content-blur-inner"></div>

            </div>
            <div className="about__content-rectangle"></div>
            <div className="about__content-content">
            <h4 className="about__content-content-grow">Growing with you</h4>
            <p>Leveraging the best technology, we have developed an all-in-one affiliate marketing tracking software, a genius tool to help you track, automate and optimize your influencer campaigns, all from one dashboard.</p>
            <p>Our team of experts are constantly brainstorming, testing and developing new solutions with only one thing in mind - your business growth. Your success is our success and by giving you the tools you need to scale, we grow as well.</p>

            </div>
          </div>
        </div>
        <div className="about__content-question">

        </div>
      </div>
      <Footer location={location} />
    </div>
  )
}

export default About
