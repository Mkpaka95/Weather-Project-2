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
  let searchCity = document.querySelector("#city-input");
  console.log(searchCity.value);
  let h1 = document.querySelector("h1");

  h1.innerHTML = searchCity.value;
}

let form = document.querySelector("form");
form.addEventListener("submit", search);
formatDate();

function showWeather(response) {
  console.log(response.data);
  let h2 = document.querySelector("current-temperature");
  form.addEventListener("click", showWeather);
  let temperature = Math.round(response.data.main.temp);
  h2.innerHTML = `It is currently ${temperature}°C in ${response.data.name}`;
}

function retrievePosition(position) {
  let apiKey = "2bc5f2cd163f73cc74189901c43777b2";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=New York,us&appid=${apiKey}";
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  axios.get(apiUrl).then(showWeather);
}
navigator.geolocation.getCurrentPosition(retrievePosition);
