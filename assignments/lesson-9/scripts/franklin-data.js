var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open( 'GET', requestURL, true);
request.send();
request.onload = function() {
    var weatherInfo = JSON.parse(request.responseText);
    console.log(weatherInfo)

    //Franklin
    document.getElementById('Fmotto').innerHTML = weatherInfo.towns["0"].motto;
    document.getElementById('Fyear').innerHTML = weatherInfo.towns["0"].yearFounded;
    document.getElementById('Fpop').innerHTML = weatherInfo.towns["0"].currentPopulation;
    document.getElementById('Frainfall').innerHTML = weatherInfo.towns["0"].averageRainfall;
}