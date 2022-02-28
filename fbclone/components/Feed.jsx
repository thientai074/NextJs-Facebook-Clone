import Stories from "./Stories"
import InputBox from './InputBox'
import Post from "./Post"

const Feed = ({posts, setShowAddPost, setShowUpdatePost, setUpdatePostId}) => {
  
  return (
    <div className='flex-grow h-screen pt-6 pb-44 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide'>
       <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
          {/* <Stories /> */}
          <InputBox setShowAddPost={setShowAddPost} />
          <Post posts={posts} setUpdatePostId={setUpdatePostId} setShowUpdatePost={setShowUpdatePost} />
       </div>
    </div>
  )
}

export default Feed