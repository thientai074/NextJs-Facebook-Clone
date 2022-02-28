import connectDB from "../../../utils/connectDB"
import Post from '../../../models/Post'
import { getSession} from 'next-auth/client'

export default async function handler(req, res) {
    const {method} = req

    await connectDB();

    if(method === 'GET') {
        try {
            // const session = await getSession({req})
            // if(!session) {
            //     res.json('Invalid Authentication')
            // }
            const posts = await Post.find()
            res.json(posts)
        } catch (error) {
            res.json(error)
        }
    }

    if(method === 'POST') {
        try {
            
            const post = await Post.create(req.body)
            res.json(post)

        } catch(error) {
            res.json(error)
        }
    }
}