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
        calculateWindChill();  
 }

 // calculate windchill at the end so it uses the updated numbers