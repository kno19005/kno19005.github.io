const jsonData = "disney_movies_2016.json";
const xmlData =  "disney_movies_2016.xml";
// const xmlData = "disney_movies_2016.xml";
// const jsonURL = 'https://kno19005.github.io/present/disney_movies_2016.json';
// const xmlURL = 'https://kno19005.github.io/present/disney_movies_2016.xml';

//
// First lets do JSON
//
// fetch(jsonURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonObject) {
//         const movies = jsonObject;

//         for (let i = 0; i < movies.length; i++) {
//             let movie = document.createElement('tr');
//             let title = document.createElement('td');
//             let release = document.createElement('td');
//             let rating = document.createElement('td');

//             title.textContent = movies[i].movie_title
//             release.textContent = movies[i].release_date;
//             rating.textContent = movies[i].mpaa_rating;

//             movie.appendChild(title);
//             movie.appendChild(release);
//             movie.appendChild(rating);

//             document.querySelector('tbody.json').appendChild(movie);
//         }
//     });

//
// Now lets do XML
//

// var xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", xmlURL, true);
// xmlhttp.send();
// loadXMLDoc();


// var request = new XMLHttpRequest();
// request.open("GET", xmlURL, false);
// request.send();
// var xml = request.responseXML;
// console.table(xml);
// var users = xml.getElementsByTagName("user");
// for(var i = 0; i < users.length; i++) {
//     var user = users[i];
//     var names = user.getElementsByTagName("name");
//     for(var j = 0; j < names.length; j++) {
//         alert(names[j].childNodes[0].nodeValue);
//     }
// }

loadXMLDoc();
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", xmlData, true);
    xmlhttp.send();
  }
  
function myFunction(xml) {
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    console.table(xml);

    txt = "";
    x = xmlDoc.getElementsByTagName("row");

    for (i = 0; i< x.length; i++) {
      txt += x[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("ccc").innerHTML = "test";
}
// var request = new XMLHttpRequest();
// client.onload = handler;
// request.open("GET", "https://kno19005.github.io/present/disney_movies_2016.xml");
// request.send();

// var xml = request.responseXML;
// console.table(request.responseXML);  // temporary checking for valid response and data parsing

// var request = new XMLHttpRequest();
// request.open("GET", "disney_movies_2016.xml");
// request.send();
// var xml = request.responseXML;
// var users = xml.getElementsByTagName("user");
// for(var i = 0; i < users.length; i++) {
//     var user = users[i];
//     var names = user.getElementsByTagName("name");
//     for(var j = 0; j < names.length; j++) {
//         alert(names[j].childNodes[0].nodeValue);
//     }
// }

// parser = new DOMParser();
// xmlDoc = parser.
// parseFromString(text,"text/xml");