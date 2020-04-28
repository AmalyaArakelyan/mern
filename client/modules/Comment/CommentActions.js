import callApi from '../../util/apiCaller';
import { deleteCommentInPost, updateCommentInPost } from '../Post/PostActions';

// Export Constants
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

// Export Actions
export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}

export function addCommentRequest(date) {
  return (dispatch) => {
    return callApi('comment', 'post', {
      name: date.name,
      comment: date.comment,
      post: date.post,
    }).then(res => {
      dispatch(addComment(res));
    });
  };
}

export function deleteComment(cuid) {
  return {
    type: DELETE_COMMENT,
    cuid,
  };
}

export function deleteCommentRequest(cuid, type) {
  return (dispatch) => {
    return callApi(`comment/${cuid}`, 'delete').then(() => {
      if (type === 'new') {
        dispatch(deleteComment(cuid));
      } else {
        dispatch(deleteCommentInPost(cuid));
      }
    });
  };
}

export function updateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment,
  };
}

export function updateCommentRequest(comment, cuid, type) {
  return (dispatch) => {
    return callApi(`comment/${cuid}`, 'put', comment).then(res => {
      const apdated = { ...res, name: comment.name, comment: comment.comment };
      if (type === 'new') {
        dispatch(updateComment(apdated));
      } else {
        dispatch(updateCommentInPost(apdated));
      }
    });
  };
}

