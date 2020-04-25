import React, { Component } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import Style from './AddComment.css';

export class AddComment extends Component {

  render() {
    return (
      <div className={Style['write-new']}>
        <form action="#" method="post">
          <textarea placeholder={this.props.intl.messages.createComment} name="comment" ref="comment"></textarea>
          <div>
            <input type="text" placeholder={this.props.intl.messages.commentAuther} name="auther" ref="auther"></input>
            <button type="button" ><FormattedMessage id="submit" /></button>
          </div>
        </form>
      </div>
    );
  }
}

AddComment.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(AddComment);
