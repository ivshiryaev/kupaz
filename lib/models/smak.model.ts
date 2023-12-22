import mongoose from 'mongoose'

const smakSchema = new mongoose.Schema({
	title: {
		type: String
	},
	id: {
		type: Number
	},
	smak: {
		type: String
	},
	description: {
		type: String
	},
	skladniki: {
		type: [String]
	},
	price: {
		type: Number
	},
	discountPercentage: {
		type: Number
	},
	promotionText: {
		type: String
	}
})

const Smak = mongoose.models.Smak || mongoose.model('Smak', smakSchema)

export default Smak