import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import moment from 'moment';
// Import Components

// Import Style
import Style from './Comment.css';

// Import Icons
import remove from '../../App/icons/delete.png';
import edit from '../../App/icons/edit.png';

export class CommentItem extends Component {

  constructor(props) {
    super(props);
    this.state = { edit: false };
  }

  openEdit = () => this.setState({ edit: !this.state.edit });

  saveComment = () => {
    const nameRef = this.refs.auther;
    const commentRef = this.refs.comment;
    if (nameRef.value && commentRef.value) {
      this.props.saveComment({
        name: nameRef.value,
        comment: commentRef.value,
      }, this.props.comment.cuid, this.props.type);
      this.setState({ edit: false });
    }
    return null;
  };

  delete = () => {
    this.props.deleteComment(this.props.comment.cuid, this.props.type);
  }

  render() {
    const { comment, type } = this.props;
    const style = (type === 'old') ? 'user-comment' : 'author-comment';

    return (
      this.state.edit ? <li className={`${Style.comment} `}>
        <div className={Style['write-new']}>
          <form action="#" method="post">
            <textarea placeholder={this.props.intl.messages.createComment} name="comment" defaultValue={comment.comment} ref="comment"></textarea>
            <div>
              <input type="text" placeholder={this.props.intl.messages.commentAuther} defaultValue={comment.name} name="auther" ref="auther"></input>
              <button type="button" onClick={this.openEdit} className={Style.cancel} ><FormattedMessage id="cancel" /></button>
              <button type="button" onClick={this.saveComment}><FormattedMessage id="save" /></button>
            </div>
          </form>
        </div>
      </li>
      : <li className={`${Style.comment} ${Style[style]}`}>
        <div className={Style.info}>
          <a href="#">{comment.name}</a>
          <span>{moment(comment.dataAdded).fromNow()}</span>
        </div>
        <p>{comment.comment}</p>
        <div className={Style.actions}>
          <img className={Style.edit} onClick={this.openEdit} src={edit} alt="delete" />
          <img className={Style.delete} onClick={this.delete} src={remove} alt="delete" />
        </div>
      </li>
    );
  }
}

CommentItem.propTypes = {
  type: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
  saveComment: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(CommentItem);
