import Aboutme from "./components/Aboutme/Aboutme";
import "./index.css";
import headshot1 from "./headshot1.jpg";
import html from "./icons/html5icon.png";
import css from "./icons/cssicon.png";
import javasc from "./icons/jsicon.png";
import reackt from "./icons/reacticon.png";
import tailwind from "./icons/tailwindcssicon.png";
import Navbar from "./components/Navbar";
import github from "./icons/githubicon.png";
import linkedin from "./icons/linkedinicon.png";
import openicon from "./icons/openicon.png";
// import { Link } from "react-scroll";
import tetris from './tetrisScreenShot.png';
import Weathernew from './components/Weathernew';
import email from './icons/emailicon.png';
import './components/Aboutme/ame.module.css';
import { Link } from 'react-router-dom';
// import Letsconnectnew from './components/Letsconnectnew/Letsconnectnew';

function App() {
  return (
    <div className="App">
      <header className="headerMain">
        {/* <Navbar /> */}

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
              <Link to="ContactForm">
                {/* <Letsconnectnew /> */}
                Let's Connect
              </Link>
            </div>
          </nav>

      </header>
      <br></br>
      <main id="home">
        <section className='mainSection'>
          <div className="mainContainer">
            <div className='homeContentLeft'>
              <h1 className="titles">Junior Software Developer</h1>
              <p>
                Hi! My Name is Ron Powell. I'm a recent graduate from
                PerScholas' Certificate Course for Software Development. PerScholas is fully-sponsored by
                Google and Comcast and prepares its student for real world development. I'm based in NYC and can't wait to work with you on your next project.
              </p>
              <a href="https://www.linkedin.com/in/ron-powell-nyc212/" target='_blank' rel='noreferrer'>
                <img className="linkedin" src={linkedin} title="LinkedIn" />
              </a>
              <a href="https://github.com/Notesmane" target='_blank' rel='noreferrer'>
              <img className="github" src={github} title="Github" />
              </a>
              <div className="techskills">
                <h4>Tech Stack </h4>
                <div className="skillsbox">
                  <img className="html" src={html} title="HTML-5" />
                </div>
                <div className="skillsbox">
                  <img className="css" src={css} title="CSS3" />
                </div>
                <div className="skillsbox">
                  <img className="javasc" src={javasc} title="JavaScript" />
                </div>
                <div className="skillsbox">
                  <img className="reackt" src={reackt} title="React" />
                </div>
                <div className="skillsbox">
                  <img className="tailwind" src={tailwind} title="TailwindCSS" />
                </div>
              </div>
            </div>
            <div className="homeContentRight">
              <img className="h-full max-w-full" alt="..." src={headshot1} />
            </div>
          </div>
        </section>
        <section className='mainSection'>
          <div className="projectsTitleBox">
              <h2 className="titles">Projects</h2>
              <h4>Each project crafted with efficiency, style and usability in mind.</h4>
          </div>
          <div className="mainContainer"> {/* OUTER MOST CONTAINER */}

            <div className='projectImageColumn'> {/* PROJECT IMAGE CONTAINER */}
              <img className="tetrisScreenShot" src={ tetris } title="TetrisGame" />
            </div>
            <div className="projectInfoColumn"> {/* PROJECT INFO CONTAINER */}
              
              <div className='projectContents'>
                  <h3>Tetris</h3>
              </div>

              <div className='projectContents'>
                  <p>
                    Have a few minutes to burn? How about you try your hand at this
                    fully immersive rendition of the retro arcade favorite: Tetris!
                    Go head to head against the computer in this stimulating
                    cyberpunk landscape while listening to a great score to fit the
                    theme.
                  </p>
              </div>

              <div className='projectContents'>
                <h4>React</h4><h4>CSS</h4>
              </div>

              <div className='projectContents'>
                <div className='sourceLinks'>
                    <h4>Code</h4>
                    <a href="https://github.com/Notesmane/Tetris-Project" target='_blank' rel='noreferrer'>
                    <img className="github" src={github} title="Github" />
                    </a>
                </div>

                <div className='sourceLinks'>
                  <h4>Live Demo</h4>
                  <a href="https://notesmane.github.io/Tetris-Project/" target='_blank' rel='noreferrer'>
                  <img className="openIcon" src={openicon} title="OpenPage" />
                  </a>
                </div>
              </div>

        </div>


      </div>
        </section>

            {/* <div className="projectboxes"> 
              <div className='projects'> 
                <div className="projectInfoColumn">
                <div>

                </div>

                </div>

              </div>
              <div className='projects'>
                <h3>Tetris</h3>
                <p>
                  Have a few minutes to burn? How about you try your hand at this
                  fully immersive rendition of the retro arcade favorite: Tetris!
                  Go head to head against the computer in this stimulating
                  cyberpunk landscape while listening to a great score to fit the
                  theme.
                </p>
                <h4>Code</h4>
                <img className="github" src={github} title="Github" />
                <h4>Live Demo</h4>
                <img className="openIcon" src={openicon} title="OpenPage" />

              </div>
              <div className='projects'>
                <h3>Tetris</h3>
                <p>
                  Have a few minutes to burn? How about you try your hand at this
                  fully immersive rendition of the retro arcade favorite: Tetris!
                  Go head to head against the computer in this stimulating
                  cyberpunk landscape while listening to a great score to fit the
                  theme.
                </p>
                <h4>Code</h4>
                <img className="github" src={github} title="Github" />
                <h4>Live Demo</h4>
                <img className="openIcon" src={openicon} title="OpenPage" />

              </div>
            </div> */}




        {/* <br></br> */}
        <div className="mainContainer">
          <Aboutme />
          
        </div>
      </main>
      <br></br>
      <footer>
        <div className='footer'>
          <br></br>
          {/* <button>Email</button> */}
          <a href="https://www.linkedin.com/in/ron-powell-nyc212/" target='_blank' rel='noreferrer'>
            <img className="linkedin" src={linkedin} title="LinkedIn" />
          </a>
          <a href="https://github.com/Notesmane" target='_blank' rel='noreferrer'>
            <img className="github" src={github} title="Github" />
          </a>
          <a href="https://github.com/Notesmane" target='_blank' rel='noreferrer'>
            <img className="email" src={email} title="Contact" />
          </a>
          {/* <button>Contact</button> */}
          {/* <button href="https://github.com/Notesmane">Github</button> */}
          <br></br>
        </div>
      </footer>
    </div>
  );
}

export default App;
