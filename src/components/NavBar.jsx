import React from 'react'
import './navbar.scss';

function NavBar() {
  return (
    <div className='navBarHide'>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTextId">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a className="nav-item nav-link" href="#homeAnchor">Home</a>
            </li>
            <li class="nav-item active">
              <a className="nav-item nav-link" href="#aboutMeAnchor">About</a>
            </li>
            <li class="nav-item active">
              <a className="nav-item nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li class="nav-item active">
              <a className="nav-item nav-link" href="#blogAnchor">Blog</a>
            </li>
            <li class="nav-item active">
              <a className="nav-item nav-link" href="#contactAnchor">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar