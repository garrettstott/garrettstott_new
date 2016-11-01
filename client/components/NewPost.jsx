import React from 'react';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let title = this.refs.title.value;
    let body = this.refs.body.value;
    $.ajax({
      url: '/api/posts/new',
      type: 'POST',
      data: {post: {title, body}}
    }).done( done => {
      if (done.error) {
        return (
          this.setState({ messages: done.error })
        )
      } else {
        alert(done.title + ' Post Saved');
        this.props.history.push(`/admin/posts`)
      }
    }).fail( error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className='ten columns offset-by-one'>
        <form className='new-post-form' onSubmit={this.handleSubmit}>
          <div>
            <h3>New Post</h3>
            <input type='text' ref='title' placeholder='Title' />
          </div>
          <div>
            <textarea ref='body' placeholder='Body'></textarea>
          </div>
          <div>
            <input type='submit' value='Save' />
            <a href='#' className='float-right' onClick={this.toggleNew}>Hide</a>
          </div>
        </form>
      </div>
    )
  }
}

export default NewPost;
