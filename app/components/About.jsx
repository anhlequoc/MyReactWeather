var React = require('react');

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
        <h4>About Component</h4>
    </div>
  );
};


module.exports = About;
