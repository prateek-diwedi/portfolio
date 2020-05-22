import React, { useEffect } from 'react'
import './portfolio.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <div class="container mt-40 mb-30">
        <h3 data-aos="zoom-in" class="text-center portfolio" id='portfolio'>Portfolio</h3>
        <div className='portfolioStart'>
          <div class="row mt-30">
            <div class="col-md-4 col-sm-6">
              <div data-aos="flip-left" class="box21">
                <img src="https://raw.githubusercontent.com/prateek-diwedi/scheduler/master/data/Screen%20Shot%202020-05-21%20at%206.33.31%20PM.png" alt="scheduler" />
                <div class="box-content">
                  <h4 class="title">Scheduler</h4>
                  <p class="description">React/JavaScript</p>
                  <a class="read-more" href="https://github.com/prateek-diwedi/scheduler">Learn More</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div data-aos="flip-up" class="box21">
                <img src="https://github.com/prateek-diwedi/tweeter/blob/master/public/images/Screen%20Shot%202020-05-21%20at%206.28.32%20PM.png?raw=true" alt="Tweeter" />
                <div class="box-content">
                  <h4 class="title">Twitter Clone</h4>
                  <p class="description">JavaScript/Ajax/JQuery/Html/Css</p>
                  <a class="read-more" href="https://github.com/prateek-diwedi/tweeter">Learn More</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div data-aos="flip-right" class="box21">
                <img src="https://github.com/prateek-diwedi/midterm_project_resource_wall/blob/master/public/images/Screen%20Shot%202020-05-21%20at%206.48.48%20PM.png?raw=true" alt="" />
                <div class="box-content">
                  <h4 class="title">Resource Wall</h4>
                  <p class="description">Node.Js/Express/JS/HTML/CSS</p>
                  <a class="read-more" href="https://github.com/prateek-diwedi/midterm_project_resource_wall">Learn More</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div data-aos="flip-left" class="box21" id='ecomerce'>
                <img src="https://github.com/prateek-diwedi/jungle-rails/blob/master/Data/Screen%20Shot%202020-05-21%20at%2010.38.03%20PM.png?raw=true" alt="jungleRails" />
                <div class="box-content">
                  <h4 class="title">E-commerce Website</h4>
                  <p class="description">Ruby/Rails/PG/SASS/</p>
                  <a class="read-more" href="https://github.com/prateek-diwedi/jungle-rails">Learn More</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div data-aos="flip-up" class="box21">
                <img src="https://github.com/prateek-diwedi/corona-map/blob/master/ScreenShots/1.png?raw=true" alt="CovidTracker" />
                <div class="box-content">
                  <h4 class="title">Corona Tracker</h4>
                  <p class="description">React.js/MapBox</p>
                  <a class="read-more" href="https://github.com/prateek-diwedi/corona-map">Learn More</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div data-aos="flip-right" class="box21">
                <img src="https://raw.githubusercontent.com/prateek-diwedi/foodee/master/data/Home%20Screen%201.png" alt="foodee" />
                <div class="box-content">
                  <h4 class="title">Foodee</h4>
                  <p class="description">React.js/Ruby/Rails/PG</p>
                  <a class="read-more" href="https://github.com/prateek-diwedi/foodee">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
