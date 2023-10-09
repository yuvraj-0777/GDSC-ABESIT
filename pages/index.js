import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TeamSection from '@/components/Team'
import Contact from '@/components/Contact'
import Image from 'next/image'
import image2 from '@/assets/image2.png'
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
      <Image src={image2} />
      <Contact />
      <Footer />
    </main>
  )
}
