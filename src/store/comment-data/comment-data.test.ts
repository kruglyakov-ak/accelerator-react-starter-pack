import { makeFakeComments } from '../../utils/mocks';
import { loadComments, loadCommentsByGuitarId, setIsCommentsLoaded } from '../action';
import { commentData } from './comment-data';

const comments = makeFakeComments();

describe('Reducer: commentData', () => {
  it('without additional parameters should return initial state', () => {
    expect(commentData(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        comments: [],
        commentsByGuitarId: [],
        isCommentsLoaded: false,
      });
  });

  it('should update guitars by load comments', () => {
    const state = {
      comments: [],
      commentsByGuitarId: [],
      isCommentsLoaded: false,
    };
    expect(commentData(state, loadComments(comments)))
      .toEqual({
        comments: comments,
        commentsByGuitarId: [],
        isCommentsLoaded: false,
      });
  });

  it('should update guitarsWithoutFilters by load comments by guitar Id', () => {
    const state = {
      comments: [],
      commentsByGuitarId: [],
      isCommentsLoaded: false,
    };
    expect(commentData(state, loadCommentsByGuitarId(comments)))
      .toEqual({
        comments: [],
        commentsByGuitarId: comments,
        isCommentsLoaded: false,
      });
  });

  it('should update guitar by set is comments loaded', () => {
    const state = {
      comments: [],
      commentsByGuitarId: [],
      isCommentsLoaded: false,
    };
    expect(commentData(state, setIsCommentsLoaded(true)))
      .toEqual({
        comments: [],
        commentsByGuitarId: [],
        isCommentsLoaded: true,
      });
  });
});
