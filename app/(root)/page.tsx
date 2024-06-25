import Hero from '@/components/Sections/Hero'
import Bestsellers from '@/components/Sections/Bestsellers'
import FAQ from '@/components/Sections/FAQ'
import About from '@/components/Sections/About'
import HowTo from '@/components/Sections/HowTo'
import Contact from '@/components/Sections/Contact'
import Promotions from '@/components/Sections/Promotions'
import InfiniteScrollingRow from '@/components/Sections/InfiniteScrollingRow'
import MobileSwiperSection from '@/components/Sections/MobileSwiperSection'
import MovingCardsSection from '@/components/Sections/MovingCardsSection'
import ParallaxOpacityText from '@/components/Sections/ParallaxOpacityText'
import BubbleText from '@/components/Sections/BubbleText'

import { getSmaki } from '@/lib/actions/smak.actions'
import { shuffleArray } from '@/lib/utils'

async function Home() {
    const response = await getSmaki()
    if (!response) return null
    const smaki = JSON.parse(response)

    return (
        <>
            <Hero/>
            <MovingCardsSection smaki={smaki}/>
            <ParallaxOpacityText/>
            {/* <About/> */}
            <MobileSwiperSection/>
            <Promotions/>
            <Bestsellers smaki={shuffleArray(smaki).slice(0, 4)}/>
            <BubbleText />
            <FAQ heading='h3'/>
            <Contact/>
            <InfiniteScrollingRow/>
        </>
    )
}

export default Home