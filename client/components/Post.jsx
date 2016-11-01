import React from 'react';
import {Link} from 'react-router';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let post = this.props;
    let date = $.timeago(post.created_at);
    let body = post.body.substring(0, 250);
    return (
      <div className='post'>
        <h5><Link to={`/posts/${post.id}`}>{post.title}</Link></h5>
        <h6>{date}</h6>
        {body}
      </div>
    )
  }
}

export default Post;
