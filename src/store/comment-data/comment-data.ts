import { createReducer } from '@reduxjs/toolkit';
import { CommentData } from '../../types/state';
import { loadComments, setIsCommentsLoaded } from '../action';

const initialState: CommentData = {
  comments: [],
  isCommentsLoaded: false,
};

const commentData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadComments, (state, action) => {
      const { comments } = action.payload;
      state.comments = comments;
    })
    .addCase(setIsCommentsLoaded, (state, action) => {
      const { isCommentsLoaded } = action.payload;
      state.isCommentsLoaded = isCommentsLoaded;
    });
});

export { commentData };
