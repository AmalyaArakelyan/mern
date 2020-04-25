import { ADD_COMMENT } from './CommentActions';

// Initial State
const initialState = { data: [] };

const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT :
      return {
        data: [action.comment, ...state.data],
      };

    default:
      return state;
  }
};

export default CommentReducer;
