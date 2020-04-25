import { ADD_POST, ADD_POSTS, DELETE_POST, GET_POST, DELETE_COMMENT, UPDATE_COMMENT } from './PostActions';
import { getUpdated } from '../../util/react-intl-test-helper';

// Initial State
const initialState = { data: [], post: null };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.post, ...state.data],
      };
    case GET_POST :
      return {
        ...state,
        post: action.post,
      };

    case ADD_POSTS :
      return {
        data: action.posts,
      };

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    case DELETE_COMMENT :
      return {
        post: { ...state.post, comment: state.post.comment.filter(item => item.cuid !== action.cuid) },
      };

    case UPDATE_COMMENT :
      return {
        post: { ...state.post, comment: getUpdated(state.post.comment, action.comment) },
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default PostReducer;
