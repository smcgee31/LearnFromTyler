var
	, React = require('react')
	, ReactRouter = require('react-router')
	, Router = ReactRouter.Router
	, Route = ReactRouter.Route
	, IndexRoute = ReactRouter.IndexRoute
	, hashHistory = ReactRouter.hashHistory
	, Main = require('../components/Main')
	, Home = require('../components/Home');

var routes = (
	// hashHistory is how React Router is keeping track of everything. You can change this by setting up your own server but until then... yeah, ugly urls.
	<Router history={hashHistory}>
		// {Main} -- this route method says no matter what path someone goes to, always make sure that this path is active => path='/'
		<Route path='/' component={Main}>
		  // IndexRoute gets automatically activated when no other route is active
			<IndexRoute component={Home} />        				 // this is a 'child' - but notice there is no path because it is the IndexRoute
			<Route path='/contact' component={Contact} />  // this is a 'child'
		</Route>
	</Router>
)


module.exports = routes;