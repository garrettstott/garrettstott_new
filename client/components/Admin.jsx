import React from 'react';
import Post from './Post';
import {Link} from 'react-router';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: '/user_info',
      type: 'GET'
    }).done( user => {
      this.setState({ user });
      if (user === null) {
        window.location.href='/users/sign_in';
      }
    }).fail( error => {
      console.log(error);
    })
  }

  logout() {
    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE'
    }).done( () => {
      this.setState({ user: null });
      window.location.href='/';
    }).fail( error => {
      console.log(error);
    })
  }

  auth() {
    let user = this.state.user;
    if (user === null) {
      return(<h1 className='center'>Not Authorized</h1>);
    } else if (user !== null) {
      return (
        <div>
          <div className='twelve columns'>
            <ul className='nav-links float-right'>
              <Link to='/admin/'><li>New Post</li></Link>
              <Link to='/admin/posts'><li>Show Posts</li></Link>
              <a href='#' onClick={this.logout}><li>Logout</li></a>
            </ul>
          </div>

          <div className='twelve columns'>
            <h1 className='center'>Admin</h1>
            {this.props.children}
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.auth()}
      </div>
    );
  }
}

export default Admin;
