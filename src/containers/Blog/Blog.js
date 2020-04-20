import React, {Component} from 'react';
// import {Route, Link, Redirect} from 'react-router-dom';
import {Route, NavLink, Switch} from 'react-router-dom';

import classes from './Blog.module.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  state = {
    auth: false,
  };
  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/posts" activeClassName={classes.active}>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}
                  activeClassName={classes.active}
                  activeStyle={{textDecoration: 'underline'}}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" render={() => <h1>Stateless Header</h1>} />
        <Route path="/" exact render={() => <h1>Stateful Header</h1>} /> */}
        <Switch>
          {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found</h1>}/>
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
