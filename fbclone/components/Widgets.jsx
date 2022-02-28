import {SearchIcon} from '@heroicons/react/outline'
import Contact from './Contact'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
const Widgets = () => {
    const contacts = [
        {
            name: 'Maria',
            src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-baby-animals-1558535060.jpg?crop=0.752xw:1.00xh;0.125xw,0&resize=640:*'
        },
        {
            name: 'Koto',
            src: 'http://www.porfell.co.uk/assets/Cuddle-Lemurs.jpg'
        },
        {
            name: 'Lalo',
            src: 'https://images.squarespace-cdn.com/content/v1/5fd15827efdb9c4ec488ad35/1608137390334-QB474EYE5IKNZQZDVTI6/image-asset.jpeg?format=2500w'
        },
        {
            name: 'Gary',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLiCKsLI2UiB8DSVaOiVQIMBewpNhy6bTzVxiYZ9BvYC-1xDDbGZded0ePg0yDeo2Bes&usqp=CAU'
        },
        {
            name: 'Palo',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6yY_yHR4Jw8nxH1MG4yxvOo_6liFtVjMH7HPf-68QEQAZxQkO_giuFIF_-Faeah_DaU&usqp=CAU'
        }
    ]
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
        <div className='flex justify-between items-center text-gray-500
        mb-5'>
            <h2 className='text-xl font-bold'>Contacts</h2>
            <div className='flex space-x-2'>
                <VideoCameraIcon className='h-6' />
                <SearchIcon className='h-6' />
                <DotsHorizontalIcon className='h-6' />
            </div>
        </div>
        {contacts.map(contact => (
            <Contact key={contact.src} src={contact.src} name={contact.name} />
        ))}
    </div>
  )
}

export default Widgets