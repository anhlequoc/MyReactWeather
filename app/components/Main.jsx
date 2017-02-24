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
  // console.log(props.children);
  return (
    <div>
      <Nav></Nav>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered"> {/*columns tell foundation that this div is column*/}
          {props.children}
        </div>
      </div>
      {/* <h3>Main Component</h3> */}
      {/* {props.children} {/*bỏ this đi*/}
    </div>
  );
};

module.exports = Main;
