import React from 'react';
import {Link} from 'react-router';

class AdminPost extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let post = this.props;
    return (
      <div className='post clearfix'>
        <h5>{post.title}</h5>
        <p>{new Date(post.created_at).toLocaleDateString()}</p>
        <p>{post.body.substring(0, 250)}...</p>
        <ul className='nav-links float-right'>
          <Link to={`/admin/posts/${post.id}/edit`}><li>Edit</li></Link>
          <li className='danger' onClick={() => this.props.deletePost(post.id)}>Delete</li>
        </ul>
      </div>
    )
  }
}

export default AdminPost;
