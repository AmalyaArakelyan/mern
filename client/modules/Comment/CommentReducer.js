import { ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } from './CommentActions';
import { getUpdated } from '../../util/react-intl-test-helper';

// Initial State
const initialState = { data: [] };

const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT :
      return {
        data: [action.comment, ...state.data],
      };

    case UPDATE_COMMENT :
      return {
        data: getUpdated(state.data, action.comment),
      };

    case DELETE_COMMENT :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

export default CommentReducer;
