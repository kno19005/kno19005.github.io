const apiKey = "5419d5359d910bc3d1b911b5cef37344";
let cityName = 'Preston';
let apiCity = "5604473";
let mapurl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47365.726282696654!2d-111.91534443779182!3d42.09980531182263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8754f78c7cda6c31%3A0xf1b3b4fc465a4a3f!2sPreston%2C%20ID%2083263!5e0!3m2!1sen!2sus!4v1584318113833!5m2!1sen!2sus";

document.getElementById('gogglemap').setAttribute('src', mapurl);
getCurrentStats(`https://api.openweathermap.org/data/2.5/weather?id=${apiCity}&units=imperial&APPID=${apiKey}`);
getFiveDayForecast(`https://api.openweathermap.org/data/2.5/forecast?id=${apiCity}&units=imperial&APPID=${apiKey}`);
townEvents(cityName);
