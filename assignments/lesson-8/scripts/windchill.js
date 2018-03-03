/* Input: temperature and wind speed
 * Processing: calculate wind chill using user input. Formula:
 * f = 35.74 + 0.6215 t - 35.75 s^0.16 + 0.4275 t s^0.16
 * Output: Wind chill
 */

var tempF = 65;
var speed = 25;
var s = Math.pow(speed, 0.16);
var windChill = 35.74 + 0.6215 * tempF - 35.75 * s + 0.4275 * tempF * s;
var output= windChill.toFixed(2)
document.getElementById("windchill").innerHTML = output;
