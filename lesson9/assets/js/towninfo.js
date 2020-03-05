const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        // we are only dealing with 3 specific towns, but JSON has additional
        // this is the set were are dealing with.
        for (let town of towns){
            // only work with town thats that exists in townset
            if (['Preston', 'Soda Springs', 'Fish Haven'].includes(town.name)) {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let motto = document.createElement('p');
                let founded = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let image = document.createElement('img');

                h2.setAttribute('class','townname');
                motto.setAttribute('class', 'townmotto');
                founded.setAttribute('class', 'towndetails');
                population.setAttribute('class', 'towndetails');
                rainfall.setAttribute('class', 'towndetails');
                rainfall.setAttribute('id', 'rainfall');
                image.setAttribute('class', 'townimage');

                h2.textContent = town.name;
                motto.textContent = town.motto;
                founded.textContent = "Year Founded: " + town.yearFounded;
                population.textContent = "Population: " + town.currentPopulation;
                rainfall.textContent = "Annual Rainfall: " + town.averageRainfall;

                image.setAttribute('src', "./assets/images/" + town.photo);            
                image.setAttribute('alt', "picture of: " + h2.textContent);

                card.appendChild(h2);
                card.appendChild(motto);
                card.appendChild(founded);
                card.appendChild(population);
                card.appendChild(rainfall);
                card.appendChild(image);

                document.querySelector('div.towninfo').appendChild(card);
            }
        }
    });


