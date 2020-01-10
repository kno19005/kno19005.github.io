var today = new Date();
var year = today.getFullYear();
document.getElementById("copyright").innerHTML = "&copy;" + year;
document.getElementById("lastUpdated").innerHTML = "Last Updated: " + document.lastModified;