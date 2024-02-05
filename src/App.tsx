import { useState, useEffect } from 'react'
import './App.scss'
import Footer from './components/footer/Footer'
import Scene from './components/scene/Scene'
import './components/pages/pages.scss'
import Nav from './components/nav/Nav'
import Background from './components/Background/Background'
import Home from './components/pages/Home/Home'
import PastProjects from './components/pages/Past Projects/PastProjects'
import FAQ from './components/pages/FAQ/FAQ'
import { Game } from './components/game/components'

// ---------------- Main Application Container ----------------

function App() {

  // State to determine if the user is in the opening scene or not
  const [inScene, setInScene] = useState(window.innerWidth > 600 ? true : false);


  const [page, setPage] = useState('Home');

  useEffect(() => {
    
    // Get the true values for vh and vw
    const vh = window.innerHeight * 0.01;
    const vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);

  }, []);

  return (
    <div className="App">

      {
        inScene ? (

          <Scene  setInScene={setInScene}></Scene>

        ) :
        (
          <>
          <Background>
            <Nav page={page} setPage={setPage} setInScene = {setInScene} />

          {

            page === 'Home' ? (
              <>
                <Home />
                
              </>
              
            ) :
            page === 'Past Projects' ? (
              <PastProjects />
            ) : 
            page === 'Information' ? (
              <FAQ/>
            ) : 

            <> Error Page Not Found</>
          }


          </Background>

          {/* Render Popups */}
          

          </>
        )
      }

    </div>
  )
}

export default App
