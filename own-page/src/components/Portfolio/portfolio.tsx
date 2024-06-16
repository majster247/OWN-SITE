import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // Optional, for KaTeX styles
import "./Portfolio.css";

const projects = [
  {
    name: "AMS",
    description:
      "AMS OS is a simple and minimalistic self-written OS for own research purposes.",
    repo: "https://github.com/majster247/AMS",
    website: "https://ams-os.enigmasec.studio",
    readme:
      "https://raw.githubusercontent.com/majster247/AMS/main/README.md",
  },
  {
    name: "SoftSimulate",
    description:
      "Simple code for simulating soft bodies, created for educational purposes. The code simulates a pressure model using the Verlet integration method",
    repo: "https://github.com/majster247/SoftSimulate",
    website: "https://majster247.github.io/SoftSimulate/",
    readme:
      "https://raw.githubusercontent.com/majster247/SoftSimulate/main/README.md",
  },
  {
    name: "SpacePlanner",
    description:"SpacePlanner to narzędzie służące do generowania map miejskich o różnych cechach takich jak drogi, lasy, budynki, infrastruktura, chodniki i wiele więcej. Projekt ten umożliwia tworzenie wizualizacji pikselowej oraz potencjalnie w przyszłości 3D map miast w oparciu o różnorodne parametry wejściowe.",
    repo: "https://github.com/majster247/SpacePlanner/",
    readme: "https://raw.githubusercontent.com/majster247/SpacePlanner/main/README.md",
  },
  {
    name: "Minecraft-C",
    description:"This project is an unofficial rewrite of the popular game Minecraft using C++. The aim is to understand and replicate the core mechanics of Minecraft, while leveraging the performance and control benefits of C++.",
    repo: "https://github.com/majster247/Minecraft-C",
    readme: "https://raw.githubusercontent.com/majster247/Minecraft-C/main/README.md",
  },
  {
    name: "Babylon Library",
    description:
      "Babylon Library is an Open Source project that allows users to make progress in math, physics, or IT.",
    repo: "https://github.com/majster247/Babylon-Library",
    readme:
      "https://raw.githubusercontent.com/majster247/Babylon-Library/main/README.md",
  },
  
  {
    name: "TedSokoban",
    description:
      "Typescript-written open source Sokoban game with Ted Kaczynski.",
    repo: "https://github.com/majster247/TedSokoban",
    readme:
      "https://raw.githubusercontent.com/majster247/TedSokoban/master/README.md",
  },
  {
    name: "Colorscheme",
    description:
      "Colorscheme is a simple bash script that allows the user to print a table of colors in the terminal",
    repo: "https://github.com/majster247/colorscheme",
    snapcraft: "https://snapcraft.io/colorscheme",
    readme:
      "https://raw.githubusercontent.com/majster247/colorscheme/main/README.md",
  },
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(
    null
  );
  const [readme, setReadme] = useState<string | null>(null);

  useEffect(() => {
    if (selectedProject) {
      fetch(selectedProject.readme)
        .then((response) => response.text())
        .then((data) => setReadme(data))
        .catch((error) => console.error("Error fetching README:", error));
    }
  }, [selectedProject]);

  return (
    <div>
      <div className="portfolio-header">
        <h2 id="siemka">Portfolio</h2>
      </div>
      <div className="portfolio-container">
        <div className="left-panel">
          <ul className="portfolio-list">
            {projects.map((project, index) => (
              <li key={index} className="portfolio-item">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {project.website && <a href={project.website}>Website</a>}
                <a href={project.repo}>GitHub Repository</a>
                {project.snapcraft && (
                  <a href={project.snapcraft}>Snapcraft mirror</a>
                )}
                <button onClick={() => setSelectedProject(project)}>
                  View Details
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="right-panel">
          {!selectedProject ? (
            <div className="message">Click on a project to see details</div>
          ) : (
            <div className="readme-content">
              <ReactMarkdown
                children={readme || "Loading..."}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]} // Add rehype-katex plugin here
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
