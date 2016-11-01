import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Blog from './components/Blog';
import Admin from './components/Admin';
import ShowPost from './components/ShowPost';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import AdminPosts from './components/AdminPosts';
import AdminInfo from './components/AdminInfo';
import Home from './components/Home';

export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component={Home} >
      </IndexRoute >
      <Route path='/blog' component={Blog} />
      <Route path='/posts/:id' component={ShowPost} />
      <Route path='/admin' component={Admin} >
        <IndexRoute component={NewPost} >
        </IndexRoute>
        <Route path='/admin/edit-post' component={EditPost} />
        <Route path='/admin/posts' component={AdminPosts} />
        <Route path='/admin/posts/:id/edit' component={EditPost} />
      </Route>

    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
