var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },
  handleSearch: function(location){
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    //console.log(openWeatherMap.getTemp(location));
    openWeatherMap.getTemp(location).then(function(temp){ //xem file example-promise.js
      that.setState({ //nếu gọi this.State thì sẽ không tìm được
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(e){
      //console.log(e.message);
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function(){
    //hoặc có thể define theo ES6 như dưới
    var {isLoading, temp, location, errorMessage} = this.state; //ES6
    console.log(this.state);
    function renderMessage(){
      if (isLoading){
        return <h3 className="text-center">Fetching weather data...</h3>;
      } else if(temp && location){
        return (<WeatherMessage location={location} temp={temp}/>);
      }
    }

    function renderError(){
      if (typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;

/*
  - getInitialState: thay bằng isLoading: false,
  - khi loading -> isLoading: true
*/
