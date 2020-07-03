import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Typical from 'react-typical'

function App() {
  return (
    <div className="App" id='homeAnchor'>
      <h1>
        Hello, I'm Prateek Diwedi.
      <p>
          I'm a{' '} 
          <Typical 
          loop={Infinity}
          wrapper='b'
          steps={[
            'Full Stack Developer',
            1000,
            'Free Lancer',
            1000,
            'Designer',
            1000,
            'Sports Enthusiast',
            1000
          ]}
          />
      </p>
      </h1>
      <div class="wrapper">
        <a id='landingPageButton' href="#aboutMeAnchor"><span>View My Work!</span></a>
      </div>
    </div>
  );
}

export default App;
