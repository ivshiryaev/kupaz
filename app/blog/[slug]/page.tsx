import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'

import { getBlogsBySlug } from '@/lib/actions/contentful.actions'
import { countDateDifference } from '@/lib/utils'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function generateMetadata({ params } : { params: { slug: string }}, parent: ResolvingMetadata): Promise<Metadata>{
    const response = await getBlogsBySlug(params.slug)
    const item = response?.items[0]
    const {
        title,
        subtitle,
        body
    } = item.fields
    const createdAt = item.sys.createdAt

    return {
        title: `${title} | Kupaz.pl`,
        description: subtitle,
        alternates: {
            canonical: `/blog/${params.slug}`,
        }
    }
}

export default async function Blog({ params } : { params: { slug: string }}) {
    const response = await getBlogsBySlug(params.slug)
    const item = response?.items[0]
    const {
        title,
        subtitle,
        body,
        timeToRead
    } = item.fields
    const createdAt = item.sys.createdAt

    const bodyContent = documentToReactComponents(body)

    //DEBUG 
    // console.log(item)
    
	return (
		<article className='bg-white flex flex-col gap-8 rounded-2xl p-6 lg:p-8 items-start'>
            <div className='flex gap-2'>
                <div className='hidden lg:flex bg-white rounded-full w-[64px] h-[64px] justify-center items-center stroke stroke-gray-50 stroke-1'>
                    <Image
                        src='/logo32x34.png'
                        width={32}
                        height={34}
                        alt='logo'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <time dateTime={createdAt} className='text-xs'>{countDateDifference(createdAt)}</time>
                    <h1 className='text-xl font-semibold'>{title}</h1>
                    {subtitle && <h2>{subtitle}</h2>}
                    {timeToRead && 
                        <span className='bg-gray-50 px-2 py-1 rounded-2xl w-fit text-xs'>
                            {timeToRead} {timeToRead > 1 ? 'minuty' : 'minuta'} czytania
                        </span>
                    }
                </div>
            </div>
            <h3 className='flex flex-col gap-2'>
                {bodyContent}
            </h3>
		</article>
	)
}