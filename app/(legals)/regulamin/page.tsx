import { getEntryById } from '@/lib/actions/contentful.actions'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { richtextOptions } from '@/components/Contentful';

export default async function Regulamin() {
	const response = await getEntryById(process.env.CONTENTFUL_REGULAMIN_ID as string)
	const { title } = response.fields
	const description = documentToReactComponents(response.fields.description, richtextOptions)

	return (
		<>
			<h1 className='text-2xl'>{title}</h1>
			<div className='flex flex-col'>
				{description}
			</div>
		</>
	)
}