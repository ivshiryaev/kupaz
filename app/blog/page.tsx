import Link from 'next/link'
import type { Metadata } from 'next'
import { getBlogEntries } from '@/lib/actions/contentful.actions'
import BlogCard from '@/components/Blog/Card'

import Slide from '@/components/Animations/Slide'

export default async function Blog() {
    const entries = await getBlogEntries()
    const arrayOfEntries = entries?.items

    if(!entries) {
        console.error('No entries found')
        return
    }
    
	return (
		<>
            <ul className='flex flex-col gap-2 lg:gap-4'>
                {arrayOfEntries.map((entry: any) => (
                    <li key={entry.sys.id}>
                        <Slide value={50} verticalDirection='up'>
                            <BlogCard
                                createdAt={entry.sys.createdAt}
                                title={entry.fields.title}
                                slug={entry.fields.slug}
                                subtitle={entry.fields.subtitle}
                                timeToRead={entry.fields.timeToRead}
                            />
                        </Slide>
                    </li>
                ))}
            </ul>
		</>
	)
}