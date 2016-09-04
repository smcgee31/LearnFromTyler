var React = require('react');

var Main = React.createClass({
	render: function () {
		return (
			<div>
				Hello from Main!
				{this.props.children}
				// this.props.children renders the child route that is active - the Router knows which one is active and makes that one the 'child'
			</div>
		)
	}
})

module.exports = Main;