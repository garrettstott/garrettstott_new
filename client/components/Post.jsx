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
        <div className='post-info twelve columns'>
          <div className='post-image'></div>
          <h5><Link title='Posted by Garrett Stott'className='post-title' to={`/posts/${post.id}`}>{post.title}</Link></h5>
          <h6 className='post-date'>{date}</h6>
        </div>
        {body}...
        <h6 className='center pad-top-sm mar-bot-no'><Link title='Posted by Garrett Stott' className='normal' to={`/posts/${post.id}`}>Read More</Link></h6>
      </div>
    )
  }
}

export default Post;
