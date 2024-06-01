import Navigation from "./NaviBar/Navigation"
import Footer from "./Footer/Footer"
import Movies from "./MovieModule/Movies"
import pfp from "./assets/pfp.jpg"

function App() {
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

          <div className="nightswitch">
            <button>click me</button>
          </div>

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
