'use strict';


var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var DashboardComponent = require('./components/DashboardComponent');
var LoginComponent = require('./components/LoginComponent');
var RegisterComponent = require('./components/RegisterComponent');

Parse.initialize("NIXnILrrsu8JdvUWbFAsMuM48vsb1Qh3iCPyeahc", "jl3vfE6GQ3vJTonhw6UnQHh5G3Y48rnXSAULetGA");



var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'dashboard': 'dashboard',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		React.render(<HomeComponent router={r} />, app);
	},
	dashboard: function() {
		React.render(<DashboardComponent router ={r} />,app);

			
	},
	login: function() {
		React.render(<LoginComponent router={r} />, app);
	},
	register: function() {
		React.render(<RegisterComponent router={r} />, app);
	}
});

var r = new Router();
Backbone.history.start();

React.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);