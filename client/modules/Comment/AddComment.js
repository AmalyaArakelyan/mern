import React, { Component } from 'react';

// Import Style
import Style from './AddComment.css';

export class AddComment extends Component {

  render() {
    return (
      <div className={Style['write-new']}>
        <form action="#" method="post">
          <textarea placeholder="" name="comment" ref="comment"></textarea>
          <div>
            <input type="text" placeholder="" name="auther" ref="auther"></input>
            <button type="button" >submit</button>
          </div>
        </form>
      </div>
    );
  }
}

AddComment.propTypes = {
};

export default AddComment;
