import { useSession} from 'next-auth/client'
import { CameraIcon} from '@heroicons/react/solid'
const InputBox = ({setShowAddPost}) => {
    const [session] = useSession()

  
  return (
    <div className='bg-white p-2 rounded-2xl shadow-md
    text-gray-500 font-medium mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            <img className='rounded-full' 
                src={session.user.image}
                width={40} 
                height={40}/>
            <form className='flex flex-1'>
                <input type="text" 
                        placeholder={`What is on your mind, ${session.user.name}`}
                        className='rounded-full bg-gray-100 h-12 flex-grow 
                        px-5 focus:outline-none'
                        onClick={() => setShowAddPost(true)} />                
            </form>
            <div onClick={()=> setShowAddPost(true)}>
              <CameraIcon className='h-7 text-green-400'  />
              <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
            </div>
        </div>
    </div>
  )
}

export default InputBox