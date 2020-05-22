import React from 'react'
import './NavBar.scss';

function NavBar() {
  return (
    <div className='navBarHide'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#homeAnchor">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#aboutMe">About</a>
            <a className="nav-item nav-link" href="#portfolio">Portfolio</a>
            <a className="nav-item nav-link" href="#">Blog</a>
            <a className="nav-item nav-link" href="#">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
