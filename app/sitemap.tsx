import { getSmaki } from '@/lib/actions/smak.actions'
import { getSmakSlug } from '@/lib/utils'

import { MetadataRoute } from 'next'

export default async function sitemap(): MetadataRoute.Sitemap {
  const response = await getSmaki()
  if(!response) return null

  const data = JSON.parse(response)


  let urlPrefix = 'http://localhost:3000';
  // if (process.env.NODE_ENV !== 'production') {
  //   urlPrefix = 'https://kupaz.pl';
  // }

  return data.map((smak) => ({
    url: `${urlPrefix}/Oferta/${getSmakSlug(smak)}`, // https://example.com/Oferta/this-is-a-post-1
    lastModified: new Date(), // ideally, this is the last modified date of the post
    changeFrequency: 'daily', // this will be used to determine how often pages are re-crawled
    priority: 0.7, // the priority of this URL relative to other URLs on your site
  }));
}