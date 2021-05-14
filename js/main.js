function loadListItems() {

    const links = [{
        label: "Week 01",
        url: "week01/index.html"
    },
    {
        label: "Week 02",
        url: "week02/index.html"
    },
    {
        label: "Week 03",
        url: "week03/index.html"
    },
    {
        label: "Week 04",
        url: "week04/index.html"
    }
];

    document.getElementById("listItems").innerHTML = "";
    for (const link in links) {
        document.getElementById("listItems").innerHTML += `<li><a href=${links[link].url}>${links[link].label}</a></li>`
    }
}

var today = new Date();
let school = '<a href="https://www.byui.edu/online">BYUI Online Learning</a>';
document.getElementById("footdiv").innerHTML = `&copy; ${today.getFullYear()} | Tommy Knorr`;
document.getElementById("lastUpdated").innerHTML = "Last Updated: " + document.lastModified;