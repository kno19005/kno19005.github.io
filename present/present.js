const jsonURL = 'disney_movies_2016.json';
const xmlURL = 'disney_movies_2016.xml';

//
// First lets do JSON
//
fetch(jsonURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const movies = jsonObject;

        for (let i = 0; i < movies.length; i++) {
            let movie = document.createElement('tr');
            let title = document.createElement('td');
            let release = document.createElement('td');
            let rating = document.createElement('td');

            title.textContent = movies[i].movie_title
            release.textContent = movies[i].release_date;
            rating.textContent = movies[i].mpaa_rating;

            movie.appendChild(title);
            movie.appendChild(release);
            movie.appendChild(rating);

            document.querySelector('tbody.json').appendChild(movie);
        }
    });

//
// Now lets do XML
//
var xmlhttp = new XMLHttpRequest();

// parser = new DOMParser();
// xmlDoc = parser.
// parseFromString(text,"text/xml");