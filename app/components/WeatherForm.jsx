var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(event) {
    event.preventDefault();
    var location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <h1> Get Weather</h1>
        <form onSubmit = {this.onFormSubmit}>
          <input type="text" placeholder="Enter city name" ref="location"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
