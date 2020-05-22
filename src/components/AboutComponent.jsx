import React, { useEffect } from 'react'
import './aboutComponent.scss';
import Aos from 'aos';
import 'aos/dist/aos.css'

function AboutComponent() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <div data-aos="fade-right" className='AboutMeAnimate'>
        <h2 className='aboutMe' id='aboutMeAnchor' >About</h2>
      </div>
      <div data-aos="flip-up" className="description">
        <h4>
          I’m a fullstack developer based in Beautiful British Columbia, Canada. I love solving complex problems and have a Bachelor’s degree in Computer Science. I also completed a Web Development program from Lighthouse Labs in February 2020. I enjoy creating beautifully designed, intuitive and functional websites.

     </h4>
      </div>
      <div className="skillContainer">
        <h3 className='mySkill'>My Skills</h3>
      </div>
      <div className="info">
        <p>HTML</p>
        <div data-aos="fade-up-right" className="container containerGraph">
          <div className="skills html">90%</div>
        </div>

        <p>CSS</p>
        <div data-aos="fade-up-left" className="container containerGraph">
          <div className="skills css">80%</div>
        </div>

        <p>JavaScript</p>
        <div data-aos="fade-up-right" className="container containerGraph">
          <div className="skills js">75%</div>
        </div>

        <p>React</p>
        <div data-aos="fade-up-left" className="container containerGraph">
          <div className="skills react">75%</div>
        </div>

        <p>Node.js</p>
        <div data-aos="fade-up-right" className="container containerGraph">
          <div className="skills node">70%</div>
        </div>

        <p>Ruby/Rails</p>
        <div data-aos="fade-up-left" className="container containerGraph">
          <div className="skills ruby">58%</div>
        </div>

        <p>UI Design</p>
        <div data-aos="fade-up-right" className="container containerGraph">
          <div className="skills ui">55%</div>
        </div>
      </div>
    </div>

  )
}

export default AboutComponent
