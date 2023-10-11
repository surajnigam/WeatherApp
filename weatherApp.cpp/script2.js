const API_key = "6d83156e4e40ca97d0c6924b832fe00c";
const cityName = document.getElementById('cityName');
const description = document.getElementById('description');
const description2 = document.getElementById('description2');
const temp = document.getElementById('temp');
const temp2 = document.getElementById('temp2');
const temp_min = document.getElementById('temp_min');
const temp_max = document.getElementById('temp_max');
const pressure = document.getElementById('pressure');
const humidity = document.getElementById('humidity');
const speed = document.getElementById('speed');
const speed2 = document.getElementById('speed2');
const deg = document.getElementById('deg');
const gust = document.getElementById('gust');
const cityInput = document.getElementById('city');
const submitBtn = document.getElementById('submit');
const dropdownItems = document.querySelectorAll('.dropdown-item');

const getWeather = (city) => {
  cityName.innerHTML = city;
  //https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=6d83156e4e40ca97d0c6924b832fe00c&units=metric
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      description.innerHTML = data.weather[0].description;
      description2.innerHTML = data.weather[0].description;
      temp.innerHTML = data.main.temp;
      temp2.innerHTML = data.main.temp;
      temp_min.innerHTML = data.main.temp_min;
      temp_max.innerHTML = data.main.temp_max;
      pressure.innerHTML = data.main.pressure;
      humidity.innerHTML = data.main.humidity;
      speed.innerHTML = data.wind.speed;
      speed2.innerHTML = data.wind.speed;
      deg.innerHTML = data.wind.deg;
      gust.innerHTML = data.wind.gust;
    })
    .catch(err => console.error(err));
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const city = cityInput.value;
  getWeather(city);
})

dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    const city = item.textContent;
    getWeather(city);
  });
})

getWeather('Delhi');