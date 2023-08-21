// import Letsconnect from "./Letsconnect";
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';
import Weathernew from "./Weathernew";
// import ScrollTo from 'react-scroll-into-view';
// import Letsconnect from "./components/Letsconnect";
import React from 'react';
import ReactDOM from 'react-dom';

const Navbar = () => {
  
  return (
    <nav className="navbar">
    {/* <div className='headerLeft'> */}
    <Weathernew />
    {/* </div> */}
    <div className="headerRight">
      <Link activeClass="active" smooth spy to="home">
        Home
      </Link>
      <Link activeClass="active" smooth spy to="projectsTitleBox">
        Projects
      </Link>
      <Link activeClass="active" smooth spy to="about">
        About Me
      </Link>
      <Link to="/Mod2/mod2project/src/components/Letsconnectnew/Letsconnectnew.js">
      {/* <a href='letsconnect.html'> */}
        Let's Connect
      {/* </a> */}
        {/* <Letsconnectnew /> */}
      </Link>
    </div>
  </nav>
  );
};

export default Navbar;



