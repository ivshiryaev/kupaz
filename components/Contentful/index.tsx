import Link from 'next/link'
import Image from 'next/image'

import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

const richtextOptions = {
	renderMark: {
		[MARKS.BOLD]: (text: any) => <span className='font-semibold'>{text}</span>
	},
	renderNode: {
        [INLINES.HYPERLINK]: (node: any, children: any) => <Link className='text-blue-500 hover:underline' href={node.data.uri}>{children}</Link>,
		[BLOCKS.HEADING_2]: (node: any, children: any) => <h2 className='text-2xl mb-2 last:mb-0'>{children}</h2>,
		[BLOCKS.HEADING_3]: (node: any, children: any) => <h3 className='text-xl mb-2 last:mb-0'>{children}</h3>,
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            return(
                <div className='group relative aspect-video overflow-hidden rounded-lg mb-8 last:mb-0'>
                    <Image
                        width={node.data.target.fields.file.details.image.width}
                        height={node.data.target.fields.file.details.image.height}
                        src={`https:${node.data.target.fields.file.url}`} 
                        alt={node.data.target.fields.description} 
                        className='group-hover:scale-105 group-hover:duration-500 duration-1000 absolute inset-0 w-full h-full object-cover object-center'
                    />
                </div>
            )
        },
        [BLOCKS.HR]: (node: any, children: any) => <hr className='mb-8 last:mb-0' />,
		[BLOCKS.PARAGRAPH]: (node: any, children: any) => {
            // Check if children is an array and handle line breaks
            if (Array.isArray(children)) {
                children = children.flatMap((child, index) => {
                    if (typeof child === 'string') {
                        return child.split('\n').reduce((children: any, textSegment: any, index: any) => {
                            return [...children, index > 0 && <br key={index} />, textSegment];
                        }, []);
                    }
                    return child;
                });
            }
            return <p className='mb-8 last:mb-0 empty:hidden'>{children}</p>;
        },
        [BLOCKS.QUOTE]: (node: any, children: any) => {
            // Check if children is an array and handle line breaks
            if (Array.isArray(children)) {
                children = children.flatMap((child, index) => {
                    if (typeof child === 'string') {
                        return child.split('\n').reduce((children: any, textSegment: any, index: any) => {
                            return [...children, index > 0 && <br key={index} />, textSegment];
                        }, []);
                    }
                    return child;
                });
            }
            return (
                <blockquote 
                    className={`
                        p-4 rounded-lg 
                        mb-8
                        last:mb-0 
                        bg-gray-50 
                        relative 
                        overflow-hidden

                        before:bg-gray-100 before:absolute
                        before:top-1/2 before:left-0 before:-translate-y-1/2
                        before:h-full before:w-1
                        before:transition-all

                        hover:before:w-2 hover:before:bg-gray-200
                    `}
                >
                    {children}
                </blockquote>
            )
        },
        [BLOCKS.UL_LIST]: (node: any, children: any) => <ul className='list-disc pl-6 mb-8 last:mb-0 flex flex-col gap:4'>{children}</ul>,
        preserveWhitespace: true
	}
}

export { richtextOptions }