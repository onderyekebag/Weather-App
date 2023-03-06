const url = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '16dc6a5dd29dd24a0433a5381ee0f38c';
const txtSearch = document.querySelector("#txtSearch");

const van = document.querySelector(".body");

const setQuery = (e) => {
    if(e.keyCode == '13'){
        if(txtSearch.value==="van"){
            van.classList.add("van");
        }
        getResult(txtSearch.value);
    }
}
const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`;
  //let query = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
   fetch(query)
   .then(weather => {
    return weather.json()
    })
   .then(display)
}
const display = (result) => {
    const city = document.querySelector(".city-name");
    city.innerText = `${result.name} , ${result.sys.country}`;
    const heat = document.querySelector(".heat");
    heat.innerText = `${Math.round(result.main.temp)}°C`;
    const desc = document.querySelector(".desc");
    desc.innerText = result.weather[0].description;
    const minmax = document.querySelector(".minmax");
    minmax.innerText = `En az : ${Math.round(result.main.temp_min)}°C
     En fazla : ${Math.round(result.main.temp_max)}°C`;
}

txtSearch.addEventListener("keypress", setQuery);