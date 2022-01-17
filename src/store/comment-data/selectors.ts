import { Comment } from '../../types/comment';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getComments = (state: State): Comment[] => state[NameSpace.Comment].comments;
const getIsCommentsLoaded = (state: State): boolean => state[NameSpace.Comment].isCommentsLoaded;

export {
  getComments,
  getIsCommentsLoaded
};
