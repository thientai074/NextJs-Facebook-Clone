import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    desc: {type: String},
    postImage: {type: String},
    user: {type: mongoose.Types.ObjectId, ref: 'users'}
}, {timestamps: true})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)



