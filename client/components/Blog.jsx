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
    if (posts.length < 1) {
      posts = <div className='center'><p>Loading Posts...</p></div>
    }
    return (
      <div>
        <div className='banner'></div>
        <div className='blogs twelve columns'>
          <h1 className='center'>Some Thoughts</h1>
          <div className='six columns offset-by-three'>
            {posts}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
