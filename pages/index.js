import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TeamSection from '@/components/Team'
import Contact from '@/components/Contact'
import Contributors from '@/components/Contributors'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    ><Head>
      <title>GDSC ABESIT</title>
    </Head>
      <Navbar />
      <Hero />
      {/* Other components */}
      <TeamSection />
     
      <Contact />
      <Footer />
    </main>
  )
}
