// this is the initial component he starts out with...
// check other #5 components

var React = require('react');

var PromptContainer = React.createClass({
	// if you were to console.log(this) at this point you would see the availability of the header prop on route
	getInitialState: function () {
		return {
			username: '' // this sets the state to an empty string and syncs it to the initial value set on the input tag below... then when onChange happens (input field gets something from the user) then state gets changed through the onUpdateUser method.
		}
	},
	onUpdateUser: function (e) {
		this.setState({
			username: e.target.value
		})
	},
	onSubmitUser: function (e) {
		// when a submit happens there might be a default action from the browser that we want to avoid (like a page refresh or something)
		e.preventDefault();
		// cache the username by setting it to a variable
		var username = this.state.username;
		// once the user clicks the button you want the input field to be cleared...
		this.setState({
			username: ''
		});


	},
	render: function () {
		return (
			<div className='jumbotron col-sm-6 col-sm-offset-3 text-center'>
				<h1>{this.props.route.header}</h1>
				<div className='col-sm-12'>
				// because we are in a form and the button has a type='submit' we can put onSubmit() on the form tag.
					<form onSubmit={onSubmitUser}>
						<div className='form-group'>
							<input
								className='form-control'
								placeholder='Github Username'
								onChange={this.onUpdateUser}
								value={this.state.username}
								text='text' />
						</div>
						<div className='form-group col-sm-4 col-sm-offset-4'>
							<button
								className='btn btn-block-btn-success'
								type='submit'>
									Continue
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
})

module.exports = PromptContainer;