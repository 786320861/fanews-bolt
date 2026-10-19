import FreshBackground from './components/NeuralBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intelligence from './components/Intelligence'
import Stats from './components/Stats'
import Solutions from './components/Solutions'
import Products from './components/Products'
import Clients from './components/Clients'
import Technology from './components/Technology'
import About from './components/About'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-base-bg text-[#23424B]">
      <FreshBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Intelligence />
        <Stats />
        <Solutions />
        <Products />
        <Clients />
        <Technology />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
