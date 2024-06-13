import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { InlineMath, BlockMath } from "react-katex";
import RemarkMathPlugin from "remark-math";
import "katex/dist/katex.min.css"; // Optional, for KaTeX styles
import "./Portfolio.css";

// Define the type for the components prop of ReactMarkdown
interface Renderers {
  [key: string]: React.ComponentType<{ value: string }>;
}

const projects = [
  {
    name: "Babylon Library",
    description:
      "Babylon Library is an Open Source project that allows users to make progress in math, physics, or IT.",
    repo: "https://github.com/majster247/Babylon-Library",
    readme:
      "https://raw.githubusercontent.com/majster247/Babylon-Library/main/README.md",
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
    name: "AMS",
    description:
      "AMS OS is a simple and minimalistic self-written OS for own research purposes.",
    repo: "https://github.com/majster247/AMS",
    website: "https://ams-os.enigmasec.studio",
    readme:
      "https://raw.githubusercontent.com/majster247/AMS/main/README.md",
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

  // Define the renderers for ReactMarkdown
  const renderers: Renderers = {
    inlineMath: ({ value }: { value: string }) => <InlineMath math={value} />,
    math: ({ value }: { value: string }) => <BlockMath math={value} />,
  };

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
                remarkPlugins={[RemarkMathPlugin]}
                components={renderers} // Pass the renderers object here
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
