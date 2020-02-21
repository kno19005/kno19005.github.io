const dayz = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthz = ["January","February","March","April","May","June","July","August","September","October","November","December"];

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
function toggleMenu(){
    document.getElementsByClassName("navbar")[0].classList.toggle("magic");
}

// Date check for message
if (today.getDay() == 5) document.getElementById("partytime").style.display = "block";

// Lets load some fonts!
WebFont.load({ google: { families: ['Montserrat', 'Martel'] } });




