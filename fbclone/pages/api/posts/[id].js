import connectDB from '../../../utils/connectDB'
import Post from '../../../models/Post'

export default async function handler (req, res) {
    const {method, query: {id}} = req

    await connectDB()

    if(method === 'GET') {
        try{
            const post = await Post.findById(id)
            res.json(post)
        } catch (error) {
            res.json(error)
        }
    }

    if(method === 'PUT') {
        try {
            const updatedPost = await Post.findByIdAndUpdate(id, req.body, {new: true})
            res.json(updatedPost)
        } catch (error) {
            res.json(error)
        }
    }

    if(method === 'DELETE') {
        try {
            await Post.findByIdAndDelete(id)
            res.json('This Post has been deleted ...')
        } catch (error) {
            res.json(error)
        }
    }
}
