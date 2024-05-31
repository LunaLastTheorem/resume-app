import Navigation from "./NaviBar/Navigation"
import Footer from "./Footer/Footer"
import Movies from "./MovieModule/Movies"
import pfp from "./assets/pfp.jpg"

function App() {
  return(
    <>
    <div id="root">
      <div className="nonfooter">

        <div className="phoneNavi">
            <Navigation />
        </div>
        
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
          <img src= {pfp} id="profile"/>

          <div id="basicinfo-contact">
            <p>This is my contact info</p>
          </div>

          <div id="basicinfo-summary">
            <p> this is my profile</p>
          </div>

          <div id="basicinfo-skills">
            <p>these are my skills</p>

          </div>

          <div id="basicinfo-languages">
            <p>These are my languages</p>
          </div>

          <div id="basicinfo-programming">
            <p>these are my proframming languages</p>
          </div>

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
