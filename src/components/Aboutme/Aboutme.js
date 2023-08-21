// import cvicon from '../src/icons/cvicon.png';
// import mycv from './compon';
import './ame.module.css';



function Aboutme() {


  return (
    <div id="about">
      <h2 className="aboutMe">About Me</h2>
      <div className='biotext'>

        Highly motivated Software Engineer with a unique background as an
        Industrial Engineer in the prestigious NYC Carpenter's Union with a
        focus in Commercial Carpentry. Demonstrated adaptability, exceptional
        multitasking abilities, and proven team leadership skills in managing
        complex workflows. Eager to leverage my diverse experience and embark on
        a fulfilling career as a full stack engineer, where I can independently
        and collaboratively cultivate my technical skills. Committed to
        delivering innovative solutions and contributing to the success of a
        leading software engineering organization.
        <br></br><br></br>
        My transition into Tech... As a Carpenter in the NYC Union, I honed my
        skills in all aspects of carpentry. However, due to the changing climate
        of the Construction industry post-lockdown, I decided to explore a new
        industry that had captured my interest during the quarantine;
        day-trading.
        <br></br><br></br>
        During this time, I delved into day-trading and discovered TD
        Ameritrade's ThinkOrSwim platform, which featured a proprietary coding
        language called "Thinkscript." As someone who had a natural affinity for
        computer science, I found myself enjoying the coding aspect of trading
        more than the actual trading itself. The more I learned about
        Thinkscript, the more I realized that I had rekindled my passion for
        computer science and the creativity that can be expressed through
        coding.
        <br></br><br></br>
        After pausing my trading activities in September 2022, I enrolled in
        Harvard's Extension course Cs50x, which provides a comprehensive
        introduction to software engineering, including C, Python, Javascript,
        HTML, CSS, and topics such as arrays, algorithms, data structures, and
        memory. I couldn't get enough and proceeded my tech education completing
        various certificate programs in various tech related areas such as Cloud
        Computing at the IBM Skills Network, Intro to Agile Dev and Scrum on
        Coursera, Intro to DevOps also on Coursera, and even CompTia's
        CyberSecurity(CC) course.
        <br></br><br></br>
        I'm currently enrolled in PerScholas for Software Engineering, which is
        sponsored by Google and Comcast.

      </div>
      {/* <p className="biotext">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </p> */}
      <a href="https://github.com/Notesmane" target='_blank' rel='noreferrer'>
            {/* <img className="email" src={cvicon} title="Contact" /> */}
          </a>
      <div className="forFun">
      <select id="forFun">
        <option value="For Fun" selected>
        For Fun
        </option>
        <option value="Cycling">Cycling</option>
        <option value="Travelling to New Places">Travelling to New Places</option>
        <option value="Anything Batman">Anything Batman</option>
        <option value="Going to The Movies">Going to The Movies</option>
        <option value="Beach/Park Days">Beach/Park Days</option>
      </select>
        {/* <h2>For Fun</h2>
        <ul>
          <li>Strength Training</li>
          <li>Cycling</li>
          <li>Travelling to New Places</li>
          <li>Anything Batman</li>
          <li>Going to The Movies</li>
          <li>Beach Days</li>
        </ul> */}
      </div>
    </div>
  );
}

export default Aboutme;
