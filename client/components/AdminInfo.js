import React from 'react';
import {Link} from 'react-router';

class AdminInfo extends React.Component {
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
    return (
      <div className='ten columns offset-by-one'>
        <h3>Info</h3>
        <div className='center'>
          <div className='four columns post'>
            <h4>Posts</h4>
            <div className='text-left'>
              <Link to='/admin/posts'><p>Total: {this.state.posts.length}</p></Link>
            </div>
          </div>

          <div className='four columns post'>
            <h4>Views</h4>
            <div className='text-left'>
              <p>Total: 3245</p>
            </div>
          </div>

          <div className='four columns post'>
            <h4>Todo</h4>
            <div className='text-left'>
              <p>Add: Something</p>
            </div>
          </div>

        </div>
      </div>
    )
  }

}

export default AdminInfo;
