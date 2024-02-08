// Home.tsx
import React from "react";
import "./Home.css"; // Import your Home component CSS file
import MeImage from "./me.jpg"; // Import your image

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="header-main">
        <h1>Hubert Topolski</h1>
        <p>Programmer/Cybersecurity</p>
      </header>

      <section className="welcome-section">
        <h2>Welcome to my website!</h2>
        <img className="profile-picture" src={MeImage} alt="That's me UwU" />
      </section>

      <section className="linki" id="linksys">
        <div className="launchpad">
          <h3>Launchpad</h3>
          <a href="https://launchpad.net/~majster247">Launchpad</a>
        </div>
        <div className="github-link">
          <h3>GitHub</h3>
          <a href="https://github.com/majster247">GitHub Profile</a>
        </div>
        <div className="hackthebox-stats">
          <h3>Hack The Box</h3>
          <a href="https://www.hackthebox.eu/profile/106063">Hack The Box Profile</a>
        </div>
        <div className="TryHackMe">
          <h3>TryHackMe</h3>
          <a href="https://tryhackme.com/p/majster247">TryHackMe Profile</a>
        </div>
      </section>

      <section className="about-section">
        <h2>About Me</h2>

        <div id="backend">
          <h3>Backend-Full Stack Development</h3>
          <p>
            I am a programmer specializing in backend and full-stack development. My expertise includes designing and developing robust and scalable applications.
          </p>
          <p>I have experience with the following languages:</p>
          <ul>
            <li>Python</li>
            <li>C#</li>
            <li>ASM64</li>
            <li>Kotlin</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Bash</li>
            <li>C/C++</li>
          </ul>
          <p>I am proficient in frameworks such as Flask, ASP.NET, Node.js, and Express.js. I also have knowledge in databases, including SQL and MongoDB.</p>
        </div>

        <div id="cybersec">
          <h3>Cybersecurity</h3>
          <p>
            I have experience in cybersecurity, including offensive security techniques and defensive measures. I specialize in offensive security and penetration testing.
          </p>
          <p>My skills include:</p>
          <ul>
            <li>Offensive security techniques</li>
            <li>Penetration testing</li>
            <li>Secure code review</li>
            <li>Security assessment and auditing</li>
          </ul>
        </div>

        <div>
          <h3>IOT, Cybersecurity, Backend Development</h3>
          <p>
            I am passionate about Internet of Things (IoT), cybersecurity, and backend development. I constantly strive to expand my knowledge and explore new technologies to create innovative and secure solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
