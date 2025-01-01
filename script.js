let weather = {
    paris: {
      temp: 19.7,
      humidity: 80,
    },
    tokyo: {
      temp: 17.3,
      humidity: 50,
    },
    lisbon: {
      temp: 30.2,
      humidity: 20,
    },
    sanFrancisco: {
      temp: 20.9,
      humidity: 100,
    },
    oslo: {
      temp: -5,
      humidity: 20,
    },
  };
  weather.paris.temp = Math.round(weather.paris.temp);
  weather.tokyo.temp = Math.round(weather.tokyo.temp);
  weather.lisbon.temp = Math.round(weather.lisbon.temp);
  weather.sanFrancisco.temp = Math.round(weather.sanFrancisco.temp);
  weather.oslo.temp = Math.round(weather.oslo.temp);
  
  let city = prompt("Enter your city!");
  
  if (city === "Paris" || city === "paris") {
    alert(
      `It is currently ${weather.paris.temp}°C in ${city} with a humidty of ${weather.paris.humidity}%.`
    );
  } else if (city === "Tokyo" || city === "tokyo") {
    alert(
      `It is currently ${weather.tokyo.temp}°C in ${city} with a humidty of ${weather.tokyo.humidity}%.`
    );
  } else if (city === "Lisbon" || city === "lisbon") {
    alert(
      `It is currently ${weather.lisbon.temp}°C in ${city} with a humidty of ${weather.lisbon.humidity}%.`
    );
  } else if (city === "San Francisco" || city === "san francisco") {
    alert(
      `It is currently ${weather.sanFrancisco.temp}°C in ${city} with a humidty of ${weather.sanFrancisco.humidity}%.`
    );
  } else if (city === "Oslo" || city === "oslo") {
    alert(
      `It is currently ${weather.oslo.temp}°C in ${city} with a humidty of ${weather.oslo.humidity}%.`
    );
  } else {
    alert(
      `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
    );
  }
  
  function searchCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${searchInput.value}`;
  }
  
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", searchCity);
  
  let now = new Date();
  let currentDateElement = document.querySelector("#current-date");
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  
  currentDateElement.innerHTML = `${day} ${hours}:${minutes} moderate rain. </br> Humidity: 87%, Wind: 7.2km/h`;
  
  function displayWeather(response) {
    let temperature = Math.round(response.data.temperature.current);
    console.log(response.data.temperature.current);
    let city = response.data.city;
  
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${city}`;
  
    let p = document.querySelector("#city-temp");
    p.innerHTML = `☁️${response.data.temperature.current}°C`;
  }
  
  let apiKey = "4c0ff2fd9eo01d24aa2b0f71ef013t53";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=london&key=4c0ff2fd9eo01d24aa2b0f71ef013t53&units=metric";
  axios.get(apiUrl).then(displayWeather);
  