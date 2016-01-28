// not in components bc it's not really a component - more of a manager

var React = require('react');
// actual package
var ReactRouter = require('react-router');
// grab the router from inside of the package
var Router = ReactRouter.Router;
// for a specific page within our app
var Route = ReactRouter.Route;
// to change hashes
var CreateHistory = require('history/lib/createHashHistory');

// needed for hash stuff!
var History = new CreateHistory({
   queryKey: false
});

var Base = require('./components/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');

var Routes = (
   //needed for route hashing!!
   <Router history={History}>
      <Route path="/" component={Base} >
         <Route path="/page1" component={Page1} />
         <Route path="/page2" component={Page2} />
      </Route>
   </Router>
);

module.exports = Routes;
