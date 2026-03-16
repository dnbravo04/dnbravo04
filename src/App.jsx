import './App.css'
import { Navbar } from './Components/Navbar'
import { Title } from './Components/Title'
import { AboutMe } from './Components/AboutMe'
import { TestingExperience } from './Components/TestingExperience'
import { Portfolio } from './Components/Portfolio'
import { Resume } from './Components/Resume'
import { Contact } from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-manga-white font-inter">
      <Navbar />
      <Title />
      <AboutMe />
      <TestingExperience />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}

export default App
