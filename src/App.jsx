import './App.css'
import { Navbar } from './Components/Navbar'
import { Title } from './Components/Title'
import { AboutMe } from './Components/AboutMe'
import { Portfolio } from './Components/Portfolio'
import { Experience } from './Components/Experience'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Title />
      <AboutMe />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App
