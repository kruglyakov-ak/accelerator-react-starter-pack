import { createReducer } from '@reduxjs/toolkit';
import { CommentData } from '../../types/state';
import { loadComments } from '../action';

const initialState: CommentData = {
  comments: [],
};

const commentData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadComments, (state, action) => {
      const { comments } = action.payload;
      state.comments = comments;
    });
});

export { commentData };
