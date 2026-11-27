import { useCallback, useState } from 'react'
import { LayoutGroup } from 'motion/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Highlights from './components/Highlights'
import FeaturedCarousel from './components/FeaturedCarousel'
import Games from './components/Games'
import GameModal from './components/GameModal'
import Download from './components/Download'
import Community from './components/Community'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  const [selected, setSelected] = useState(null)

  const handleSelectGame = useCallback((game, source = 'catalogue', opener = null) => {
    setSelected({ game, source, opener })
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelected(null)
  }, [])

  return (
    <>
      <Header />
      <LayoutGroup>
        <main>
          <Hero />
          <Marquee />
          <Highlights />
          <FeaturedCarousel
            onSelectGame={handleSelectGame}
            isModalOpen={Boolean(selected)}
          />
          <Games onSelectGame={handleSelectGame} />
          <Download />
          <Community />
          <FinalCta />
        </main>
        <GameModal selected={selected} onClose={handleCloseModal} />
      </LayoutGroup>
      <Footer />
    </>
  )
}
