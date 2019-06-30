// Final code created using the instructions for the activity
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5061036&units=imperial&appid=ff61a8123e1362057ad25e88cd4cfb95', true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    document.getElementById('curr-city').innerHTML = weatherData.name;
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;

    console.log(weatherData);
}

// First code created when watching Sister Campbell's video
// var weatherObj = new XMLHttpRequest();
// weatherObj.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5061036&units=imperial&appid=ff61a8123e1362057ad25e88cd4cfb95', true);
// weatherObj.send();

// weatherObj.onload = function() {
//     var jsonRespObj = JSON.parse(weatherObj.responseText);
//     console.log(jsonRespObj);

//     document.getElementById('curr-city').innerHTML = jsonRespObj.name;
//     document.getElementById('current-temp').innerHTML = jsonRespObj.main.temp;
// }