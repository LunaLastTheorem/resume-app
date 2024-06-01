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

  return(
    <>
    <div id="root">
      <div className="nonfooter">
        
        <div className="navigation">
          <div id="scrollingbar">
            <Navigation />
          </div>
        </div>

        <div className="main">
          <div id="movies">

            <Movies />

          </div>

        </div>

        <div className="sidebar">

          <img src= {pfp} id="profile" alt="profile picture"/>

          <div className="basicinfo">
            <div id="basicinfo-contact">
              <h1>contact info</h1>
              <ul>
                <li>Lorem</li>
              </ul>
            </div>

            <div id="basicinfo-summary">
              <h1>profile</h1>
              <ul>
                <li>Lorem</li>
              </ul>
            </div>

            <div id="basicinfo-skills">
              <h1>skills</h1>
              <ul>
                <li>Lorem</li>
              </ul>
            </div>

            <div id="basicinfo-languages">
              <h1>languages</h1>
              <ul>
                <li>Lorem</li>
              </ul>
            </div>

            <div id="basicinfo-programming">
              <h1>programming languages</h1>
              <ul>
                <li>Lorem</li>
              </ul>
            </div>
            

          </div>
          <div className="nightswitch">
            <button onClick={toggleTheme}><img src={brighticon}/></button>
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
