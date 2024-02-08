// Portfolio.tsx
import React from "react";
import "./Portfolio.css"; // Import your Portfolio component CSS file

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>

      <ul className="portfolio-list">
        <li className="portfolio-item">
          <h3>Babylon Library</h3>
          <p>Babylon Library is an Open Source project that allows users to make progress in math, physics, or IT.</p>
          <a href="https://github.com/majster247/Babylon-Library">GitHub Repository</a>
        </li>

        <li className="portfolio-item">
          <h3>SoftSimulate</h3>
          <p>Simple code for simulating soft bodies, created for educational purposes. The code simulates a pressure model using the Verlet integration method</p>
          <a href="https://majster247.github.io/SoftSimulate/">Website</a>
          <a href="https://github.com/majster247/SoftSimulate">GitHub Repository</a>
        </li>

        <li className="portfolio-item">
          <h3>AMS</h3>
          <p>AMS OS is a simple and minimalistic self-written OS for own research purposes.</p>
          <a href="https://github.com/majster247/AMS">GitHub Repository</a>
          <a href="https://ams-os.enigmasec.studio">Website</a>
        </li>

        <li className="portfolio-item">
          <h3>TedSokoban</h3>
          <p>Typescript-written open source Sokoban game with Ted Kaczynski.</p>
          <a href="https://github.com/majster247/TedSokoban">GitHub Repository</a>
        </li>

        <li className="portfolio-item">
          <h3>Colorscheme</h3>
          <p>Colorscheme is a simple bash script that allows the user to print a table of colors in the terminal</p>
          <img src="https://github.com/majster247/colorscheme/raw/main/docs/example.png" width="25%" height="25%" alt="Colorscheme Example" />
          <a href="https://github.com/majster247/colorscheme">GitHub Repository</a>
          <a href="https://snapcraft.io/colorscheme">Snapcraft mirror</a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
