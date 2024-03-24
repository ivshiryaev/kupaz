import { getSmaki } from '@/lib/actions/smak.actions'
import { getSmakSlug } from '@/lib/utils'
import { getBlogEntries } from '@/lib/actions/contentful.actions'

import { MetadataRoute } from 'next'

import navLinks from '@/data/navLinks'

export default async function sitemap(): MetadataRoute.Sitemap {
  const response = await getSmaki()
  if(!response) return null
  const smaki = JSON.parse(response)
  const blogs = await getBlogEntries()
  if(!blogs) return null

  let urlPrefix = 'https://kupaz.pl';

  const smakiUrls = smaki.map((smak) => ({
    url: `${urlPrefix}/smaki/${getSmakSlug(smak)}`, // https://example.com/Oferta/this-is-a-post-1
    lastModified: new Date(), // ideally, this is the last modified date of the post
    changeFrequency: 'monthly', // this will be used to determine how often pages are re-crawled
    priority: 0.6, // the priority of this URL relative to other URLs on your site
  }))

  const blogUrls = blogs.items.map((blog) => ({
      url: `${urlPrefix}/blog/${blog.fields.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.4
  }))

  return[
    {
      url: urlPrefix,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${urlPrefix}/smaki`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${urlPrefix}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${urlPrefix}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4
    },
    {
      url: `${urlPrefix}/polityka-prywatnosci`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2
    },
    {
      url: `${urlPrefix}/regulamin`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1
    },
    ...smakiUrls,
    ...blogUrls
  ]
}