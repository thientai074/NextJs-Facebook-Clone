import React from 'react'
import styles from '../styles/UpdatePostModal.module.css'
import {useSession} from 'next-auth/client'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useRouter} from 'next/router'
import {useSelector, useDispatch} from 'react-redux'
import {findPost } from '../redux/postsSlice'
import { storage} from '../firebase'


const UpdatePostModal = ({setShowUpdatePost, updatePostId}) => {   
    
    const [session] = useSession() 
    
    const dispatch = useDispatch()  

    const [postImage, setPostImage] = useState('')
    const [desc, setDesc] = useState('')    

    const router = useRouter()

    const updatePostForm = { desc, postImage}

    const handleUpload = () => {
      const uploadTask = storage.ref(`image/${postImage.name}`).put(postImage)
      uploadTask.on(
        'state_changed',
        snapshot=> {},
        error => {
          console.log(error)
        },
        () => {
          storage
            .ref('image')
            .child(postImage.name)
            .getDownloadURL()
            .then(url => {
              setPostImage(url)
              console.log(url)
            })
        }
      )
    }

    const handleUpdatePost = async (e) => {
      e.preventDefault()        
      await axios.put(`http://localhost:3000/api/posts/${updatePostId}`, updatePostForm)
      setShowUpdatePost(false)  
      router.reload()  
    }   

  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <span  className={styles.close} onClick={() => setShowUpdatePost(false)}>
        X
      </span>
      <h1 className={styles.title}>Update Your Post</h1>
      <div className='flex'>
          <img className={styles.img} src={session.user.image} width={40} height={40} />
          <p className={styles.text}>{session.user.name}</p>
      </div>
      <div className={styles.item}>
        <label className={styles.label}>Change your image</label>
        <input type="file" 
        onChange={(e) => setPostImage(e.target.files[0])} 
        />
        {postImage && (
        <button className={styles.uploadButton} onClick={handleUpload}>Upload </button>
        )}   
        {postImage && (
          <p className='text-red-500 font-medium'>Click Upload button to push to Firebase then Change</p>
        )}           
      </div>
      
      <div className={styles.item}>
        <label className={styles.label}>Change your description</label>
        <textarea className={styles.input}
          rows={4}
          type="text"
          placeholder={`What is on your mind, ${session.user.name} ?`}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <button className={styles.updateButton} onClick={handleUpdatePost}  >
        Change
      </button>
    </div>
  </div>
  )
}

export default UpdatePostModal