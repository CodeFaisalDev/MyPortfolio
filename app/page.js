import Image from 'next/image'
import HeroSection from './components/HeroSection'
import NavBar from './components/navbar'
import SkillsSection from './components/SkillsSection'
import { CardDefault } from './components/card'
import { ContactSection } from './components/ContactSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
  
      <container className="container mt-24  mx-auto px-12 py-4">
        <div>
          <HeroSection />
        </div>

        <div className='mx-auto lg:mt-12'>
          <SkillsSection />
        </div>

        <div className='mx-auto lg:mt-12'>
          <CardDefault />
        </div>

        <div className='mx-auto lg:mt-12'>
          <ContactSection />
        </div>

      </container>
    </main>
  )
}
