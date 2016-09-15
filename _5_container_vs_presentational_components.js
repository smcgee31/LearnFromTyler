// this is the initial component he starts out with...
// check other #5 components

var React = require('react');

var PromptContainer = React.createClass({
	render: function () {
		return (
			<div className='jumbotron col-sm-6 col-sm-offset-3 text-center'>
				<h1>SOME HEADER TEXT</h1>
				<div className='col-sm-12'>
					<form>
						<div className='form-group'>
							<input
								className='form-control'
								placeholder='Github Username'
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