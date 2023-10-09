import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TeamSection from '@/components/Team'
import Contact from '@/components/Contact'
import Contributors from '@/components/Contributors'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Navbar />
      <Hero />
      {/* Other components */}
      <TeamSection />
      <Contributors/>
      <Contact />
      <Footer />
    </main>
  )
}
