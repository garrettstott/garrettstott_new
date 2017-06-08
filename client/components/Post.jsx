import React from 'react';
import {Link} from 'react-router';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let post = this.props;
    let date = $.timeago(post.created_at);
    let body = post.body.substring(0, 300).replace(/\n/g, '<br />');
    if (body.substr(body.length -1, 1) == ' ') {
      body = body.substr(0, body.length -1);
    }
    body = body + '...'
    return (
      <div className='post'>
        <div className='post-info twelve columns'>
          <div className='post-image' title='Posted by Garrett Stott'></div>
          <h5><Link title={post.title} className='post-title' to={`/posts/${post.id}`}>{post.title}</Link></h5>
          <h6 className='post-date'>{date}</h6>
        </div>
        <div dangerouslySetInnerHTML={{__html: body}}></div>
        <h6 className='center pad-top-lg mar-bot-no'><Link title='Read More' className='' to={`/posts/${post.id}`}>Read More</Link></h6>
      </div>
    )
  }
}

export default Post;
