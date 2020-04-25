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

// Import Components
import CommentsList from '../../../Comment/components/CommentsList';
import AddComment from '../../../Comment/components/AddComment';

class PostDetailPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.params.cuid));
  }

  handleAddComment = (name, comment) => {
    const post = this.props.post.id;
    this.props.dispatch(addCommentRequest({ name, comment, post }));
  };

  render() {
    const post = this.props.post;
    return (post
      ? <div>
        <Helmet title={post.post.title} />
        <div className={`${styles['single-post']} ${styles['post-detail']}`}>
          <h3 className={styles['post-title']}>{post.post.title}</h3>
          <p className={styles['author-name']}><FormattedMessage id="by" /> {post.post.name}</p>
          <p className={styles['post-desc']}>{post.post.content}</p>
        </div>
        <CommentsList newComments={this.props.newComments} comments={this.props.post.comment} />
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
function mapStateToProps(state) {
  return {
    post: state.posts.post,
    newComments: state.comment.data,
  };
}

PostDetailPage.propTypes = {
  newComments: PropTypes.array.isRequired,
  post: PropTypes.shape({
    post: PropTypes.object.isRequired,
    comment: PropTypes.array.isRequired,
    cuid: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  params: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PostDetailPage);
