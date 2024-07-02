import Image from 'next/image'
import Hero from './components/Hero'
import About from './components/About'
import { Sofia_Sans_Condensed } from 'next/font/google'
import Banners from './components/Banners'
import Text from './components/Text'



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
    <div className="w-5/5 m-auto mt-8 overflow-hidden pb-16">
    <div className="w-4/5 m-auto" >
      <Image alt="" src="/fullWidthImage.png" width={1340} height={503} />
    </div>
    <div className='relative mt-16 mb-16 w-4/5 m-auto'>
    <Image alt="" src="./Vector-2.svg" width={676} height={272} className="absolute  vector-1"/>
    <Image alt="" src="./Vector-1.svg" width={676} height={272} className="absolute vector-2"/>

      <p className="text-customWhite text-center mt-8 text-3xl md:text-6xl pb-8">order online <br/>or come visit us today</p>
    </div>
    </div>
    
    </>
  )
}
