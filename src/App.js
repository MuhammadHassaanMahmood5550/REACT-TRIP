import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Trip from './components/Trip';
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTOP from "./components/ScrollToTOP";

function App() {
  useEffect(() => {
    Aos.init({duration: 1000});
}, []);

  return (
    <Router>
      <ScrollToTOP></ScrollToTOP>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/About">
            <About></About>
          </Route>
          <Route exact path="/Trip">
            <Trip></Trip>
          </Route>
          <Route exact path="/Blog">
            <Blog></Blog>
          </Route>
          <Route exact path="/Contact">
            <Contact></Contact>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App
