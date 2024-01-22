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
  const [inScene, setInScene] = useState(true);

  const [page, setPage] = useState('Home');
  const [shouldRestart, setShouldRestart] = useState(false);

  return (
    <div className="App">

      {
        inScene ? (

          <Scene width={window.innerWidth} height={window.innerHeight} setInScene={setInScene}></Scene>

        ) :
        (
          <>
          <Background>
            <Nav page={page} setPage={setPage} setInScene = {setInScene} />

          {

            page === 'Home' ? (
              <>
                <Home />
                <Game restartGame={() => setShouldRestart(true)} />
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
