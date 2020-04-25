import React from 'react';
import PropTypes from 'prop-types';

// Import Components

// Import Style
import Style from './Comment.css';

// Import Icons
import remove from '../../App/icons/delete.png';
import edit from '../../App/icons/edit.png';

function CommentItem(props) {
  const { comment, type } = props;
  const style = (type === 'old') ? 'user-comment' : 'author-comment';

  return (
    <li className={`${Style.comment} ${Style[style]}`}>
      <div className={Style.info}>
        <a href="#">{comment.name}</a>
        <span>4 hours ago</span>
      </div>
      <p>{comment.comment}</p>
      <div className={Style.actions}>
        <img className={Style.edit} src={edit} alt="delete" />
        <img className={Style.delete} src={remove} alt="delete" />
      </div>
    </li>
  );
}

CommentItem.propTypes = {
  type: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
};

export default CommentItem;
