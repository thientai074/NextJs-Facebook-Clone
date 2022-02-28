import { ChatAltIcon, ThumbUpIcon, TrashIcon, PencilAltIcon } from '@heroicons/react/solid'
import {useSession} from 'next-auth/client'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, findPost} from '../redux/postsSlice'
import { useRouter} from 'next/router'
import { useEffect} from 'react'
import { getAllPosts} from '../redux/postsSlice'

const Post = ({posts, setShowUpdatePost, setUpdatePostId}) => {    

    const [session] = useSession()   
    
    const dispatch = useDispatch()

    const router = useRouter()
    
    const handleDeletePost = async (postId) => {
        await dispatch(deletePost(postId))
        router.reload()
    }

    const handleUpdatePost = (id) => {
        setShowUpdatePost(true)      
        dispatch(findPost(id))  
        setUpdatePostId(id)    
    }  
    
  return (
    <div className=''>
        {posts.map(post => (
            <div key={post._id} className='flex flex-col'>
            <div className='p-5 border-4  bg-white mt-5 rounded-t-2xl shadow-sm'>                   
                 <div className='flex space-x-2 items-center justify-between'>                
                    <div className='flex'>
                    <img src={session.user.image} width={40} height={40} className='rounded-full mr-2'  />
                     <div>                                
                         <p>{session.user.name}</p>
                         <p className='text-xs text-gray-400'>{new Date(post.createdAt).toDateString()}</p>
                     </div>
                    </div>
                     <div className='justify-end flex'>
                     <TrashIcon className='h-6 justify-end cursor-pointer mr-4 text-red-400' onClick={handleDeletePost.bind(this, post._id)} />
                     <PencilAltIcon className='h-6 cursor-pointer text-blue-400' onClick={handleUpdatePost.bind(this, post._id)} />
                     </div>
                     
                 </div>
                 <p className='pt-4'>{post.desc}</p>
            </div>
            <div >
                {post.postImage && (
                       <img className='relative h-full object-cover w-full bg-white' 
                       src={post.postImage}
                        />
                )}
            </div>
            <div className='flex justify-between items-center rounded-b-2xl bg-white
            shadow-md text-gray-400 border-4 mb-3'>
                <div className='justify-center items-center mx-auto rounded-none'>
                    <ThumbUpIcon className='h-4 mt-1' />
                    <p className='text-xs sm:text-base'>Like</p>
                </div>
                <div className='items-center mx-auto rounded-none'>
                     <ChatAltIcon className='h-4'/>
                    <p className='text-xs sm:text-base'>Comment</p>
                </div>
            </div>
         </div>
       ))}  
    </div>
  )
}

export default Post

