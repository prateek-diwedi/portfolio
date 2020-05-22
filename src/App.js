import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App" id='homeAnchor'>
      <h1>
        Hello, I'm Prateek Diwedi.
      <p>
          I'm a Full Stack Developer
      </p>
      </h1>
      <div class="wrapper">
        <a id='landingPageButton' href="#aboutMeAnchor"><span>View My Work!</span></a>
      </div>
    </div>
  );
}

export default App;
