import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  browserHistory,
  IndexRoute,
} from 'react-router';

import Index from '../pages/index/index';
import Detail from '../pages/Detail/index';

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
      <Route path="/detail" component={Detail}/>
	  </Route>
	</Router>
);

export default routes;
