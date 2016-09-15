import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  browserHistory,
  IndexRoute,
} from 'react-router';

import Index from '../pages/index/index';

class App extends React.Component {
  render() {
    return (
        <div className="page-content">
          {this.props.children}
        </div>
    );
  }
}
/* global SERVER_RENDING */
const routes = (
  <Router history={hashHistory}>
	  <Route path="/" component={App}>
	  	<IndexRoute component={Index}/>
	  </Route>
	</Router>
);

export default routes;
