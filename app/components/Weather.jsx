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

    {/* set location và temp về undefined vì nếu không set, giả sử trước đó search được location chuẩn - chạy vào hàm openWeatherMap.getTemp(location) và không có error, location và temp sẽ đc save, sau đó search lỗi tức chạy vào openWeatherMap.getTemp(location)  co error, như vậy vẫn còn location của lần search đúng trước đó*/}
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
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
  componentDidMount: function(){
    var location = this.props.location.query.location; {/*access vào biến location ở query string*/}

    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/'; {/*remove location ở query string trên thanh address của trình duyệt*/}
    }
  },
  componentWillReceiveProps: function(newProps){
    {/*khi props của component update - ví dụ như khi search global > thay đổi query string > thì gọi hàm này*/}
    var location = newProps.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
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
        <h1 className="text-center page-title">Get Weather</h1>
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
