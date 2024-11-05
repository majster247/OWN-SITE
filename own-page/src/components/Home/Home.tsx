import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import serviceNames from './serviceNames'; // Import the service names

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedGif, setSelectedGif] = useState(''); // State for random GIF
  const [bootMessages, setBootMessages] = useState<string[]>([]); // State for boot messages
  const maxVisibleProcesses = 17; // Maximum number of visible processes

  // Generate boot processes with random wait times
  const generateBootProcesses = () => {
    return serviceNames.map((name, index) => ({
      id: index, // Add an ID for unique key purposes
      name: name,
      wait: parseFloat((Math.random() * (1000 - 10) + 10).toFixed(2)), // Random wait time between 10ms and 1000ms
    }));
  };

  const bootProcesses = generateBootProcesses();

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
      const size = Math.random() * 2 + 1;
      const x = Math.random() * canvas.width;
      const y = -size;
      const speedX = Math.random() * 2 - 1; // Random horizontal speed
      const speedY = Math.random() * 2 + 1; // Vertical speed
      particles.push({ x, y, speedX, speedY, size });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#55555AA"; // Sand color

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
      if (Math.random() > 0.10) {
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

  const startBootAnimation = () => {
    const updateMessages = (index: number) => {
      if (index < bootProcesses.length) {
        const process = bootProcesses[index];
        const startingMessage = `[ ... ] Starting ${process.name}`;

      setTimeout(() => {
        setBootMessages((prevMessages) => {
          const updatedMessages = [...prevMessages, startingMessage];
          return updatedMessages.length > maxVisibleProcesses 
            ? updatedMessages.slice(1) 
            : updatedMessages;
        });}, 50); // Adjusted for speed

        setTimeout(() => {
          setBootMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];
            updatedMessages[updatedMessages.length - 1] = `[ OK ] Starting ${process.name}`;
            return updatedMessages;
          });

          setTimeout(() => {
            updateMessages(index + 1);
          }); 
        }, 50);// Adjusted for speed
      } else {
        setTimeout(() => {
          setBootMessages([]); // Clear messages after the last boot process
          startBootAnimation(); // Restart animation
        }, 1000);
      }
    };

    setTimeout(() => {
      updateMessages(0); // Start from the first service
    });
  };

  useEffect(() => {
    const gifNames = ['1.gif', '2.gif', '3.gif', '4.gif', '5.gif', '6.gif'];

    // Select a random GIF
    const randomGif = gifNames[Math.floor(Math.random() * gifNames.length)];

    // Set the selected GIF path
    const gifPath = `${process.env.PUBLIC_URL}/RPC/${randomGif}`;
    setSelectedGif(gifPath);
  }, []);

  useEffect(() => {
    startParticlesAnimation(); // Start particles animation on mount
    startBootAnimation(); // Start boot animation on mount
    return () => {
      // Cleanup code
      setBootMessages([]); // Clear messages
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
            <p>Embedded C/C++<br />OS-Dev Enjoyer<br />Cybersecurity</p>
            <div className="social-media">
              <a href="https://launchpad.net/~majster247">Launchpad</a>
              <a href="https://github.com/majster247">GitHub</a>
              <a href="https://app.hackthebox.com/profile/964262">Hack The Box</a>
              <a href="https://buycoffee.to/majster247">Buycoffee.to</a>
            </div>
          </div>
        </div>

        <div className="simulation-section">
          <h3>There will be something mindblowing from my head</h3>
          <canvas className="sand-canvas" ref={canvasRef}></canvas>
        </div>
      </section>

      <div className="right-section">
        <div className="about-section">
          <h2>About Me</h2>
          <div className="cool-stuff">
            <div className="gif-section">
              <img
                src={selectedGif}
                alt="Mindblowing animation"
                className="mindblowing-gif"
              />
            </div>
            <div className="boot-section">
              <div className="boot-messages">
                {bootMessages.map((message, index) => (
                  <div key={`${index}-${message}`} className="boot-message">
                    {/* Split the message into parts */}
                    {message.includes('OK') ? (
                      <>
                        <span>{message.split('[ OK ]')[0]}</span>
                        <span style={{ color: 'green' }}>[ OK ]</span>
                        <span>{message.split('[ OK ]')[1]}</span>
                      </>
                    ) : (
                      <span>{message}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
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
      </div>
    </div>
  );
};

export default Home;
