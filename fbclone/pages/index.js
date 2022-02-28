import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import UpdatePostModal from '../components/UpdatePostModal'
import axios from 'axios'
import AddPostModal from '../components/AddPostModal'
import {useState} from 'react'

export default function Home({session, posts}) {
  if(!session) return <Login />
  const [showAddPost, setShowAddPost] = useState(false)
  
  const [showUpdatePost, setShowUpdatePost] = useState(false)

  const [updatePostId, setUpdatePostId] = useState('')
  console.log(posts) 
 
  return (
    <div>
      <Head className='h-screen bg-gray-300 overflow-hidden'>
        <title>Facebook</title>
      </Head>
      <Header  />
      <main className='flex bg-gray-100'>
        <Sidebar />   
        <Feed posts={posts} setUpdatePostId={setUpdatePostId} setShowAddPost={setShowAddPost} setShowUpdatePost={setShowUpdatePost} />     
        <Widgets />
        { showAddPost && <AddPostModal setShowAddPost={setShowAddPost} />}
        { showUpdatePost && <UpdatePostModal setShowUpdatePost={setShowUpdatePost} updatePostId={updatePostId} />}
      </main>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  const res = await axios.get('http://localhost:3000/api/posts')
  return {
    props: {
      session,
      posts: res.data
    }
  }
}
