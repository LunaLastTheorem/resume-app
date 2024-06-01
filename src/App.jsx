import Navigation from "./NaviBar/Navigation"
import Footer from "./Footer/Footer"
import Movies from "./MovieModule/Movies"
import pfp from "./assets/pfp.jpg"
import brighticon from "./assets/bright.png"
import { useState } from "react"

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDarkTheme) {
      root.style.setProperty('--background-color', getComputedStyle(root).getPropertyValue('--background-color-light'));
      root.style.setProperty('--primary-color', getComputedStyle(root).getPropertyValue('--primary-color-light'));
      root.style.setProperty('--secondary-color', getComputedStyle(root).getPropertyValue('--secondary-color-light'));
      root.style.setProperty('--third-color', getComputedStyle(root).getPropertyValue('--third-color-light'));
      root.style.setProperty('--text-color', getComputedStyle(root).getPropertyValue('--text-color-light'));
      root.style.setProperty('--default-gradient', getComputedStyle(root).getPropertyValue('--light-gradient'));
    } else {
      root.style.setProperty('--background-color', getComputedStyle(root).getPropertyValue('--background-color-dark'));
      root.style.setProperty('--primary-color', getComputedStyle(root).getPropertyValue('--primary-color-dark'));
      root.style.setProperty('--secondary-color', getComputedStyle(root).getPropertyValue('--secondary-color-dark'));
      root.style.setProperty('--third-color', getComputedStyle(root).getPropertyValue('--third-color-dark'));
      root.style.setProperty('--text-color', getComputedStyle(root).getPropertyValue('--text-color-dark'));
      root.style.setProperty('--default-gradient', getComputedStyle(root).getPropertyValue('--dark-gradient'));
    }
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <div id="root">
        <div className="nonfooter">

          <div className="navigation">
            <div id="scrollingbar">
              <Navigation />
            </div>
          </div>

          <div className="main">
            <div className="content" id="education">
              <h1>Education</h1>
              <h2>Pacific Luitheran University <span>Tacoma WA</span></h2>
              <h3>BS Computer Science (Expected May 2026)</h3>
              <h3>BS Computer Science (Expected May 2026)</h3>
              <h3>GPA: 3.87</h3>
              <ul>
                <li>Computer Science: Intro To Computer Science (A), Data Structures (A), Databases and Web Programming (A), Algorithms (ongoing), Computer Organizations (-ongoing-)</li>
                <li>Applied Mathematics: Calculus I (A), Calculus II (A), Introduction to Math Statistics (B+), Introduction to Proofs:  Combinatorics (A), Seminar in Problem Solving (P), Multivariable Calculus (A), Linear Algebra (B+)</li>
              </ul>

              <h2>Univesity of Washington <span>Seattle WA</span></h2>
              <h3>College in the High School Program (August 2019 -May 2021)</h3>
              <ul>
                <li>
                  Introduction to General Chemistry (P), Elementary Spanish (A), Intermediate Spanish (A-), Pre-calculus (B+), Composition: Literature (A), Composition: Exposition (A).
                </li>
              </ul>

            </div>
            <div className="content" id="experience">
              <h1>Experience</h1>

              <h2>Rose Window Studios, <span>Tacoma WA</span></h2>
              <h3>Head of Audio</h3>
              <h4>April 2024 - Current</h4>
              <ul>
                <li>
                  Supervised all on-set sound recording, ensuring high-quality capture  for dialogue, ambient sounds, and special audio effects
                </li>
                <li>
                  worked closely with the team to align audio elements with the film's vision and resolved audio-related issues promptly.
                </li>
              </ul>

              <h2>Late Knight, <span>Tacoma WA</span></h2>
              <h3>Host, Writer, Audio Operator</h3>
              <h4>September 2023 - Current</h4>
              <ul>
                <li>
                  Wrote, filmed, recorded audio, and hosted for Pacific Lutheran University's late night comedy show “Late Knight”
                </li>
              </ul>

              <h2>Knack/Pacific Lutheran University, <span>Tacoma WA</span></h2>
              <h3>Tutor</h3>
              <h4>February 2024 - Current</h4>
              <ul>
                <li>
                  Assisted peers with coursework, adapting instruction to individual learning styles to improve academic performance.
                </li>
              </ul>

              <h2>Washington Beef LLC, <span>Toppenish WA</span></h2>
              <h3>Tray Maker / Beef Production Worker (Pack-Off)</h3>
              <h4>July 2021 - September 2021,  June 2022 - July 2023</h4>
              <ul>
                <li>
                  Operated a box-making machine according to orders, maintaining accuracy and efficiency in a fast-paced environment.
                </li>
                Recording the number of pallets used.
                <li>
                cleansing the department to avoid contamination of the boxes. 
                </li>
                <li>
                frequent fixes to jammed machines.
                </li>
                <li>
                creating special orders of boxes for other departments. 
                </li>
                <li>
                Packed various cuts of beef into boxes according to the schedule requiring heavy lifting and pulling of 70+ pounds continually.
                </li>
                <li>
                Accurately communicated and satisfied accurate orders according to a schedule in a fast-paced environment.
                </li>
              </ul>

              <h2>Toppenish School District, <span>Toppenish WA</span></h2>
              <h3>Tennis Intramural Coach</h3>
              <h4>June 2021 - July 2021</h4>
              <ul>
                <li>
                Coached junior high students, managed equipment, and organized tournaments.
                </li>
              </ul>

            </div>
            <div className="content" id="projects">
              <h1>Projects</h1>
               
              <h2>Words Not Being Said</h2>
              <h3>Audio Director</h3>
              <h4>May 2024</h4>
              <ul>
                <li>Led all on-set sound recordings, ensuring high-quality audio aligned with the film’s vision.</li>
              </ul>

              <h2>The Tunnel Audio Operator,  Stunt Double</h2>
              <h3>Audio Operator,  Stunt Double</h3>
              <h4>February 2024-April 2024</h4>
              <ul>
                <li>Start.</li>
              </ul>

              <h2>Late Knight Website</h2>
              <h3>Full-Stack Developer</h3>
              <h4>March 2024-May 2024</h4>
              <ul>
                <li>Developed a dynamic website featuring a query search bar for episodes, utilizing SQL, React, Node.js, and Microsoft Azure.</li>
              </ul>


              <h2>International Collegiate Programming Contest (ICPC)</h2>
              <h3>Participant</h3>
              <h4>February 2024</h4>
              <ul>
                <li>Solved advanced algorithmic problems with a team, achieving a top 30 spot in the northwest region.</li>
              </ul>

              <h2>The Mathematical Contest in Modeling (MCM)</h2>
              <h3>Participant</h3>
              <h4>February 2024</h4>
              <ul>
                <li>Developed a 12-page solution report for a real-world problem, demonstrating data analysis and problem-solving skills.</li>
              </ul>


              <div id="movies">
                <Movies />
              </div>
            </div>
          </div>

          <div className="sidebar">
            <img src={pfp} id="profile" alt="profile picture" />
            <div className="basicinfo name">
              <h1>David Luna Guitron</h1>
              <p>
                Computer Science, Applied Mathematics StudentPacific Lutheran University, Tacoma Washington.
              </p>
            </div>

            <div className="basicinfo">
              <div id="basicinfo-contact">
                <h1>contact info</h1>
                <ul>
                  <li><a href="mailto:dluna777@outlook.com">Mail</a></li>
                  <li>(509)853-7139</li>
                </ul>
              </div>

              <div id="basicinfo-skills">
                <h1>skills</h1>
                <ul>
                  <li>Creative Solver</li>
                  <li>Easy Learner</li>
                  <li>Programming</li>
                  <li>Time Manager</li>
                  <li>Attentive to Detail</li>
                  <li>Active Communication</li>
                  <li>Instrumental Abilities</li>
                  <li>Instructing</li>
                  <li>Facilitation</li>
                  <li>Recording Equipment </li>
                  <li>Intermediate Video Editing</li>
                  <li>Cooking</li>
                  <li>Collaboration</li>
                  <li>Innovation</li>
                  <li>Perform Under Pressure</li>
                </ul>
              </div>

              <div id="basicinfo-languages">
                <h1>languages</h1>
                <ul>
                  <li>English (fluent)</li>
                  <li>Spanish(Native)</li>
                </ul>
              </div>

              <div id="basicinfo-programming">
                <h1>programming languages</h1>
                <ul>
                  <li>Java</li>
                  <li>HTML/CSS</li>
                  <li>Javascript
                    <ul>
                      <li>Expressjs</li>
                      <li>Node.js</li>
                      <li>React</li>
                    </ul>
                  </li>
                  <li>MySQL</li>
                </ul>
              </div>

            </div>
            <div className="nightswitch">
              <button onClick={toggleTheme}><img src={brighticon} /></button>
            </div>

          </div>

          <div className="phoneNavi">
            <Navigation />
          </div>

        </div>

        <div className="footer">
          <Footer />

        </div>
      </div>
    </>
  )
}

export default App
