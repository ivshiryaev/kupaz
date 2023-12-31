import Hero from '@/components/Sections/Hero'
import Bestsellers from '@/components/Sections/Bestsellers'
import FAQ from '@/components/Sections/FAQ'
import About from '@/components/Sections/About'
import HowTo from '@/components/Sections/HowTo'
import Contact from '@/components/Sections/Contact'
import Promotions from '@/components/Sections/Promotions'
import InfiniteScrollingRow from '@/components/Sections/InfiniteScrollingRow'
import MobileSwiperSection from '@/components/Sections/MobileSwiperSection'

export default function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <MobileSwiperSection/>
            <Promotions/>
            <Bestsellers/>
            <FAQ heading='h3'/>
            {/*<HowTo/>*/}
            <Contact/>
            <InfiniteScrollingRow/>
        </>
    )
}
