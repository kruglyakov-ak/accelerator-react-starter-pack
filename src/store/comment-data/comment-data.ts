import { createReducer } from '@reduxjs/toolkit';
import { CommentData } from '../../types/state';
import { loadComments, loadCommentsByGuitarId, setIsCommentsLoaded } from '../action';

const initialState: CommentData = {
  comments: [],
  commentsByGuitarId: [],
  isCommentsLoaded: false,
};

const commentData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadComments, (state, action) => {
      const { comments } = action.payload;
      state.comments = comments;
    })
    .addCase(loadCommentsByGuitarId, (state, action) => {
      const { commentsByGuitarId } = action.payload;
      state.commentsByGuitarId = commentsByGuitarId;
    })
    .addCase(setIsCommentsLoaded, (state, action) => {
      const { isCommentsLoaded } = action.payload;
      state.isCommentsLoaded = isCommentsLoaded;
    });
});

export { commentData };
