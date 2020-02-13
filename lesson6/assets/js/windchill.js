
//
// "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and 
// wind speeds above 4.8 kilometers per hour (3.0 mph)."
//
let temp = parseInt(document.getElementById("temperature").innerText);
let windspeed = parseInt(document.getElementById("windspeed").innerText);
if(temp <= 50 && windspeed >= 3) {
    let mathstuff = 35.74 + (0.6215*temp) - (35.75*(windspeed**0.16)) + (0.4275*temp*(windspeed**0.16));
    document.getElementById("windchill").innerText = mathstuff.toFixed(2);
} else {
   document.getElementById("windchill").innerText = "N/A" 
}