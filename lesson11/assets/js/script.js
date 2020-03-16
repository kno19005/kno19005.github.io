const apiKey = "5419d5359d910bc3d1b911b5cef37344";

const dayz = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthz = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let today = new Date();
let day = today.getDate();
let dayName = dayz[today.getDay()];
let month = monthz[today.getMonth()];
let year = today.getFullYear();

let name = "Tommy Knorr";
let state = "Utah";
let school = '<a href="https://www.byui.edu/online">BYUI Online Learning</a>';
document.getElementById("footdiv").innerHTML = `&copy;The Elements | Attribution | ${name}`;
document.getElementById("currentDate").innerHTML = `${dayName}, ${day} ${month} ${year}`

// Toggle menu in small
function toggleMenu() {
    document.getElementsByClassName("navbar")[0].classList.toggle("magic");
}

// Date check for message
if (today.getDay() == 5) document.getElementById("partytime").style.display = "block";

// Lets load some fonts!
WebFont.load({ google: { families: ['Montserrat', 'Martel'] } });



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

function getCurrentStats(apiURL){
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {

        document.getElementById('currently').textContent = jsObject.weather[0].description;
        document.getElementById('temperature').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidty').textContent = jsObject.main.humidity;
        document.getElementById('windspeed').textContent = jsObject.wind.speed.toFixed(1);
        getWindChill(); 
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

const townInfoURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
function townInfo(){

    fetch(townInfoURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            const towns = jsonObject['towns'];
            // we are only dealing with 3 specific towns, but JSON has additional
            // this is the set were are dealing with.
            for (let town of towns){
                // only work with town thats that exists in townset
                if (['Preston', 'Soda Springs', 'Fish Haven'].includes(town.name)) {
                    let card = document.createElement('section');
                    let childdiv = document.createElement('div'); // need this guy for switching image around
                    let h2 = document.createElement('h2');
                    let motto = document.createElement('p');
                    let founded = document.createElement('p');
                    let population = document.createElement('p');
                    let rainfall = document.createElement('p');
                    let image = document.createElement('img');

                    // I know this is overkill.. wanted to see if I could set classes via Javascript
                    card.setAttribute('class', 'townsection');
                    h2.setAttribute('class','townname');
                    motto.setAttribute('class', 'townmotto');
                    founded.setAttribute('class', 'towndetails');
                    population.setAttribute('class', 'towndetails');
                    rainfall.setAttribute('class', 'towndetails');
                    image.setAttribute('class', 'townimage');

                    h2.textContent = town.name;
                    motto.textContent = town.motto;
                    founded.textContent = "Year Founded: " + town.yearFounded;
                    population.textContent = "Population: " + town.currentPopulation;
                    rainfall.textContent = "Annual Rainfall: " + town.averageRainfall;

                    image.setAttribute('src', "./assets/images/" + town.photo);            
                    image.setAttribute('alt', "picture of: " + h2.textContent);

                    childdiv.appendChild(h2);
                    childdiv.appendChild(motto);
                    childdiv.appendChild(founded);
                    childdiv.appendChild(population);
                    childdiv.appendChild(rainfall);
                    card.appendChild(childdiv);
                    card.appendChild(image);

                    document.querySelector('div.towninfo').appendChild(card);
                }
            }
        });
}

// Get events for specific town - die Stadt = The Town
function townEvents(dieStadt) {
    fetch(townInfoURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            const towns = jsonObject['towns'];

            // we only want specific town to get events
            let town = towns.find(town => town.name === dieStadt);
            let eventlist = document.createElement('ul');
            for (var event of town.events) {
                let item = document.createElement('li');
                item.textContent = event;
                eventlist.appendChild(item);
            }
            document.querySelector('div.townevents').appendChild(eventlist);
        });
}