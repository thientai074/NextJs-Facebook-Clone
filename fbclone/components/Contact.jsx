const Contact = ({src, name}) => {
  return (
    <div className='flex relative space-x-3
    mb-2 hover:bg-gray-200 cursor-pointer p-2 rounded-xl' >
        <img src={src}
           className='rounded-full h-10'            
            width={40} />
        <p>{name}</p>
        <div className='absolute bottom-2 left-7 bg-green-300 h-3 w-3 rounded-full'></div>
    </div>
  )
}

export default Contact