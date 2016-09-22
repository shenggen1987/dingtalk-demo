const { Router, Route, IndexRoute, Link, hashHistory } = ReactRouter;

import Index from './pages/index';
import Detail from './pages/detail';
import Login from './pages/login';
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
      <Route path="/login" component={Login}/>
	  </Route>
	</Router>
);

export default routes;
