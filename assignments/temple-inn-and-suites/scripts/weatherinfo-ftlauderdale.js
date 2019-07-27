var weatherObj = new XMLHttpRequest();
weatherObj.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=4155966&units=imperial&appid=ff61a8123e1362057ad25e88cd4cfb95', true);
weatherObj.send();

weatherObj.onload = function() {
    var jsonRespObj = JSON.parse(weatherObj.responseText);
    console.log(jsonRespObj);

    document.getElementById('curr-condition-f').innerHTML = jsonRespObj.weather[0].description;
    document.getElementById('curr-temp-f').innerHTML = jsonRespObj.main.temp;
    document.getElementById('humidity-f').innerHTML = jsonRespObj.main.humidity;
    document.getElementById('wspeed-f').innerHTML = jsonRespObj.wind.speed;  
        calculateWindChill();  
 }

 // calculate windchill at the end so it uses the updated numbers
  // formula for wind chill factor
function calculateWindChill() {
    let t = parseInt(document.getElementById("curr-temp-f").innerHTML);
    let s = parseInt(document.getElementById("wspeed-f").innerHTML);
    let chill = 35.74 + (0.6215 * t) - 35.75 * (Math.pow(s, 0.16)) + 0.4275 * t * (Math.pow(s, 0.16));
    document.getElementById("wchill-f").innerHTML = chill.toFixed(1);
}
// chill = windchill factor in F
// t = average air temperature in F
// s = wind speed in mph