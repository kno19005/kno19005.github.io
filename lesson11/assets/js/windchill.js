//
// "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and 
// wind speeds above 4.8 kilometers per hour (3.0 mph)."
//

function getWindChill(){
    let temp = parseInt(document.getElementById("temperature").innerText);
    let windspeed = parseInt(document.getElementById("windspeed").innerText);

    if (windspeed >= 3 && temp <=50) {
        let mathstuff = 35.74 + (0.6215*temp) - (35.75*(windspeed**0.16)) + (0.4275*temp*(windspeed**0.16));
        document.getElementById("windchill").innerText = mathstuff.toFixed(0);
    } else {
       document.getElementById("windchill").innerText = "N/A" 
    }
}


/*
    Openweather API
*/
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=5419d5359d910bc3d1b911b5cef37344";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('temperature').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('humidty').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = jsObject.wind.speed.toFixed(1);

    getWindChill(); // had issue with the timing, so had to wrap windchill into functiona nd control when it was called
  });

const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=5419d5359d910bc3d1b911b5cef37344";

fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {

    let dayz = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let dayNo = 1;
    for (let day of jsObject.list) {
        if (day.dt_txt.includes("18:00:00")) {
            let date = new Date(day.dt_txt);

            let dayStr = "day" + dayNo;
            const loadimage = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
            document.getElementById(dayStr).textContent = dayz[date.getDay()];
            document.getElementById(`${dayStr}_temp`).textContent = day.main.temp.toFixed(0);
            document.getElementById(`${dayStr}_image`).setAttribute('src', loadimage); 
            document.getElementById(`${dayStr}_image`).setAttribute('alt', day.weather[0].description);
            dayNo++;
        }
    }

    });

