let cityName = "Fish Haven";
let apiCity = "5585010";
let mapurl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11852.955857719517!2d-111.4048466046934!3d42.038055855660446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875415e9bdab006f%3A0xc1864ed86dd2b0e4!2sFish%20Haven%2C%20ID%2083287!5e0!3m2!1sen!2sus!4v1584329783406!5m2!1sen!2sus";

getCurrentStats(`https://api.openweathermap.org/data/2.5/weather?id=${apiCity}&units=imperial&APPID=${apiKey}`);
getFiveDayForecast(`https://api.openweathermap.org/data/2.5/forecast?id=${apiCity}&units=imperial&APPID=${apiKey}`);
townEvents(cityName);
