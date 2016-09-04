var
	, React = require('react')
	, ReactRouter = require('react-router')
	, Router = ReactRouter.Router
	, Route = ReactRouter.Route
	, IndexRoute = ReactRouter.IndexRoute
	, Main = require('../components/Main')
	, Home = require('../components/Home');

var routes = (
	<Router>
		// this route method says no matter what path someone goes to, always make sure that this path is active => path='/'
		<Route path='/' component={Main}>
			<Route path='/home' component={Home} />        // this is the 'child'
			<Route path='/contact' component={Contact} />  // this is another 'child'
		</Route>
	</Router>
)


module.exports = routes;



// check out the file called _3a_main.js for the Main component

// check out the file called _3a_home.js for the Home component

// And when this gets rendered and the Home route is active then what you should see is..

// Hello from Main!
// Hello from Home!

// because the Main is always active and then the child that is activated is the one rendered within it as the props.children