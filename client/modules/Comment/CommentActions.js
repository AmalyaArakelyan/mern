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
  return (dispatch) => {
    dispatch(addComment(date));
  };
}
