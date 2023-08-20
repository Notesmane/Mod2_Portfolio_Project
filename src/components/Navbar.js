// import Letsconnect from "./Letsconnect";
import {navHashLink as Link} from 'react-router-dom';
import ScrollTo from 'react-scroll-into-view';
// import Letsconnect from "./components/Letsconnect";

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="links">
        <a href="/">Home</a>
        <a href="/Projects">Projects</a>
        <a href="/Projects">About Me</a>
        {/* <a href=>Let's Connect</a> */}
        {/* <a href="/Letsconnect">Let's Connect</a> */}
        {/* <Letsconnect /> */}
      </div>
    </nav>
  );
};

export default Navbar;



