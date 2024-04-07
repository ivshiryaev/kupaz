import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'

import { getBlogsBySlug } from '@/lib/actions/contentful.actions'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { richtextOptions } from '@/components/Contentful';

export async function generateMetadata({ params } : { params: { slug: string }}, parent: ResolvingMetadata): Promise<Metadata>{
    const response = await getBlogsBySlug(params.slug)
    const item = response?.items[0]
    const {
        title,
        subtitle,
        body,
        metadata,
        openGraphImage
    } = item.fields

    const createdAt = item.sys.createdAt

    return {
        title: metadata?.title || `${title} | Kupaz.pl`,
        description: metadata?.description || subtitle,
        keywords: metadata?.keywords || [],
        openGraph: {
            title: metadata?.title || title,
            description: metadata?.description || subtitle,
            images: openGraphImage && [
                {
                    url: `https:${openGraphImage.fields.file.url}`,
                    width: openGraphImage.fields.file.details.image.width,
                    height: openGraphImage.fields.file.details.image.height,
                    alt: openGraphImage.fields?.description
                }
            ],
            type: 'article',
            publishedTime: createdAt
        },
        category: metadata?.category || 'food and drink',
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
    } = item?.fields

    // Convert createdAt to a DD-MM-YYYY format
    const createdAt = new Date(item.sys.createdAt).toLocaleDateString('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

    const bodyContent = documentToReactComponents(body, richtextOptions)
    
	return (
		<article className='bg-white flex flex-col gap-8 rounded-2xl p-6 lg:p-8 items-start'>
            <div className='flex gap-2'>
                <div className='hidden lg:flex rounded-full w-[64px] h-[64px] justify-center items-center border border-gray-50 border-1 relative overflow-hidden'>
                    <Image
                        className='absolute pointer-events-none'
                        src='/logo32x34.png'
                        width={32}
                        height={34}
                        alt='logo'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <time dateTime={createdAt} className='text-xs'>{createdAt}</time>
                    <h1 className='text-xl font-semibold'>{title}</h1>
                    {subtitle && <h2>{subtitle}</h2>}
                    {timeToRead && 
                        <span className='bg-gray-50 px-2 py-1 rounded-2xl w-fit text-xs'>
                            {timeToRead} {timeToRead > 4 ? 'minut' : timeToRead > 1 ? 'minuty' : 'minuta'} czytania
                        </span>
                    }
                </div>
            </div>
            <div className='flex flex-col'>
                {bodyContent}
            </div>
		</article>
	)
}