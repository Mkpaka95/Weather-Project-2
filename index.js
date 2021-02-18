function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  console.log(searchCity.value);
  let h1 = document.querySelector("h1");

  h1.innerHTML = cityInput.value;

  searchCity(cityInput.value);
}

function searchCity(city) {
  let apiKey = "2bc5f2cd163f73cc74189901c43777b2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

let form = document.querySelector("form");
form.addEventListener("submit", search);
formatDate();

function showWeather(response) {
  console.log(response.data);
  let h2 = document.querySelector("h2");
  let temperature = Math.round(response.data.main.temp);
  h2.innerHTML = `It is currently ${temperature}°C in ${response.data.name}`;
}

function retrievePosition(position) {
  let apiKey = "2bc5f2cd163f73cc74189901c43777b2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getPosition);
 
function displayFahrenheitTemperature (event){
  event.preventDefault();
alert("Link clicked")
}
let fahrenheitLink=documnt.querySelector("fahrenheit-link");
form.addEventListener("click", displayFahrenheitTemperature);


