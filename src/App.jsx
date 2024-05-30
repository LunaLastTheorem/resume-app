import './App.css'
import Navigation from './NaviBar/Navigation'
import Footer from './Footer/Footer'
import pfp from './assets/pfp.jpg'
import Movies from './MovieModule/Movies'

function App() {

  return (
    <div id="root">
      <div className="app">

        <div className='navigation'>
          <Navigation />
        </div>
    
        <div className='main'>
          <div className='basic-info'>
            <img src={pfp} alt='pfp' id="profile"/>
            <h1>hello world</h1>
            <p>hello hello</p>
          </div>
      
          <div className='content'>  
            <div className='movieContaier'>
              <Movies />
            </div>  
          </div>
        </div>
        
        <div className='foots'>
          <Footer />
        </div>

      </div>
    </div>
  )
}

export default App
