var
	, React       		= require('react')
	, ReactRouter 		= require('react-router')
	, Router     		  = ReactRouter.Router
	, Route       		= ReactRouter.Route
	, IndexRoute  		= ReactRouter.IndexRoute
	, hashHistory 		= ReactRouter.hashHistory
	, Main        		= require('../components/Main')
	, Home        		= require('../components/Home')
	, PromptContainer = require('../containers/PromptContainer')
;

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
		// remember that the IndexRoute is active only when one of the child routes is not active.
			<IndexRoute component={Home} />
			// when the url path says /playerOne then the playerOne input path is active
			// header is a prop that is set here and then shows up on the PromptContainer
			<Route path='playerOne' header='Player One' component={PromptContainer} />
			// and when the url says /playerTwo then the playerTwo input path is active AND carries with it the playerOne input information
			<Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
		</Route>
	</Router>
)


module.exports = routes;