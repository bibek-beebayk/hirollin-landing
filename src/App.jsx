import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Games from './components/Games'
import Download from './components/Download'
import Community from './components/Community'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Games />
        <Download />
        <Community />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
