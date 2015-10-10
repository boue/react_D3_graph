var React = require('react');
var d3    = require('d3');
var ScatterPlot = require('./ScatterPlot.jsx');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <h1>React and D3 are best buds</h1>
        <ScatterPlot data={this.state.data} {...settings} />
        <div className="controls">
          <button className={'btn randomize'} onClick={this.randomizeData}>Randomize Data</button>
        </div> 
      </div>
    );
  },

  //will be called before the initial rendering of the component occurs
  //creating 50 random X-Y coordinates with a certain random range using D3's range method
  //Since numDataPoints is set to 50, then array of values from 0 up to 49
  //It's like a for loop but d3 range method works nice
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

var settings = {
  width: 500,
  height: 300,
  padding: 30,
  numDataPoints: 50,
  maxRange: function(){
    return Math.random() * 1000
  }
};

module.exports = App;

