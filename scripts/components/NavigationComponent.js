var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function(){
		this.props.router.on('route', () => {
			this.forceUpdate();
		});
	},
	render: function() {
		var links = [];

		links.push(this.createLink('', 'Home'));

		if (!Parse.User.current()) {
			links.push(this.createLink('login', 'Login'));
			links.push(this.createLink('register', 'Register'));
		} else {
			links.push(this.createLink('dashboard', 'Dashboard'));
			links.push(<li><a href="#" onClick={this.logout}>Logout</a></li>);
			links.push(<li className="userLi">{Parse.User.current().getEmail()}</li>);
		}
		return (
			
		<div className="nav-wrapper">
			<a href="#" className="brand-logo left">Login Example</a>
			<ul id="nav-mobile" className="right">
				<li key="home"><a href="#">Home</a></li>
				<li key="dashboard"><a href="#dashboard">Dashboard</a></li>
				<li key="login"><a href="#login">Login</a></li>
				<li key="register"><a href="#register">Register</a></li>
				<li key="logout"><a href="#logout">Logout</a></li>
			</ul>
		</div>
			);
		},
		logout: function(e) {
			e.preventDefault();
			Parse.User.logOut();
			this.props.router.navigate('', {trigger: true});
		},
		createLink: function(url, label) {
			var currentUrl = Backbone.history.getFragment();
			if(currentUrl === url) {
				return (<li className="active"><a href={'#'+url}>{label}</a></li>);
			}
			else {
				return (<li><a href={'#'+url}>{label}</a></li>);
			}
		}
	});


		