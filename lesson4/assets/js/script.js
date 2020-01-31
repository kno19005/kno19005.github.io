function toggleMenu(){
    document.getElementsByClassName("navbar")[0].classList.toggle("magic");
}

const dayz = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthz = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let today = new Date();
let day = today.getDay();
let dayName = dayz[today.getDay()];
let month = monthz[today.getMonth()];
let year = today.getFullYear();

let name = "Tommy Knorr";
let state = "Utah";
let school = '<a href="https://www.byui.edu/online">BYUI Online Learning</a>';
document.getElementById("footdiv").innerHTML = `&copy;The Elements | ${name} | ${state} | ${school}`;
document.getElementById("lastUpdated").innerHTML = `${dayName}, ${day} ${month} ${year}`