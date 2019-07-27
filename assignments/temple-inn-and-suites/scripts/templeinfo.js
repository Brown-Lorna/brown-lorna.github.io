var section = document.querySelector("#templeInfo");
var requestURL = "../json/temples.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
var tInfo = request.response;
showInfo(tInfo);
}

function showInfo(jsonObj) {
    var templeInfo = jsonObj.temples;

    for (var i = 0; i < templeInfo.length; i++) {
        var myArticle = document.createElement("article");
        var myH3 = document.createElement("h3");
        var myList = document.createElement("ul");

        if(templeInfo[i].name == "Fort Lauderdale Florida") {

            myH3.textContent = templeInfo[i].name + " closures";

            var templeClosures = templeInfo[i].closures;
            for (var j = 0; j < templeClosures.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = templeClosures[j];
                
                myList.appendChild(listItem);
            }

            myArticle.appendChild(myH3);
            myArticle.appendChild(myList);

            section.appendChild(myArticle);
        }
    }
}