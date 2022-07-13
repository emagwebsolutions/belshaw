import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

let initialState = {
    data: {}
}

const Post = createSlice({
    name: 'postdata',
    initialState,
    reducers: {
        postactiontype: (state,action) => {
            state.data = action.payload
        }
    }
})

export const { postactiontype } = Post.actions
export default Post.reducer
