import { useState } from 'react'
import LandingPage from './component/LandingPage.jsx'
import './App.css';
import AppJob from './component-LatestJob/JobApp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <LandingPage></LandingPage>
    {/* <AppJob></AppJob> */}
    
    </>
  )
}

export default App
