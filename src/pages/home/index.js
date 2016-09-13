const PageHome = require('./PageHome');
if (__LOCAL__ && window.chrome && window.chrome.webstore) { // This is a Chrome only hack
  // see https://github.com/livereload/livereload-extensions/issues/26
  setInterval(function() {
    document.body.focus();
  }, 200);
}

// bind fastclick
window.FastClick && FastClick.attach(document.body);

const { Router, Route, IndexRoute, Link, hashHistory } = ReactRouter;

class App extends React.Component {
  render() {
    return (
        <div className="page-content">
          {this.props.children}
        </div>
    );
  }
}

ReactDOM.render(
    <Router history={hashHistory}>
      <Route name="app" path="/" component={App}>
        <IndexRoute component={PageHome}/>
      </Route>
    </Router>, document.getElementById('App')
);