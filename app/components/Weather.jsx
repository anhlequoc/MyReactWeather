var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },
  handleSearch: function(location){
    var that = this;
    this.setState({isLoading: true});

    //console.log(openWeatherMap.getTemp(location));
    openWeatherMap.getTemp(location).then(function(temp){ //xem file example-promise.js
      that.setState({ //nếu gọi this.State thì sẽ không tìm được
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage){
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function(){
    //hoặc có thể define theo ES6 như line 20

    var {isLoading, temp, location} = this.state; //ES6
    console.log(this.state);
    function renderMessage(){
      if (isLoading){
        return <h3 className="text-center">Fetching weather data...</h3>;
      } else if(temp && location){
        return (<WeatherMessage location={location} temp={temp}/>);
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;

/*
  - getInitialState: thay bằng isLoading: false,
  - khi loading -> isLoading: true
*/
