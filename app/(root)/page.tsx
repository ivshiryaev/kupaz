import Hero from '@/components/Sections/Hero'
import MobileHero from '@/components/Sections/MobileHero'
import Bestsellers from '@/components/Sections/Bestsellers'
import FAQ from '@/components/Sections/FAQ'
import About from '@/components/Sections/About'
import HowTo from '@/components/Sections/HowTo'
import MobileSwiperSection from '@/components/Sections/MobileSwiperSection'
import Contact from '@/components/Sections/Contact'
import Promotions from '@/components/Sections/Promotions'
import InfiniteScrollingRow from '@/components/Sections/InfiniteScrollingRow'

export default function Home() {
    return (
        <>
            <Hero/>
            <MobileHero/>
            <About/>
            <Promotions/>
            <Bestsellers/>
            <FAQ/>
            {/*<MobileSwiperSection/>*/}
            {/*<HowTo/>*/}
            <Contact/>
            <InfiniteScrollingRow/>
        </>
    )
}
