import { useState } from 'react'
import './App.css'
import { Title } from './Components/Title'
import { AboutMe } from './Components/AboutMe'
import {Portfolio}from './Components/Portfolio'
import {Experience} from './Components/Experience'
import {Footer} from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-caqui'>
    <Title/>
    <AboutMe/>
    <Portfolio/>
    <Footer></Footer>
    </div>
  )
}

export default App
