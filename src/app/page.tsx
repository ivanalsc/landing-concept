import Image from 'next/image'
import Hero from './components/Hero'
import About from './components/About'
import { Sofia_Sans_Condensed } from 'next/font/google'
import Banners from './components/Banners'
import Text from './components/Text'
import BottomSection from './components/BottomSection'




const sofia = Sofia_Sans_Condensed({
  weight: '500',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
    <main className="w-4/5 m-auto">
      <Hero alt='' src='/burguers.png' width={632} height={178}/>
      <About font={sofia}/>
      <Banners />
    </main>
    <Text/>
    <div className="w-5/5 m-auto overflow-hidden pb-16">
   <BottomSection />
    </div>
    
    </>
  )
}
