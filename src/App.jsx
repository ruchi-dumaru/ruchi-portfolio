
import Navbar from './Components/Navbar/Navbar'
import Home1 from './Components/Home/Home1'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import Skill from './Components/Skills/Skill'
import End from './Components/End'

const App = () => {
  return (
    <div className=" h-auto w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" >
     <Navbar/>
     <Home1/>
     <About/>
      <Skill/>
     <Projects/>
     <Footer/>
     <End/>
    </div>
  )
}

export default App
