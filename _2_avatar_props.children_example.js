// USER_DATA is simply just a user variable to be used in the code below.
var USER_DATA = {
	  name: 'Steve McGee'
	, username: 'smcgee31'
	, image: 'https://avatars1.githubusercontent.com/u/17241415?v=3&s=460'
};

var React = require('react');
var ReactDOM  =require('react-dom');


var ProfilePic = React.createClass({
	render: function () {
		return (
			<img src={this.props.imageUrl} style={{height: 100, width: 100}} />
		)
	}
});


// This new Link component uses the this.props.children that will call the children props that exist between the Link tags when <Link> gets used in the ProfileLink component
// Also... the onClick prop is a built-in React atrribute that we can use
// and changeURL method is a custom built method... notice it says this.changeURL because it is within the Link component
var Link = React.createClass({
	changeURL: function () {
		window.location.replace(this.props.href)   // this.props.href was passed in from the ProfileLink component as a prop of Link
	},
	render: function () {
		return (
			<span
				style={{color: 'blue', cursor: 'pointer'}}
				onClick={this.changeURL}
				>
				{this.props.children}
			</span>
		)
	}
})

// the this.props.username is the "child" props
var ProfileLink = React.createClass({
	render: function () {
		return (
			<Link href={'https://www.github.com/' + this.props.username}>
				{this.props.username}
			</Link>
		)
	}
});

var ProfileName = Reacgt.createClass({
	render: function () {
		return (
			<div>
				{this.props.name}
			</div>
		)
	}
});

var Avatar = React.createClass({
	render: function () {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileLink username={this.props.user.username} />
				<ProfileName name={this.props.user.name} />
			</div>
		)
	}
})

ReactDOM.render(
	<Avatar user={USER_DATA} />
)


