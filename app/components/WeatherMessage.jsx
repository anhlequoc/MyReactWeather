var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp, location} = this.props; //cấu trúc của ES6
//     return (
//       <h2>It's {temp} in {location}!</h2> //temp và location đc lấy từ line 5
//     );
//   }
// });

var WeatherMessage = (props) => {
  var {temp, location} = props; //cấu trúc của ES6
  return (
    <h3 className="text-center">It's {temp} in {location}!</h3> /* temp và location đc lấy từ line 5 */
  );
};

module.exports = WeatherMessage;
//cach khac
/*
var WeatherMessage = ({temp, location}) => { //đưa dòng 13 lên trên
  return (
    <h2>It's {temp} in {location}!</h2> //temp và location đc lấy từ line 5
  );
};
*/

/*
  - Weather: container component
  - WeatherForm, WeatherMessage: presentation component
  - WeatherForm: handle props to send to Weather
*/
