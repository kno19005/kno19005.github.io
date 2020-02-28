/*

JSON loading example

*/

const jsonData = "./data/disney_movies_2016.json";

fetch(jsonData)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const movies = jsonObject;
        for (let i = 0; i < movies.length; i++) {
            let movie = document.createElement('tr');
            let title = document.createElement('td');
            let release = document.createElement('td');
            let rating = document.createElement('td');
            let gross = document.createElement('td');

            title.textContent = movies[i].title;
            release.textContent = movies[i].release_date;
            rating.textContent = movies[i].rating;
            gross.textContent = "$" + movies[i].adjusted_gross.toLocaleString();

            movie.appendChild(title);
            movie.appendChild(release);
            movie.appendChild(rating);
            movie.appendChild(gross);

            document.querySelector('tbody.json').appendChild(movie);
        }
    });
