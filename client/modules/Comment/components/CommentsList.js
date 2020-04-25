import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import Item from './CommentItem';
// Import Style
import Style from './Comment.css';

function CommentList(props) {
  const { comments, newComments } = props;
  return (
    <div className="listView">
      <ul className={Style['comment-section']}>
        {/* <Item type="old" /> */}
        {comments.map(comment => {
          return (<Item
            key={comment.cuid}
            comment={comment}
            type="old"
          />);
        })}
        {newComments.map(comment => {
          return (<Item
            key={comment.cuid}
            comment={comment}
            type="new"
          />);
        })}
      </ul>
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  newComments: PropTypes.array.isRequired,
};

export default CommentList;
