import { useState } from 'react'
import './App.css'
import { Title } from './Components/Title'
import { AboutMe } from './Components/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-caqui'>
    <Title/>
    <AboutMe/>
    </div>
  )
}

export default App
