var weatherObj = new XMLHttpRequest();
weatherObj.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=ff61a8123e1362057ad25e88cd4cfb95', true);
weatherObj.send();

weatherObj.onload = function() {
    var jsonRespObj = JSON.parse(weatherObj.responseText);
    console.log(jsonRespObj);

    document.getElementById('curr-condition').innerHTML = jsonRespObj.weather[0].description;
    document.getElementById('curr-temp').innerHTML = jsonRespObj.main.temp;
    document.getElementById('humidity').innerHTML = jsonRespObj.main.humidity;
    document.getElementById('wspeed').innerHTML = jsonRespObj.wind.speed;     
 }

// formula for wind chill factor
let t = parseInt(document.getElementById("curr-temp").innerHTML);
let s = parseInt(document.getElementById("wspeed").innerHTML);
let chill = 35.74 + (0.6215 * t) - 35.75 * (Math.pow(s, 0.16)) + 0.4275 * tmp * (Math.pow(s, 0.16));
document.getElementById("wchill").innerHTML = chill.toFixed(1);
// chill = windchill factor in F
// t = average air temperature in F
// s = wind speed in mph


// "curr-condition">Cloudy</span></dd>
//                     <dt>High</dt><dd>&nbsp;<span id="curr-temp">69</span>&#176;F</dd>
//                     <dt>Humidity</dt><dd>&nbsp;<span id="humidity">51</span>&percnt;</dd>
//                     <dt>Wind Speed</dt><dd>&nbsp;<span id="wspeed"