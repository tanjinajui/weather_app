let weather = {
    "apiKey": "20f08c7f3294f17b1d204a8abb648d3c",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather:function (data) {
        const { name } = data;
        const {icon, description } = data.weather[0];
        const { temp, humidity,feels_like} = data.main;
        const { speed } = data.wind;
        console.log(name,icon,feels_like,description,temp,humidity,speed);
        document.querySelector(".city").innerText= `Weather in ${name}`
        document.querySelector(".icon").src= `https://openweathermap.org/img/wn/${icon}.png`
        document.querySelector(".tem").innerText= `Tempature: ${temp}° C`
        document.querySelector(".feels_like").innerText = `Feels Like: ${feels_like}° C`;
        document.querySelector(".clouds").innerText= `Clouds: ${description}`
        document.querySelector(".huminity").innerText= ` Humidity: ${humidity} %`
        document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h`
        // document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+name+"')";
    },
    search:function () {
        this.fetchWeather(document.querySelector(".search-location").value);
    }
};
document.querySelector("#search-btn").addEventListener("click",function () {
    weather.search();
})

document.querySelector("#search-location").addEventListener("keyup", (event) =>{
    if (event.key =="Enter") {
        weather.search();
    }
})
    weather.fetchWeather("dhaka")
