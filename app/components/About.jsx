var React = require('react');
var {Link} = require('react-router');
// var About = React.createClass({
//   render: function(){
//     return (
//       <div>
//           <h4>About Component</h4>
//       </div>
//     );
//   }
// });


//có thể dùng stateless component cho About như sau
var About = (props) => {
  return (
    <div>
        <h3 className="text-center page-title">About</h3>
        <p>Simple weather application built by React.JS</p>
        <ul>
          <li>
            <a href="https://github.com/anhlequoc/MyReactWeather">Source</a>
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map API</a>
          </li>
        </ul>
    </div>
  );
};

module.exports = About;
