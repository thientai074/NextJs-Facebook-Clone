import React from 'react'
import styles from '../styles/AddPostModal.module.css'
import {useSession} from 'next-auth/client'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addPost } from '../redux/postsSlice'
import {useRouter} from 'next/router'
import {storage} from '../firebase'

const AddPostModal = ({setShowAddPost}) => {
    const [session] = useSession()

    const router = useRouter()

    const [postImage, setPostImage] = useState('')
    const [desc, setDesc] = useState('')

    const dispatch = useDispatch()

    const newPostForm = { desc, postImage}
      
    const handleUpload = () => {
      const uploadTask = storage.ref(`images/${postImage.name}`).put(postImage)
      uploadTask.on(
        'state_changed',
        snapshot => {},
        error => {
          console.log(error)
        },
        () => {
          storage
            .ref('images')
            .child(postImage.name)
            .getDownloadURL()
            .then(url => {
              setPostImage(url)
              console.log(url)
            })
        }
      )
    }

    const addNewPost = (e) => {
        e.preventDefault()
        dispatch(addPost(newPostForm))
        setShowAddPost(false)
        router.reload()        
    }

  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <span  className={styles.close} onClick={() => setShowAddPost(false)}>
        X
      </span>
      <h1 className={styles.title}>Write New Post</h1>
      <div className='flex'>
          <img className={styles.img} src={session.user.image} width={40} height={40} />
          <p className={styles.text}>{session.user.name}</p>
      </div>
      <div className={styles.item}>
        <label className={styles.label}>Choose an image</label>
        <input type="file" 
        onChange={(e) => setPostImage(e.target.files[0])} 
        />
        {postImage && (
        <button className={styles.uploadButton} onClick={handleUpload}>Upload </button>        
        )} 
        {postImage && (
          <p className='text-red-500 font-medium'>Click Upload button to push to Firebase then Create</p>
        )}     
      </div>
      
      <div className={styles.item}>
        <label className={styles.label}>Description</label>
        <textarea className={styles.input}
          rows={4}
          type="text"
          required
          placeholder={`What is on your mind, ${session.user.name} ?`}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>     
      <button className={styles.addButton} onClick={addNewPost} >Create </button>      
    </div>
  </div>
  )
}

export default AddPostModal