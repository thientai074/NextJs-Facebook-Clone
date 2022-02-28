import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const addPost = createAsyncThunk('post/postAdded', async (newPostForm) => {
    const res = await axios.post('http://localhost:3000/api/posts', newPostForm)
    return res.data
})

export const deletePost = createAsyncThunk('post/postDeleted', async (id) => {
    await axios.delete(`http://localhost:3000/api/posts/${id}`)
    return id
})

export const updatePost = createAsyncThunk('post/postUpdated', async (id, updatePostForm) => {
    const res = await axios.put(`http://localhost:3000/api/posts/${id}`, updatePostForm)
    return res.data
})

export const findPost = createAsyncThunk('post/postGeted', async (id) => {
    const res = await axios.get(`http://localhost:3000/api/posts/${id}`)
    return res.data
})  

export const getAllPosts = createAsyncThunk('post/getAllPosts', async () => {
    const res = await axios.get('http://localhost:3000/api/posts')
    return res.data
})

const postsSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        fb: []
    },      
    reducers: {        
    },
    extraReducers: {
        // Add Post
        [addPost.fulfilled]: (state, action) => {
            state.posts = state.posts.unshift(action.payload)
        },
        [addPost.rejected]: (state, action) => {
            console.log('Add Post Failed')
        },
        // Delete Post
        [deletePost.fulfilled]: (state, action) => {
            state.posts = state.posts.filter(post => post._id !== action.payload)
        },
        [deletePost.rejected]: (state, action) => {
            console.log('Delete Post Failed')
        },
        // Update Post
        [updatePost.fulfilled]: (state, action) => {
            state.posts = state.posts.map(post => post._id === action.payload.id ? action.payload : post)
        },
        [updatePost.rejected]: (state, action) => {
            console.log('Update Post Failed')
        },
        // Find Post
        [findPost.fulfilled]: (state, action) => {
            state.fb = state.posts.find(post => post._id === action.payload.id)
        },
        [findPost.rejected]: (state, action) => {
            console.log('Find Post Failed')
        },
        // Get All Posts
        [getAllPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
        },
        [getAllPosts.rejected]: (state, action) => {
            console.log('Get All Posts Failed')
        }
    }
})

const postsReducer = postsSlice.reducer

export default postsReducer