import { useState, useEffect } from 'react'
import './App.scss'
import Footer from './components/footer/Footer'
import Scene from './components/scene/Scene'

// ---------------- Main Application Container ----------------

function App() {

  // State to determine if the user is in the opening scene or not
  const [inScene, setInScene] = useState(true);

  useEffect(() => {

    if (inScene === false) {
      // No longer in the opening scene
      // Can render stuff now
      
    }
    
  }, [inScene])
 
  return (
    <div className="App">

      <Scene width={window.innerWidth} height={window.innerHeight} setInScene={setInScene}></Scene>

    </div>
  )
}

export default App
