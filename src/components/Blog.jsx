import React, { useEffect } from 'react'
import './blog.scss';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Blog() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <div data-aos="fade-right" >
        <h2 className='blogStart' id='blogAnchor'>Blog</h2>
      </div>
      <div id='blogCards'>
        <div id = 'webSocketCard'>
          <div className="card" id='cardId' data-aos="zoom-in-up">
            <img src="https://miro.medium.com/max/1400/0*przoL-MI2YE9xuqC.gif" class="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">WebSockets and what are they used for?</h5>
              <p className="card-text">A WebSocket is a bi-directional communication channel consisting of a server and a client. Once opened it stays open until ...</p>
              <a href="https://medium.com/@diwedi1112/websockets-and-what-are-they-used-for-cac3bf30aaec" className="btn btn-primary">Read</a>
            </div>
          </div>
        </div>

        <div id = 'pairProgramingCard'>
          <div className="card" id='cardId' data-aos="zoom-in-up">
            <img src="https://miro.medium.com/max/844/1*tuzijxcm09FOQzcJxxR5wg.png" class="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Pair programing</h5>
              <p className="card-text">Doing Pair programming is as same as going on a road trip with your friend...</p>
              <a href="https://medium.com/@diwedi1112/pair-programming-9ec2d79809a0" className="btn btn-primary">Read</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
