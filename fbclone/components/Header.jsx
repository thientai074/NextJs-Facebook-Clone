import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from '@heroicons/react/solid'
import { useSession, signOut } from 'next-auth/client'
import HeaderIcon from './HeaderIcon'

const Header = () => {
    const [session] = useSession()   

  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5
    shadow-md w-screen'>       
        <div className='flex items-center'>
            <img 
                src="https://links.papareact.com/5me" 
                width={40} 
                height={40} 
                layout='fixed' />
            <div className='flex items-center ml-2 rounded-full bg-gray-100 p-2'>
                <SearchIcon className='h-6 text-gray-500' />
                <input 
                className='hidden md:inline-flex flex ml-2 items-center bg-transparent 
                outline-none placeholder-gray-500 flex-shrink' 
                type="text" 
                placeholder='Search Facebook' />
            </div>
        </div>
        <div className='flex justify-center flex-grow' >
            <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon Icon={HomeIcon} />
                <HeaderIcon Icon={FlagIcon}/>
                <HeaderIcon Icon={PlayIcon}/>
                <HeaderIcon Icon={ShoppingCartIcon}/>
                <HeaderIcon Icon={UserGroupIcon}/>
            </div>
        </div>
        <div className='flex items-center sm:space-x-2 justify-end'>
            <img
                className='rounded-full cursor-pointer' width={40} height={40} 
                src={session.user.image ? session.user.image : 'https://i.pinimg.com/originals/67/13/d4/6713d4cbb2b4902577e8be044c4b8aef.jpg' } 
                alt="" />
            <p className='whitespace-nonwrap font-semibold pr-3'>{session.user.name}</p>
            <p onClick={signOut} className='text-red-500 font-semibold cursor-pointer'>Log Out</p>
            <ViewGridIcon className='icon' />
            <ChatIcon className='icon' />
            <BellIcon className='icon' />
            <ChevronDownIcon className='icon' />
        </div>
    </div>
  )
}

export default Header