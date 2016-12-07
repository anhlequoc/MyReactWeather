var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d478acb8da5e47bbb20d53e3d42ef9df&units=metric';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);//dùng hàm này để chạy encode chuẩn khi query string có khoảng trắng
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    var result = axios.get(requestURL).then(function(res){ //promise: xem file example-promise.js      
      if (res.data.cod && res.data.mesage){
        throw new Error(res.data.message);
      } else {// case khi không có lỗi lầm gì
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);//error message nếu api trả về error
    });
    //console.log(result);
    return result;
  }
};
