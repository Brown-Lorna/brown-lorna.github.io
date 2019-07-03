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


    
//     var d = new Date();
//  document.getElementById("dayofweek").innerHTML = (days[d.getDay()]);
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// document.getElementById("dayofweek").innerHTML = (days[d.getDay()]);
//    
// }


// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// myH4.textContent = (days[d.getDay(forecastStuff.list[i].dt_txt)]);  


                // var d = new Date();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// document.getElementById("curdate").innerHTML = (days[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear());

// var d = new Date();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// document.getElementById("dayofweek").innerHTML = (days[d.getDay()])  

            // Area under construction
            // Still need to get it to pull the right day from the array
            // % of (day number / 8 )

            // j=i++ if j < 6  else J-7
            // for (var i = 0; i < 6; i++) {
            //     var d = getDay(forecastStuff.list[i].dt_txt.includes("18:00:00"));

            // }
            // var dayofweek = new array(5);

            // );
            // var d = forecastStuff.list[i].dt_txt;includes("18:00:00")
            // var k = d.getDay();
            // var x = weekday;

            // if (k < 7)
            // x = k;
            // else {
            //     x = k-7;
            // }

 
            // Placeholder during construction
            // var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            // dayofweek[i] = (days[d.getDay(forecastStuff.list[i].dt_txt)]);