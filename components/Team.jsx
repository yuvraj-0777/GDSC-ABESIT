import Link from 'next/link'
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    variants: ['400', '500', '600', '700', '800', '900'],
})

const teamData = [
    {
        id: 1,
        name: 'Keshav Malik',
        img: 'https://picsum.photos/200',
        title: 'DSC Lead',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',
    },
    {
        id: 2,
        name: 'Keshav Malik',
        img: 'https://picsum.photos/200',
        title: 'CEO',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',
    },
    {
        id: 3,
        name: 'Keshav Malik',
        img: 'https://picsum.photos/200',
        title: 'CEO',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',
    },
    {
        id: 1,
        name: 'Keshav Malik',
        img: 'https://picsum.photos/200',
        title: 'DSC Lead',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',
    },
    {
        id: 2,
        name: 'Keshav Malik',
        img: 'https://picsum.photos/200',
        title: 'CEO',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',
    },
    {
        id: 3,
        name: 'Keshav Malik',
        img: 'https://picsum.photos/200',
        title: 'CEO',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',
    },
    {
        id: 1,
        name: 'Keshav Malik',
        img: 'https://picsum.photos/200',
        title: 'DSC Lead',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',
    },
    {
        id: 2,
        name: 'Keshav Malik',
        img: 'https://picsum.photos/200',
        title: 'CEO',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',
    },
    {
        id: 3,
        name: 'Keshav Malik',
        img: 'https://picsum.photos/200',
        title: 'CEO',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',
    },
    {
        id: 1,
        name: 'Keshav Malik',
        img: 'https://picsum.photos/200',
        title: 'DSC Lead',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',
    },
    {
        id: 2,
        name: 'Keshav Malik',
        img: 'https://picsum.photos/200',
        title: 'CEO',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',
    },
    {
        id: 3,
        name: 'Keshav Malik',
        img: 'https://picsum.photos/200',
        title: 'CEO',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',
    },
]

const TeamSection = () => {
    return (
        <div id="team" className={`bg-white text-black w-full text-center ${montserrat.className}`}>
            <div className='w-4/5 mx-auto'>
                <h2 className="text-3xl md:text-4xl font-bold mt-6">Team Member</h2>
                <div className='flex flex-wrap justify-evenly items-center mt-12'>
                    {teamData && teamData.map((member) => {
                        return (
                            <div key={member.id} className="flex flex-col justify-center items-center gap-4 w-1/4 mb-8">
                                <div>
                                    <img className='rounded-full border-8 border-yellow-400' src={member.img} alt={member.name} width={175} />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-semibold'>{member.name}</h3>
                                    <p className='text-blue-500 font-semibold'>{member.title}</p>
                                    <div className="flex justify-center items-center gap-4 bg-blue-500 p-4 text-2xl text-white rounded-full mt-4">
                                        <Link href={member.twitter} target="_blank" rel="noreferrer">
                                            <FaTwitter />
                                        </Link>
                                        <Link href={member.instagram} target="_blank" rel="noreferrer">
                                            <FaInstagram />
                                        </Link>
                                        <Link href={member.github} target="_blank" rel="noreferrer">
                                            <FaGithub />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default TeamSection