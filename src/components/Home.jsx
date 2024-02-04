import About from '../pages/About'
import Contacts from '../pages/Contacts'
import Hero from '../pages/Hero'
import Navbar from '../pages/Navbar'
import Projects1 from '../pages/Projects1'
import Projects2 from '../pages/Projects2'

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />

      <Projects2 />

      <Contacts />
    </div>
  )
}

export default Home
