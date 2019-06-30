var weatherObj = new XMLHttpRequest();
weatherObj.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=ff61a8123e1362057ad25e88cd4cfb95', true);
weatherObj.send();

weatherObj.onload = function() {
    var forecastObj = JSON.parse(weatherObj.responseText);
    console.log(forecastObj);

    document.getElementById('dayofweek').innerHTML = forecastObj.list[0].main.temp;
//     var d = new Date();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// document.getElementById("dayofweek").innerHTML = (days[d.getDay()]);
    document.getElementById('day-temp').innerHTML = forecastObj.list[0].main.temp;
}


{/* <div class="fiveday">
            <h3 id="forecast">5 Day Forecast</h3>
            <div class="fiveday">
            <div class="w3-container">
                <h4 id="dayofweek">Wed</h4>
                <img src="images/small-sunny-period-icon.jpg" alt="partly cloudy day icon">
                <img id="day-icon">
                <h5><span id="day-temp">67</span>&#176;F</h5> */}



                // var d = new Date();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// document.getElementById("curdate").innerHTML = (days[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear());

// var d = new Date();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// document.getElementById("dayofweek").innerHTML = (days[d.getDay()]);