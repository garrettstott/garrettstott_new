import React from 'react';

class ShowPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: {} };
  }

  componentWillMount() {
    let id = this.props.params.id;
    $.ajax({
      url: `/api/posts/${id}`,
      type: 'GET'
    }).done( post => {
      post.body = post.body.replace(/\n/g, '<br />');
      this.setState({ post });
    }).fail( error => {
      console.log(error);
    })
  }

  render() {
    let post = this.state.post;
    let body = post.body;
    return (
      <div>
        <div className='banner'></div>
        <div className='showpost twelve columns'>
          <div className='eight columns offset-by-two'>
            <h1 className='pad-top-sm center'>{post.title}</h1>
            <h6>{new Date(post.created_at).toLocaleDateString()}</h6>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowPost;
