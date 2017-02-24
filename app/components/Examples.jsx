var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//   render: function(){
//       return (
//         <div>
//           <h4>Example Component</h4>
//         </div>
//       );
//   }
// });

var Examples = (props) => {
  return (
    <div>
      <h3 className="text-centered">Example Component!</h3> {/*text-centered will foundation make text centralized*/}
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <ol>
        <li>
          <Link to="/?location=Hanoi">Hanoi, VN</Link>
        </li>
        <li>
          <Link to="/?location=Saigon">Saigon, VN</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
