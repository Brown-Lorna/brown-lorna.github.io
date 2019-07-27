var weatherObj = new XMLHttpRequest();
weatherObj.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5746545&units=imperial&appid=ff61a8123e1362057ad25e88cd4cfb95', true);
weatherObj.send();

weatherObj.onload = function() {
    var jsonRespObj = JSON.parse(weatherObj.responseText);
    console.log(jsonRespObj);

    document.getElementById('curr-condition-p').innerHTML = jsonRespObj.weather[0].description;
    document.getElementById('curr-temp-p').innerHTML = jsonRespObj.main.temp;
    document.getElementById('humidity-p').innerHTML = jsonRespObj.main.humidity;
    document.getElementById('wspeed-p').innerHTML = jsonRespObj.wind.speed;  
        calculateWindChill();  
 }

 // calculate windchill at the end so it uses the updated numbers
  // formula for wind chill factor
function calculateWindChill() {
    let t = parseInt(document.getElementById("curr-temp-p").innerHTML);
    let s = parseInt(document.getElementById("wspeed-p").innerHTML);
    let chill = 35.74 + (0.6215 * t) - 35.75 * (Math.pow(s, 0.16)) + 0.4275 * t * (Math.pow(s, 0.16));
    document.getElementById("wchill-p").innerHTML = chill.toFixed(1);
}
// chill = windchill factor in F
// t = average air temperature in F
// s = wind speed in mph