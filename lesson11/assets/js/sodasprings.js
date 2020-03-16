let cityName = "Soda Springs";
let apiCity = "5607916";
// tried using google maps, but slowed things down A LOT
// let mapurl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46943.91300976227!2d-111.6238773181053!3d42.661470608918485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8755968bb0047ae5%3A0x9d3970a1a6df8e12!2sSoda%20Springs%2C%20ID%2083276!5e0!3m2!1sen!2sus!4v1584327830893!5m2!1sen!2sus";

getCurrentStats(`https://api.openweathermap.org/data/2.5/weather?id=${apiCity}&units=imperial&APPID=${apiKey}`);
getFiveDayForecast(`https://api.openweathermap.org/data/2.5/forecast?id=${apiCity}&units=imperial&APPID=${apiKey}`);
townEvents(cityName);
