import {
    readSymbol,
    writeSymbol
} from './ls.js';


export default class Stockology {

    constructor(searchInput, buttonTicker, buttonCompany, outputMessage, resultTable) {

        this.searchInput = searchInput;
        this.outputMessage = outputMessage;
        this.resultTable = resultTable;

        // assign our buttons to events
        buttonTicker.addEventListener('click', () => {
            this.getBySymbol();
        });
        buttonCompany.addEventListener('click', () => {
            this.searchByName();
        });
    }

    searchByName() {
        if (!this.checkInput())
            return;

        this.queryFMP(this.searchInput.value);
        this.searchInput.value = "";
    }

    getBySymbol() {
        if (!this.checkInput())
            return;

        let symbol = this.searchInput.value;
        // check to see if it is local stored
        let data = readSymbol(symbol);
        if (Object.keys(data).length > 0) {
            console.log("Retrieved from Local Storage: " + symbol);
            this.displaySymbolResults(symbol, data)
        } else {
            this.queryAlphaWave(this.searchInput.value);
        }
        this.searchInput.value = "";
    }

    checkInput() {
        this.resultTable.innerHTML = "";
        this.outputMessage.innerHTML = "";
        if (!this.searchInput.value) {
            this.outputMessage.innerHTML = "Please Enter Data to Search.";
            this.searchInput.focus();
            return false;
        }
        return true;
    }

    async queryFMP(company) {
        console.log("Searching: " + company);
        const results = await fetch('https://financialmodelingprep.com/api/v3/search?query=' + company +
                '&limit=10&exchange=NASDAQ&apikey=0e67f354a63fadf8a7b02ffddcf1ed0a')
            .then(response => response.json())
            .then(json => {
                //this.displaySymbolResults(json);
                return json;
            });
        this.displayCompanyResults(results);
    }

    async queryAlphaWave(symbol) {
        let results = await fetch("https://financial-statements.p.rapidapi.com/api/v1/resources/income-statement?ticker=" + symbol, {
                method: "GET",
                "headers": {
                    "x-rapidapi-key": "ae9d35d3e8mshe4ecb9ca35cc847p1aceb7jsn53c4b4a091b5",
                    "x-rapidapi-host": "financial-statements.p.rapidapi.com"
                }
            })
            .then(response =>
                response.json()
            )
            .catch(err => {
                console.error(err);
            });

        console.log("Committed to Local Storage: " + symbol);
        writeSymbol(symbol, results);
        this.displaySymbolResults(symbol, results);
    }

    displaySymbolResults(symbol, data) {

        if (data == null || Object.keys(data).length < 1) {
            this.outputMessage.innerHTML = "No matching Company found.";
            return;
        }

        Object.keys(data).forEach(key => {
            //            console.log("Key: " + key + "-->");

            let group = document.createElement('div');

            let tbl = document.createElement('table');
            let tblhead = document.createElement('thead');
            let tbltr = document.createElement('tr');
            let tblh = document.createElement('th');
            let tblbody = document.createElement('tbody');

            tblh.colSpan = 2;
            tblh.innerHTML = symbol + " - " + key;

            tbltr.appendChild(tblh);
            tblhead.appendChild(tblh);
            tbl.appendChild(tblhead);

            Object.entries(data[key]).forEach(
                ([key, value]) => {
                    let ltr = document.createElement('tr');
                    let ltd = document.createElement('td');
                    ltr.className = "tdleft";
                    ltd.innerHTML = key;

                    let ltd2 = document.createElement('td');
                    ltd2.className = "tdright";
                    ltd2.innerHTML = Number(value).toLocaleString();
                    //                    ltd2.innerHTML = Number(value).toLocaleString().toFixed(2);

                    ltr.appendChild(ltd);
                    ltr.appendChild(ltd2);
                    tblbody.appendChild(ltr);
                }
            );

            tbl.appendChild(tblbody);
            group.appendChild(tbl);

            this.resultTable.appendChild(group);
        });

    }

    displayCompanyResults(data) {
        if (Object.keys(data).length < 1) {
            this.outputMessage.innerHTML = "No matching Company found.";
            return;
        }

        let tbl = document.createElement('table');
        let tblhead = document.createElement('thead');
        let tbltr = document.createElement('tr');
        let tblh = document.createElement('th');
        let tblbody = document.createElement('tbody');

        tblh.colSpan = 2;
        tblh.innerHTML = "Company Search";

        tbltr.appendChild(tblh);
        tblhead.appendChild(tblh);
        tbl.appendChild(tblhead);

        // Populate table body with data
        for (let cnt = 0; cnt < data.length; cnt++) {
            let ltr = document.createElement('tr');
            let ltd = document.createElement('td');
            ltr.className = "tdleft";

            let linput = document.createElement('input');
            linput.type = "button";
            linput.className = "button_company";
            linput.value = data[cnt].symbol;
            linput.addEventListener('click', () => {
                this.queryAlphaWave(data[cnt].symbol);
            });

            let ltd2 = document.createElement('td');
            ltd2.className = "tdright";
            ltd2.innerHTML = data[cnt].name;

            ltd.appendChild(linput);
            ltr.appendChild(ltd);
            ltr.appendChild(ltd2);
            tblbody.appendChild(ltr);
        }
        tbl.appendChild(tblbody);

        this.resultTable.appendChild(tbl);
    }

}