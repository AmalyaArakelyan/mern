import React from 'react';

// Import Components
import Item from './CommentItem';
// Import Style
import Style from './AddComment.css';


function CommentList() {
  return (
    <div className="listView">
      <ul className={Style['comment-section']}>
        <Item />
        <Item />
        <Item />
      </ul>
    </div>
  );
}

CommentList.propTypes = {
};

export default CommentList;
