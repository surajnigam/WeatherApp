let API_key = "6d83156e4e40ca97d0c6924b832fe00c";

const getweather = (city) => {
  // Update the search variable with the provided city parameter

  cityName.innerHTML = city;

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
}
// Call the getweather function initially with the default search location
submit.addEventListener('click', (e)=>{
    getweather(city.value)
})


getweather('delhi')