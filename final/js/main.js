import Stockology from "./stockology.js"

// Fire up thrusters.. pass in controls to object so object takes over
const Stocks = new Stockology(
    document.querySelector("#symbol"),
    document.querySelector("#btnTicker"),
    document.querySelector("#btnCompany"),
    document.querySelector("#msg"),
    document.querySelector("#resultTable"));
