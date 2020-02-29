/*

XML loading example

*/

const xmlData = "./data/disney_movies_2016.xml";

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
    movies = xmlDoc.getElementsByTagName("movie");

    for (i = 0; i< movies.length; i++) {
        // Create HTML elements as variables
        let movie = document.createElement('tr');
        let title = document.createElement('td');
        let release = document.createElement('td');
        let rating = document.createElement('td');
        let gross = document.createElement('td');

        // Assign variables content from XML
        title.textContent = movies[i].getElementsByTagName('title')[0].textContent;
        release.textContent = movies[i].getElementsByTagName('release_date')[0].textContent;
        rating.textContent = movies[i].getElementsByTagName('rating')[0].textContent;
        gross.textContent = movies[i].getElementsByTagName('adjusted_gross')[0].textContent;

        // Append HTML items
        movie.appendChild(title);
        movie.appendChild(release);
        movie.appendChild(rating);
        movie.appendChild(gross);

        document.querySelector('tbody.xml').appendChild(movie);
    }
}
