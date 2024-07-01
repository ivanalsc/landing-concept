import Image from 'next/image'
import Hero from './components/Hero'
import About from './components/About'
import { Inter} from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-4/5 m-auto">
      <Hero alt='' src='/burguers.png' width={632} height={178}/>
      <About font={inter}/>

    
    </main>
  )
}
