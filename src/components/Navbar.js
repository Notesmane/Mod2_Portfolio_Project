// import Letsconnect from "./Letsconnect";
import {navHashLink as Link} from 'react-router-dom'
import ScrollTo from 'react-scroll-into-view'

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="links">
        <a href="/">Home</a>
        <a href="/Projects">Projects</a>
        <a href="/Projects">About Me</a>
        {/* <a
          href="/Aboutme"
          onClick={(e) => {
            let bio = document.getElementsById("bio");
            e.preventDefault()
            bio && bio.scrollIntoView();
          }}
        >
          bio
        </a> */}

        <a href="/Letsconnect">Let's Connect</a>
        {/* <Letsconnect /> */}
      </div>
    </nav>
  );
};

export default Navbar;



