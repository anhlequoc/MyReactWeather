var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <Nav></Nav>
//         <h3>Main Component</h3>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>
      <Nav></Nav>
      <h3>Main Component</h3>
      {props.children} {/*bỏ this đi*/}
    </div>
  );
};

module.exports = Main;
