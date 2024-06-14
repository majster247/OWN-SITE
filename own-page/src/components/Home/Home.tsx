import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dots, setDots] = useState(''); // State for dots animation
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref for interval ID

  // Function to start the particles animation
  const startParticlesAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; speedY: number; speedX: number; size: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    const createParticle = () => {
      const size = Math.random() * 2;
      const x = Math.random() * canvas.width;
      const y = -size;
      const speedX = Math.random() * 3 - 2; // Random horizontal speed
      const speedY = Math.random() * 3 + 1; // Vertical speed
      particles.push({ x, y, speedX, speedY, size });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#c2b280"; // Sand color

      particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.y += particle.speedY;
        particle.x += particle.speedX;

        // Check if particle is out of bounds
        if (particle.y > canvas.height || particle.x < 0 || particle.x > canvas.width) {
          particles.splice(index, 1);
        }
      });
    };

    const updateParticles = () => {
      if (Math.random() > 0.85) {
        createParticle();
      }

      drawParticles();
      requestAnimationFrame(updateParticles);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    updateParticles(); // Start particles animation

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  };

  useEffect(() => {
    startParticlesAnimation(); // Start particles animation on mount
  }, []);

  // Function to start the loading animation
  const startLoadingAnimation = () => {
    intervalRef.current = setInterval(() => {
      setDots(prevDots => prevDots.length < 5 ? prevDots + '.' : ''); // Add dots progressively
    }, 500);
  };

  useEffect(() => {
    startLoadingAnimation(); // Start loading animation dots

    // Cleanup: Clear interval on unmount and restart animation after 3 seconds
    const restartAnimation = () => {
      clearInterval(intervalRef.current!);
      setDots('');
      setTimeout(() => {
        startLoadingAnimation();
      }, 500);
    };

    // Stop loading animation after 3 seconds (adjust as needed)
    setTimeout(() => {
      restartAnimation();
    }, 3000);

    // Cleanup: Clear interval on unmount
    return () => {
      clearInterval(intervalRef.current!);
    };
  }, []);

  return (
    <div className="home-container">
      <section className="left-section">
        <div className="profile-section">
          <img
            className="profile-picture"
            src="https://avatars.githubusercontent.com/u/74077594?v=4"
            alt="Profile"
          />
          <div className="profile-details">
            <h2>Hubert Topolski</h2>
            <p>Embedded C/C++ Programmer<br />Cybersecurity</p>
            <div className="social-media">
              <a href="https://launchpad.net/~majster247">Launchpad</a>
              <a href="https://github.com/majster247">GitHub</a>
              <a href="https://app.hackthebox.com/profile/964262">Hack The Box</a>
            </div>
          </div>
        </div>

        <div className="simulation-section">
        <h3>There will be something mindblowing from my head{dots}</h3>
          <canvas className="sand-canvas" ref={canvasRef}></canvas>
        </div>
      </section>

      <section className="right-section">
        <div className="about-section">
          <h2>About Me</h2>
          <div className="about-item">
            <h3>Technical Programmer</h3>
            <p>
              As a technical programmer specializing in Embedded C/C++ and Assembly x86-64 and ARM, I am passionate about designing and developing robust and efficient solutions. My expertise includes working with microcontrollers and embedded systems, ensuring optimal performance and reliability.
            </p>
          </div>

          <div className="skills-section">
            <h3>Skills</h3>
            <div className="skills-list">
              <div className="skill">
                <h4>Languages:</h4>
                <p>C/C++, Assembly (x86-64, ARM), Python, TypeScript, Bash</p>
              </div>
              <div className="skill">
                <h4>Frameworks:</h4>
                <p>Flask, ASP.NET, Node.js, Express.js</p>
              </div>
              <div className="skill">
                <h4>Databases:</h4>
                <p>SQL, MongoDB</p>
              </div>
              <div className="skill">
                <h4>Other:</h4>
                <p>Linux, Git, Cybersecurity (Offensive Techniques, Penetration Testing)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
