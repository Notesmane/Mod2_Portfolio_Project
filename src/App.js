import Aboutme from "./components/Aboutme";
import "./index.css";
import headshot1 from "./headshot1.jpg";
import html from "./icons/html5icon.png";
import css from "./icons/cssicon.png";
import javasc from "./icons/jsicon.png";
import reackt from "./icons/reacticon.png";
import tailwind from "./icons/tailwindcssicon.png";
import Navbar from "./components/Navbar";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="App">
      <header className="headerMain">
        {/* <Navbar /> */}
        <nav className="navbar">
          <Link activeClass="active" smooth spy to="home">
            Home
          </Link>
          <Link activeClass="active" smooth spy to="projects">
            Projects
          </Link>
          <Link activeClass="active" smooth spy to="about">
            About Me
          </Link>
          <Link activeClass="active" smooth spy to="letconnect">
            Let's Connect
          </Link>
        </nav>
      </header>
      <br></br>
      <main id="home">
        <div className="mainContainer">
          <div>
            <h1 className="titles">Software Developer</h1>
            <p>Hi! My Name is Ronald Powell. I'm a recent graduate from PerScholas for Software Development which is fully-sponsored by Google and Comcast. I'm from NYC and can't wait to work with you on your next project.</p>
          </div>
          <div>

          </div>

          <div className="mainphoto">
            <img className="h-auto max-w-full" alt="..." src={headshot1} />
          </div>

        </div>
          <div className="techskills">
            <h4>Tech Stack|</h4>
            <div className="skillsbox">
              <img className="html" src={html} title="HTML-5" />
            </div>
            <div className="skillsbox">
              <img className="css" src={css} title="CSS3" />
            </div>
            <div className="skillsbox">
              <img className="javasc" src={javasc} title="JavaScript"/>
            </div>
            <div className="skillsbox">
              <img className="reackt" src={reackt} title="React"/>
            </div>
            <div className="skillsbox">
              <img className="tailwind" src={tailwind} title="TailwindCSS" />
            </div>
          </div>
        <br></br>
        <div className='mainContainer'>
        <div id="projects">
          <h2 className="titles">Projects</h2>
          <div className="projectboxes">
            <h3>Tetris</h3>
            <p>Have a few minutes to burn? How about you try your hand at this fully immersive rendition of the retro arcade favorite: Tetris! Go head to head against the computer in this stimulating cyberpunk landscape while listening to a great score to fit the theme. </p>
            <h3>Project 2</h3>
            <span>Short description of the project</span>
            <h3>Project 3</h3>
            <span>Short description of the project</span>
          </div>
        </div>

        </div>
        {/* <br></br> */}
        <div className='mainContainer'>
          <Aboutme />

        </div>
        {/* <br></br> */}
        <div>
          <h2>For Fun</h2>
          <ul>
            <li>Strength Training</li>
            <li>Dancing At Parties</li>
            <li>Travelling to New Places</li>
            <li>Anything Batman</li>
            <li>Yoga</li>
            <li>Beach Days</li>
          </ul>
        </div>
      </main>
      <br></br>
      <footer className="footer">
        <div>
          <br></br>
          <button>Email</button>
          <button>LinkedIn</button>
          <button>Projects</button>
          <button href="https://github.com/Notesmane">Github</button>
          <br></br>
        </div>
      </footer>
    </div>
  );
}

export default App;
