import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div>
      <footer>
        <div className="icon">
          <a href = 'https://www.linkedin.com/in/prateek-diwedi/'><i class="fa fa-linkedin fa-3x" ></i></a>
          <a href = 'https://www.facebook.com/diwedi'><i class="fa fa-facebook fa-3x" ></i></a>
          <a href = 'https://github.com/prateek-diwedi'><i class="fa fa-github fa-3x" ></i></a>
          <a href = 'https://www.instagram.com/prateek1112/'><i class="fa fa-instagram fa-3x" ></i></a>
        </div>
        <div className="copyright">
        <p>© 2020 Prateek Diwedi</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
