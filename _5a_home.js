var React = require('react');
var ReactRouter = require('react-router');
// Link is a function of ReactRouter
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function () {
		return(
			<div className='jumbotron col-sm-12 text-center'>
				<h1>Github Battle</h1>
				<p className='lead'>Some fancy motto</p>
				// simply tell it where to go using 'to' and the button, which is the child of the Link tag will activate the Link
				<Link to='/playerOne'>
					<button type='button' className='btn btn-lg btn-success'>Get Started</button>
				</Link>
			</div>
		)
	}
});

module.exports = Home;