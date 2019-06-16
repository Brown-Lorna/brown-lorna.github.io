// formula for wind chill factor
let t = parseInt(document.getElementById("temperature").innerHTML);
let s = parseInt(document.getElementById("wspeed").innerHTML);
let chill = 35.74 + (0.6215 * t) - 35.75 * (Math.pow(s, 0.16)) + 0.4275 * t * (Math.pow(s, 0.16));
document.getElementById("output").innerHTML = chill.toFixed(1);
// chill = windchill factor in F
// t = average air temperature in F
// s = wind speed in mph