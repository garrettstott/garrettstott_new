import React from 'react';
import AdminPost from './AdminPost';

class AdminPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.deletePost = this.deletePost.bind(this);
  }

  deletePost(id) {
    let choice = confirm('Delete this post?');
    if (choice === true) {
      let posts = this.state.posts.filter(post => post.id !== id )
      $.ajax({
        url: `/api/posts/${id}`,
        type: 'DELETE'
      }).done( done => {
        if (done.error) {
          // TODO handle this error
        } else {
          this.setState({ messages: done.post, posts });
        }
      }).fail( error => {
        console.log(error);
      })
    }
  }

  componentWillMount() {
    $.ajax({
      url: '/api/posts',
      type: 'GET'
    }).done( posts => {
      this.setState({ posts });
    }).fail( error => {
      console.log(error);
    })
  }

  render() {
    let posts = this.state.posts.map( post => {
      return(<AdminPost deletePost={this.deletePost} key={post.id} {...post} />);
    })
    return (
      <div className='ten columns offset-by-one'>
        <h3>All Posts</h3>
        {posts}
      </div>
    )
  }
}

export default AdminPosts;
