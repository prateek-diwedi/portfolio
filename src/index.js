import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/NavBar'
import Portfolio from './components/Portfolio'
import AboutComponent from "./components/AboutComponent"
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <AboutComponent />
    <Portfolio />
    <Blog />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
