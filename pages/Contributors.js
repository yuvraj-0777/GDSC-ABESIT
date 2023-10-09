import Contributors from '@/components/Contributors';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Navbar />
      <Contributors/>
      <Footer/>
    </main>
  )
}
