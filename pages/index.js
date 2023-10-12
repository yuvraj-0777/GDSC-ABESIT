import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TeamSection from '@/components/Team'
import Contact from '@/components/Contact'
import Image from 'next/image'
import image2 from '@/assets/image2.png'
import Head from 'next/head'
import PreviousEvents from '@/components/PreviousEvents'
import About from '@/components/About'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  // implement theme switcher by adding a image that fits the dark mode
  // check next-themes documentation
  // https://www.npmjs.com/package/next-themes#images

  // switch (resolvedTheme) {
  //   case 'light':
  //     src = {image2}
  //     break
  //   case 'dark':
  //     src = '/dark.png'
  //     break
  //   default:
  //     src = {image2}
  //     break
  // }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>
      <Head>
        <title>GDSC ABESIT</title>
      </Head>
      <Navbar />
      <Hero />
      {/* Other components */}
      <About />
      <PreviousEvents />
      <Image src={image2} />
      <Contact />
      <Footer />
    </main>
  );
}
