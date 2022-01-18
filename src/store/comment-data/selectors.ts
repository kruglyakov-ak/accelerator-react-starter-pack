import { Comment } from '../../types/comment';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getComments = (state: State): Comment[] => state[NameSpace.Comment].comments;
const getCommentsByGuitarId = (state: State): Comment[] => state[NameSpace.Comment].commentsByGuitarId;
const getIsCommentsLoaded = (state: State): boolean => state[NameSpace.Comment].isCommentsLoaded;

export {
  getComments,
  getCommentsByGuitarId,
  getIsCommentsLoaded
};
