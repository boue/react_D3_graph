var React = require('react');
var d3    = require('d3');

var App = React.createClass({
  render: function(){
    return <h1>Hello, World!</h1>
  }

  componentWillMount: function(){
    this.randomizeData();
  },

  randomizeData: function(){
    var randomData = [];
    d3.range(settings.numDataPoints).forEach(function(){
      var newNumber1 = Math.floor(Math.random() * settings.maxRange());
      var newNumber2 = Math.floor(Math.random() * settings.maxRange());
      randomData.push([newNumber1, newNumber2]);
    });
    this.setState({data: randomData});
  }
});



module.exports = App;