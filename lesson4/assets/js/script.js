function toggleMenu(){
    document.getElementsByClassName("navbar")[0].classList.toggle("magic");
}

var today = new Date();
var year = "&copy;" + today.getFullYear();
let name = "Tommy Knorr";
let state = "Utah";
let school = '<a href="https://www.byui.edu/online">BYUI Online Learning</a>';
document.getElementById("footdiv").innerHTML = `${year} | ${name} | ${state} | ${school}`;
document.getElementById("lastUpdated").innerHTML = "Last Updated: " + document.lastModified;