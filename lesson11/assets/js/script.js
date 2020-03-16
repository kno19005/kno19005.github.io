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


// This function is called on page load for Preston, Soda Springs, and Fish Haven
// The town name is passed in to set variables, which in turn are used to load info
function setCurrentPage(pageName){
    const apiKey = "5419d5359d910bc3d1b911b5cef37344";
    let cityName = pageName;
    let apiCity = "";
    let mapurl = "";

    if (pageName == "Preston") {
        apiCity = "5604473";
        mapurl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47365.726282696654!2d-111.91534443779182!3d42.09980531182263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8754f78c7cda6c31%3A0xf1b3b4fc465a4a3f!2sPreston%2C%20ID%2083263!5e0!3m2!1sen!2sus!4v1584318113833!5m2!1sen!2sus";
    } else if (pageName == "Soda Springs") {
        apiCity = "5607916";
        mapurl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46943.91300976227!2d-111.6238773181053!3d42.661470608918485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8755968bb0047ae5%3A0x9d3970a1a6df8e12!2sSoda%20Springs%2C%20ID%2083276!5e0!3m2!1sen!2sus!4v1584327830893!5m2!1sen!2sus";
    } else if (pageName == "Fish Haven") {
        apiCity = "5585010";
        mapurl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11852.955857719517!2d-111.4048466046934!3d42.038055855660446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875415e9bdab006f%3A0xc1864ed86dd2b0e4!2sFish%20Haven%2C%20ID%2083287!5e0!3m2!1sen!2sus!4v1584329783406!5m2!1sen!2sus";
    }
    document.getElementById('gogglemap').setAttribute('src', mapurl);
    getCurrentStats(`https://api.openweathermap.org/data/2.5/weather?id=${apiCity}&units=imperial&APPID=${apiKey}`);
    getFiveDayForecast(`https://api.openweathermap.org/data/2.5/forecast?id=${apiCity}&units=imperial&APPID=${apiKey}`);
    townEvents(cityName);
};

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