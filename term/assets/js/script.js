/*

Note - The city id for Riggins, Idaho reported by OpenWeather is incorrect. It reports somewhere back east.
    To address this, I'm using GrangeVille as it is the closests reported station to Riggins.

    Realized this as I noticed the Long,Lat were not for the western US.. 
*/

const apiKey = "5419d5359d910bc3d1b911b5cef37344";
const apiCity = "5594474"; // Grangeville, Idaho
//const apiCity = "4092267"; // BAD CITY ID GIVEN BY OPENWEATHER!!!


// const dayz = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const monthz = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let today = new Date();
// let day = today.getDate();
// let dayName = dayz[today.getDay()];
// let month = monthz[today.getMonth()];
let year = today.getFullYear();

// let name = "Tommy Knorr";
// let state = "Utah";
// let school = '<a href="https://www.byui.edu/online">BYUI Online Learning</a>';
// let openweather = '<a href="https://openweathermap.org/">openweathermap.org</a>';

document.getElementById("copyrightYear").innerHTML = `${year}`

// Lets load some fonts!
WebFont.load({ google: { families: ['Montserrat', 'Martel', 'Ubuntu'] } });


getCurrentStats(`https://api.openweathermap.org/data/2.5/weather?id=${apiCity}&units=imperial&APPID=${apiKey}`);
getFiveDayForecast(`https://api.openweathermap.org/data/2.5/forecast?id=${apiCity}&units=imperial&APPID=${apiKey}`);

// Toggle menu in small
function toggleMenu() {
    document.getElementsByTagName("nav")[0].classList.toggle("hamburgler");
}




// function getWindChill(){
//     let temp = parseInt(document.getElementById("temperature").innerText);
//     let windspeed = parseInt(document.getElementById("windspeed").innerText);

//     if (windspeed >= 3 && temp <=50) {
//         let mathstuff = 35.74 + (0.6215*temp) - (35.75*(windspeed**0.16)) + (0.4275*temp*(windspeed**0.16));
//         document.getElementById("windchill").innerText = mathstuff.toFixed(0);
//     } else {
//        document.getElementById("windchill").innerText = "N/A" 
//     }
// }

function getCurrentStats(apiURL){
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsonObject) => {

        document.getElementById("temperature").textContent = jsonObject.main.temp.toFixed(0);
        document.getElementById("visual").textContent = jsonObject.weather[0].description;
    });
}

function getFiveDayForecast(apiURL){

    fetch(apiURL)
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
}


const townInfoURL = 'guide.json';
function guideInfo(){
    fetch(townInfoURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            for (let guide of jsonObject['guides']){
                let card = document.createElement('section');
                    let childdiv = document.createElement('div');
                    let guideName = document.createElement('h2');
                    let guideEmail = document.createElement('p');
                    let guideYears = document.createElement('p');
                    let guideBio = document.createElement('p');
                    let guidePic = document.createElement('img');

                    card.setAttribute('class', 'guidesection');
                    guideName.setAttribute('class','guidename');
                    guideEmail.setAttribute('class', 'guideemail');

                    guideName.textContent = guide.name;
                    guideEmail.textContent = "email: " + guide.email;
                    guideYears.textContent = guide.years + " Years & " + guide.certlevel + " certified"
                    guideBio.textContent = "Biography: " + guide.biography;

                    guidePic.setAttribute('src', "assets/images/" + guide.photo);            
                    guidePic.setAttribute('alt', "picture of: " + guideName.textContent);


                    childdiv.appendChild(guideName);
                    childdiv.appendChild(guideEmail);
                    childdiv.appendChild(guideYears);
                    childdiv.appendChild(guideBio);
                    card.appendChild(childdiv);
                    card.appendChild(guidePic);

                    document.querySelector('div.guides').appendChild(card);
            }
        });
}
