import callApi from '../../util/apiCaller';
// Export Constants
export const ADD_COMMENT = 'ADD_COMMENT';

// Export Actions
export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}

export function addCommentRequest(date) {
  debugger
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
