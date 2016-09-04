// USER_DATA is simply just a user variable to be used in the code below.
var USER_DATA = {
	  name: 'Steve McGee'
	, username: 'smcgee31'
	, image: 'https://avatars1.githubusercontent.com/u/17241415?v=3&s=460'
};

// must require these two - duh
var React = require('react');
var ReactDOM  =require('react-dom');


// Each of the below "helper components" has this.props.SOMETHING and that is what you need to pay attention to. This is what we are learning here is the passing of props from one component to the other.

// ProfilePic has a this.props of IMAGEURL
var ProfilePic = React.createClass({
	render: function () {
		return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
	}
});

// ProfileLink has a this.props of USERNAME
var ProfileLink = React.createClass({
	render: function () {
		return (
			<a href={'https://www.github.com/' + this.props.username}>
				{this.props.username}
			</a>
		)
	}
});

// ProfileName has a this.props of NAME
var ProfileName = Reacgt.createClass({
	render: function () {
		return (
			<div>
				{this.props.name}
			</div>
		)
	}
});

// Avatar has a this.props of USER which has the other props from above in it
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

// the Avatar that gets rendered has the USER property assigned to it that is the USER_DATA defined at the top
ReactDOM.render(
	<Avatar user={USER_DATA} />
)


// Also...
// all of these props can get passed from the parent to the child even when you break out all of these components into module.exports files!
// for instance the first "helper component" called ProfilePic would be its own .js file called ProfilePic.js and would look like this:



// var React = require('react');
//
// function ProfilePic (props) {
//   return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
// }
//
// module.exports = ProfilePic;



// and would get "required" by the file that was using this "helper component"