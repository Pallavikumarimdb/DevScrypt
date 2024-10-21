import { useState } from 'react'
import LandingPage from './LandingPage.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-app'>
    <LandingPage></LandingPage>
    </div>
  )
}

export default App
