import React from 'react';
import Post from './Post';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
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
      return ( <Post key={post.id} {...post} /> )
    });
    return (
      <div className='twelve columns'>
        <div className='banner'></div>
        <div className='eight columns offset-by-two'>
          {posts}
        </div>
      </div>
    )
  }
}

export default Home;
