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
import tetris from "./tetrisScreenShot.png";
// import Weathernew from "./components/Weathernew";
import email from "./icons/emailicon.png";
import "./components/Aboutme/ame.module.css";
import mycv from "./ronaldPowellCV.pdf";
import cvicon from "./icons/cvicon.png";
import weatherapi from './icons/weatherapp.png';
import movieimage from './movieappimage.png';

// import { Link } from 'react-router-dom';
// import Letsconnectnew from './components/Letsconnectnew/Letsconnectnew';

function App() {
  return (
    <div className="App">
      <header className="headerMain">
        <Navbar />
      </header>
      <br></br>
      <main id="home">
        <section className="mainSection">
          <div className="mainContainer">
            <div className="homeContentLeft">
              <h1 className="titles">Junior Software Developer</h1>
              <div className="personalContacts">
                <a
                  href="https://www.linkedin.com/in/ron-powell-nyc212/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="linkedin" src={linkedin} title="LinkedIn" alt=''/>
                </a>
                <a
                  href="https://github.com/Notesmane"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="github" src={github} title="Github" alt='' />
                </a>

                <a href={mycv} target="_blank" rel='noreferrer'>
                  <img className="resume" src={cvicon} title="Resume" alt=''/>
                </a>
              </div>
              <p className="quickBlurb">
                Hi! My Name is Ron Powell. I'm a recent graduate from
                PerScholas' Certificate Course for Software Development.
                PerScholas is fully-sponsored by Google and Comcast and prepares
                its student for real world development. I'm based in NYC and
                can't wait to work with you on your next project.
              </p>
              <div className="techskills">
                <h4>Tech Stack </h4>
                <div className="skillsbox">
                  <img className="html" src={html} title="HTML-5" alt=''/>
                </div>
                <div className="skillsbox">
                  <img className="css" src={css} title="CSS3" alt=''/>
                </div>
                <div className="skillsbox">
                  <img className="javasc" src={javasc} title="JavaScript" alt=''/>
                </div>
                <div className="skillsbox">
                  <img className="reackt" src={reackt} title="React" alt=''/>
                </div>
                <div className="skillsbox">
                  <img
                    className="tailwind"
                    src={tailwind}
                    title="TailwindCSS"
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className="homeContentRight">
              <img className="h-full max-w-full" alt="..." src={headshot1} />
            </div>
          </div>
        </section>
        <section className="mainSection">
          <div className="projectsTitleBox">
            <h2 className="titles">Projects</h2>
            <h4>
              Each crafted with efficiency, style and usability in mind.
            </h4>
          </div>
          <div className="mainProjectContainerTop">
            {" "}
            {/* OUTER MOST CONTAINER */}
            <div className="projectImageColumn">
              {" "}
              {/* PROJECT IMAGE CONTAINER */}
              <img
                className="tetrisScreenShot"
                src={tetris}
                title="TetrisGame"
                alt=''
              />
            </div>
            <div className="projectInfoColumn">
              {" "}
              {/* PROJECT INFO CONTAINER */}
              <div className="projectContents">
                <h3>Tetris</h3>
              </div>
              <div className="projectContents">
                <p>
                  Have a few minutes to burn? How about you try your hand at
                  this fully immersive rendition of the retro arcade favorite:
                  Tetris! Go head to head against the computer in this
                  stimulating cyberpunk landscape while listening to a great
                  score to fit the theme.
                </p>
              </div>
              <div className="languages">
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>JavaScript</h4>
              </div>
              <div className="projectLinks">
                <div className="sourceLinks">
                  <h4>Code:</h4>
                  <a
                    href="https://github.com/Notesmane/Tetris-Project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="github" src={github} title="Github" alt=''/>
                  </a>
                </div>

                <div className="sourceLinks">
                  <h4>Demo:</h4>
                  <a
                    href="https://notesmane.github.io/Tetris-Project/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="openIcon" src={openicon} title="OpenPage" alt=''/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mainProjectContainer">
            {" "}
            {/* OUTER MOST CONTAINER */}
            <div className="projectInfoColumn">
              {" "}
              {/* PROJECT INFO CONTAINER */}
              <div className="projectContents">
                <h3>The Weather Api</h3>
              </div>
              <div className="projectContents">
                <p>
                  It's always good to know the current weather! With this App you can type in any city you want, and around the world and get up-to-date information about that city's current weather conditions! Just dont be a smart-alec and type in... -take a breath- Taumatawhakatangihangak -take another breath- oauauotamateaturipukaka  -and another- pikimaungahoronuku -almost there- pokaiwhenuakitanatahu... and expect an answer.
                </p>
              </div>
              <div className="languages">
                <h4>JavaScript</h4>
                <h4>React</h4>
                <h4>CSS</h4>
              </div>
              <div className="projectLinks">
                <div className="sourceLinks">
                  <h4>Code:</h4>
                  <a
                    href="https://github.com/Notesmane/Weather-App-API-Practice"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="github" src={github} title="Github" alt=''/>
                  </a>
                </div>

                <div className="sourceLinks">
                  <h4>Demo:</h4>
                  <a
                    href="https://notesmane.github.io/Tetris-Project/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="openIcon" src={openicon} title="OpenPage" alt=''/>
                  </a>
                </div>
              </div>
            </div>
            <div className="projectImageColumn">
              {" "}
              {/* PROJECT IMAGE CONTAINER */}
              <img
                className="tetrisScreenShot"
                src={weatherapi}
                title="The Weather API"
                alt=''
              />
            </div>
          </div>
          <div className="mainProjectContainer">
            {" "}
            {/* OUTER MOST CONTAINER */}
            <div className="projectImageColumn">
              {" "}
              {/* PROJECT IMAGE CONTAINER */}
              <img
                className="tetrisScreenShot"
                src={movieimage}
                title="TetrisGame"
                alt=''
              />
            </div>
            <div className="projectInfoColumn">
              {" "}
              {/* PROJECT INFO CONTAINER */}
              <div className="projectContents">
                <h3>The Movie App</h3>
              </div>
              <div className="projectContents">
                <p>
                  Don't you just hate it when you can't remember when a movie came out? Well with this app you can type in any movie title and abracadabra, the release year will be output along with some other basic information. Happy searching!
                </p>
              </div>
              <div className="languages">
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>JavaScript</h4>
              </div>
              <div className="projectLinks">
                <div className="sourceLinks">
                  <h4>Code:</h4>
                  <a
                    href="https://github.com/Notesmane/Movie-App-Practice"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="github" src={github} title="Github" alt=''/>
                  </a>
                </div>

                <div className="sourceLinks">
                  <h4>Demo:</h4>
                  <a
                    href="https://notesmane.github.io/Tetris-Project/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="openIcon" src={openicon} title="OpenPage" alt=''/>
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
        <div className="footer">
          <br></br>
          {/* <button>Email</button> */}
          <a
            href="https://www.linkedin.com/in/ron-powell-nyc212/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="linkedin" src={linkedin} title="LinkedIn" alt=''/>
          </a>
          <a
            href="https://github.com/Notesmane"
            target="_blank"
            rel="noreferrer"
          >
            <img className="github" src={github} title="Github" alt=''/>
          </a>
          <a
            href="mailto:ronpowell156@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img className="email" src={email} title="Contact" alt=''/>
          </a>
          {/* <button>Contact</button> */}
          {/* <button href="https://github.com/Notesmane">Github</button> */}
          <br></br>
        </div>
  
        <div className='copyRights'>
            <p>Website powered by: NotesMane of Noteworthy Productions   |   All Rights Reserved. Copyright, NYC - 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;



// {/* <nav className="navbar">
// {/* <div className='headerLeft'> */}
// <Weathernew />
// {/* </div> */}
// <div className="headerRight">
//   <Link activeClass="active" smooth spy to="home">
//     Home
//   </Link>
//   <Link activeClass="active" smooth spy to="projectsTitleBox">
//     Projects
//   </Link>
//   <Link activeClass="active" smooth spy to="about">
//     About Me
//   </Link>
//   <Link to="ContactForm">
//     {/* <Letsconnectnew /> */}
//     Let's Connect
//   </Link>
// </div>
// </nav> */}