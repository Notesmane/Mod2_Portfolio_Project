
import './index.css';
import headshot1 from './headshot1.jpg';

function App() {
  return (
    <div className="App">
     
      <header className="headerMain">
        <div className="navBar">
          <button>Home</button>
          <button>About Me</button>
          <button>Projects</button>
          <button>Let's Connect</button>
        </div>
      </header>
      <main>
        <h1>Ron Powell</h1>
        <div>
          <img className='headShot' src={ headshot1 }/>
        </div>
        <div className='techSkills'>
          <h2>Technical Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className='projects'>
          <h2>Projects</h2>
          <ul>
            <li>Project 1</li>
            <span>
              Short description of the project
            </span>
            <li>Project 2</li>
            <span>
              Short description of the project
            </span>
            <li>Project 3</li>
            <span>
              Short description of the project
            </span>
          </ul>
        </div>
        <div className="bio">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div>
          <h2>For Fun</h2>
          <ul>
            <li>hobby1</li>
            <li>hobby2</li>
            <li>hobby3</li>
            <li>hobby4</li>
            <li>hobby5</li>
            <li>hobby6</li>
          </ul>
        </div>
      </main>
      <footer>
        <div>
          <button>Email</button>
          <button>LinkedIn</button>
          <button>Projects</button>
          <button>Github</button>
        </div>
      </footer>

    </div>
  );
}

export default App;
