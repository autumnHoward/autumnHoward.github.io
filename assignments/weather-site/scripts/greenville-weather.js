var requestURL = 'https://api.wunderground.com/api/c68b3124bacf9ecd/conditions/q/TX/Greenville.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function(){
    var weatherInfo = JSON.parse(request.responseText)
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temperature_string;
    document.getElementById('feelTemp').innerHTML = weatherInfo.current_observation.feelslike_string;
    document.getElementById('icon').innerHTML = weatherInfo.current_observation.icon;
    document.getElementById('weather-icon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('precip').innerHTML = weatherInfo.current_observation.precip_today_string;
    document.getElementById('windspeed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_string;
}