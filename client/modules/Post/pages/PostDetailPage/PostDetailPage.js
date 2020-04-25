import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import { fetchPost } from '../../PostActions';
import { addCommentRequest } from '../../../Comment/CommentActions';

// Import Selectors
import { getPost } from '../../PostReducer';

// Import Components
import CommentsList from '../../../Comment/components/CommentsList';
import AddComment from '../../../Comment/components/AddComment';

class PostDetailPage extends Component {

  handleAddComment = (name, comment) => {
    const post = this.props.post.cuid;
    this.props.dispatch(addCommentRequest({ name, comment, post }));
  };

  render() {
    const post = this.props.post;
    return (post
      ? <div>
        <Helmet title={post.title} />
        <div className={`${styles['single-post']} ${styles['post-detail']}`}>
          <h3 className={styles['post-title']}>{post.title}</h3>
          <p className={styles['author-name']}><FormattedMessage id="by" /> {post.name}</p>
          <p className={styles['post-desc']}>{post.content}</p>
        </div>
        <CommentsList />
        <AddComment addComment={this.handleAddComment} />
      </div>
      : null
    );
  }
}

// Actions required to provide data for this component to render in server side.
PostDetailPage.need = [params => {
  return fetchPost(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    post: getPost(state, props.params.cuid),
  };
}

PostDetailPage.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PostDetailPage);
