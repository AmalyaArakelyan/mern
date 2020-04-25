import React from 'react';
// Import Components

// Import Style
import Style from './Comment.css';

// Import Icons
import remove from '../../App/icons/delete.png';
import edit from '../../App/icons/edit.png';

function CommentItem() {
  return (
    <li className={`${Style.comment}`}>
      <div className={Style.info}>
        <a href="#">name</a>
        <span>4 hours ago</span>
      </div>
      <p>comment</p>
      <div className={Style.actions}>
        <img className={Style.edit} src={edit} alt="delete" />
        <img className={Style.delete} src={remove} alt="delete" />
      </div>
    </li>
  );
}

CommentItem.propTypes = {
};

export default CommentItem;
