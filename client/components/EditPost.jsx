import React from 'react';

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: {} };
    this.updatePost = this.updatePost.bind(this);
  }

  componentWillMount() {
    let id = this.props.params.id;
    $.ajax({
      url: `/api/posts/${id}`,
      type: 'GET'
    }).done( post => {
      this.setState({ post });
    }).fail( error => {
      console.log(error);
    })
  }

  updatePost(e) {
    e.preventDefault();
    let title = this.refs.title.value;
    let body = this.refs.body.value;
    let id = this.state.post.id;
    $.ajax({
      url: `/api/posts/${id}`,
      type: 'POST',
      data: { post: {title, body} }
    }).done( done => {
      if (done.error) {
        // TODO handle this message
      } else {
        alert(done.title + ' Post Saved')
        this.props.history.push(`/posts/${done.id}`);
      }
    }).fail( error => {
      console.log(error);
    })
  }

  render() {
    let post = this.state.post;
    if (post.id) {
      return (
        <div className='ten columns offset-by-one'>
          <h3>Edit Post</h3>
          <form className='new-post-form' onSubmit={this.updatePost}>
            <input type='text' ref='title' defaultValue={post.title} />
            <textarea ref='body' defaultValue={post.body}></textarea>
            <input type='submit' value='Save' />
          </form>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default EditPost;
