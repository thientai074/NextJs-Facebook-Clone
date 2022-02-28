import StoryCard from "./StoryCard"
const Stories = () => {
    const stories = [
        {
            name: 'Shaha',
            src: 'https://nhandan.vn/imgold/media/k2/items/src/4254/7301e01c03fd9d6d11bcd4ececeb60bd.jpg',
            profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGn62GtYPU24UX5tcnrgEIuf821zUgj8Ml2w&usqp=CAU'
            
        },
        {
            name: 'Jono',
            src: 'https://img4.thuthuatphanmem.vn/uploads/2019/12/17/anh-dep-ve-su-tu-con_103216048.jpg',
            profile: 'data:image/jpeg;base64,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'
        }
    ]
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
        {stories.map(story => (
            <StoryCard key={story.name} profile={story.profile} name={story.name} src={story.src} />
        ))}
    </div>
  )
}

export default Stories