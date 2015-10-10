var React = require('react');
var App = require('./components/Ap'p);
var css = require('./main.css');

var appNode = document.createElement('div');
appNode.className = 'react-app';
document.body.appendChild(appNode);
React.render(<App />, appNode);