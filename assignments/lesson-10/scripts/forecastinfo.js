var weatherObj2 = new XMLHttpRequest();
weatherObj2.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=ff61a8123e1362057ad25e88cd4cfb95', true);
weatherObj2.send();

weatherObj2.onload = function() {
    var forecastObj = JSON.parse(weatherObj2.responseText);
    console.log(forecastObj);

    showForecast(forecastObj);
}

function getDayofWeek(daynum) {
    var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var dayofweek = days[daynum];
    return dayofweek;
}


function showForecast(jsonObj) {
    var forecastStuff = jsonObj;

    var d = new Date();
    var daynum = d.getDay();

    for (var i = 0; i < forecastStuff.list.length; i++) {
        if (forecastStuff.list[i].dt_txt.includes("18:00:00")) {
           
            var myDiv = document.createElement("div");
            var myH4 = document.createElement("h4");
            var myImg = document.createElement("img");
            var myH5 = document.createElement("h5");
            
            if (daynum == 7) {
                daynum = 0;
            }
            
            var dayName = getDayofWeek(daynum);
            daynum++;

            myH4.textContent = dayName;
            myImg.setAttribute('src', "http://openweathermap.org/img/wn/" + forecastStuff.list[i].weather[0].icon + ".png");
            myImg.setAttribute('alt', 'icon for ' + forecastStuff.list[i].weather.description + 'weather');
            myH5.textContent = (forecastStuff.list[i].main.temp + " \xB0" + "F");
            myDiv.className = "w3-container";

            myDiv.appendChild(myH4);
            myDiv.appendChild(myImg);
            myDiv.appendChild(myH5);
    
            document.getElementById("fiveday").appendChild(myDiv);
        }
    }

}