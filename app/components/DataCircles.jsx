var React = require('react');
var uuid = require('node-uuid');

var DataCircles = React.createClass({
  render: function(){
    //we're rendering a g element, which is like the SVG equivalent to a div
    //Inside of g, we're mapping over the data and rendering a circle for 
    //each one using renderCircles.
    return <g> {this.props.data.map(this.renderCircles) } <g>
  },

  //renderCircles creates an SVG circle element which takes a number of properties.
  renderCircles: function(coords){
    var props = {
      cx: this.props.xScale(coords[0]),
      cy: this.props.yScale(coords[1]),
      r: 2,
      //React's diffing algorithm needs some kind of way to keep track of them as it updates the DOM over and over. 
      //I'm using node-uuid because it's an easy way to create a unique key for each element
      key: uuid.v4()
    };
    
    return (
      <circle {...props}>
      </circle>
    );
  }
});

module.exports = DataCircles;