import { createSlice } from '@reduxjs/toolkit';

const loadPostsFromLocalStorage = () => {
  const savedPosts = localStorage.getItem('posts');
  return savedPosts ? JSON.parse(savedPosts) : [];
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: loadPostsFromLocalStorage(),
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('posts', JSON.stringify(state)); 
      console.log('Posts in local storage:', JSON.parse(localStorage.getItem('posts'))); 
    },
    editPost: (state, action) => {
      const { id, updatedPost } = action.payload;
      const index = state.findIndex(post => post.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedPost };
        localStorage.setItem('posts', JSON.stringify(state)); 
      }
    },
  },
});

export const { addPost, editPost } = postsSlice.actions;
export default postsSlice.reducer;
