import React from 'react'
import "./Hero.css"
// import sticker from "../../assets/Hero/sticker.png"
import sticker2 from "../../assets/Hero/sticker2.png"
import { useNavigate } from 'react-router-dom';
import image from "../../assets/Hero/image-top.png"


function Hero() {
  const navigate = useNavigate();
  return (

    <main >
      <section className='section-hero'>
      <img src={sticker2} alt="floating sticker" className="sticker2"/>
        <div className='head'><h1>Hi ! I am <br className='mobile-break' /> Hafsa Arshad</h1>
        </div>

        <div className='container1 grid grid-two--cols'>

          <div className='section-hero--left'>
            <img src={image} alt="image" className="image-top"/>
          </div>
          <div className='section-hero--content'> 
            <div className='tagline'> 
            <span className='tag2'> Front-End Developer</span> <br />
            Bringing ideas to life through elegant, responsive, 
            and immersive web experiences that engage users and make every interaction
             meaningful.
               <div className="resume-parent">
    <a href="/Resume1.pdf"
      className="resume-btn"
        download="Hafsa-Arshad-Resume.pdf">📄 Download My Resume</a>
       </div>
  </div>
          </div>
        </div>
        <div className='btn-parent'>
          <button className='btn' onClick={() => navigate('/work')}>
            View My Work 💌
          </button> 
          </div>
      </section>

    </main>

  )
}

export default Hero
