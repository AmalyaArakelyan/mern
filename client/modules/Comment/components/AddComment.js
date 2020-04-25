import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import Style from './Comment.css';

export class AddComment extends Component {

  addComment = () => {
    const nameRef = this.refs.auther;
    const commentRef = this.refs.comment;
    if (nameRef.value && commentRef.value) {
      this.props.addComment(nameRef.value, commentRef.value);
      nameRef.value = commentRef.value = '';
    }
    return null;
  };

  render() {
    return (
      <div className={Style['write-new']}>
        <form action="#" method="post">
          <textarea placeholder={this.props.intl.messages.createComment} name="comment" ref="comment"></textarea>
          <div>
            <input type="text" placeholder={this.props.intl.messages.commentAuther} name="auther" ref="auther"></input>
            <button type="button" onClick={this.addComment}><FormattedMessage id="submit" /></button>
          </div>
        </form>
      </div>
    );
  }
}

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(AddComment);
