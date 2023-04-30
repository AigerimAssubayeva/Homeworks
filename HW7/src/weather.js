

// import "./main.css";

// const headerTitle = 'To Do List'; // Set the header title here
// headerTitle.

// const showFinal = document.getElementById("header-weather");

// function data() {
//   // ...rest of the code
// }

// function showData(Weather) {
//   const {main} = Weather;
//   const temp = Math.floor(main.feels_like - 273.15);
//   const icon = Weather.weather[0].icon;

//   // Create the header element dynamically using JavaScript
//   const header = document.createElement('h2');
//   header.innerText = headerTitle;

//   showFinal.innerHTML = '';
//   // Append each element to showFinal container
//   showFinal.appendChild(header);
//   showFinal.insertAdjacentHTML('beforeend', `
//     <img class="weather_icon" src="https://openweathermap.org/img/wn/${icon}@2x.png">
//     <span class="weather_data">${temp} <sup>&#176</sup></span>
//     <span class="weather_city">${Weather.name}</span>
//   `);
// }

// export default showFinal;






import "./main.css"

const showFinal = document.getElementById("header-weather");

function data() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showDefault);
  } else {
    showDefault();
  }

  function showPosition(positions) {
    const lat = positions.coords.latitude;
    const lon = positions.coords.longitude;
    setApi(lat, lon);
  }

  function showDefault() {
    // Use Tbilisi as a default
    const defaultLat = 41.69;
    const defaultLon = 44.83;
    setApi(defaultLat, defaultLon);
  }
}

function setApi(latitude, longitude) {
  const apiKey = "c588a8b97a4688f69cfaae269cfcde39";
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  retrieveData(api);
}

async function retrieveData(api) {
  const apiUrl = await fetch(api);
  const DataApi = await apiUrl.json();
  console.log(DataApi);

  showData(DataApi);
}

function showData(Weather) {
  const {main} = Weather;
  const temp = Math.floor(main.feels_like - 273.15);
  const icon = Weather.weather[0].icon;

  showFinal.innerHTML = `
    <img class="weather_icon" src="https://openweathermap.org/img/wn/${icon}@2x.png">
    <span class="weather_data">${temp} <sup>&#176</sup></span>
    <span class="weather_city">${Weather.name}</span>
  `;
}

export default showFinal