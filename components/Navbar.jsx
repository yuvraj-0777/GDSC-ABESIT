import Image from "next/image"
import Logo from "@/assets/Logo.png"
import { Montserrat } from "next/font/google"
import Link from "next/link"

const montserrat = Montserrat({
    subsets: ["latin"],
    variants: ["400", "500", "600", "700", "800", "900"]
})

const Navbar = () => {
    return (
        <nav className={`fixed flex items-center justify-around top-0 left-0 right-0 z-20 bg-white text-black ${montserrat.className}`}>
            <div className="font-semibold">
                <div className="flex items-center">
                    <Image src={Logo} alt="logo" width={60} />
                    <h2>Google Developer Student Club</h2>
                </div>
                <p className="ml-14 -mt-3 text-xs">ABES Institute of Technology</p>
            </div>
            <ul className="flex justify-center items-center gap-8 text-base font-medium">
                <li><Link href="#home">Home</Link></li>
                <li><Link href="#">Event</Link></li>
                <li><Link href="#">Project</Link></li>
                <li><Link href="#">Team</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
