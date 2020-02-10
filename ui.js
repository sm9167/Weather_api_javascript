class UI {
    constructor(){
        this.locationCity = document.getElementById('w-location-city');
        this.locationState = document.getElementById('w-location-state');
        this.desc = document.getElementById('w-desc');
        this.icon = document.getElementById('w-icon');
        this.feelslike =  document.getElementById('w-feels-like');
        this.humdity =  document.getElementById('w-humidity');
        this.wind =  document.getElementById('w-wind');
        this.string = document.getElementById('w-string');
    }

    paint(weather){
        this.locationCity.textContent = weather.location.name;
        this.locationState.textContent = weather.location.region;
        this.desc.textContent = weather.current.weather_descriptions[0];
      //  this.string.textContent = 
        this.icon.setAttribute('src', weather.current.weather_icons[0]); 
        this.humdity.textContent = ' Relative humdity: ' + weather.current.humidity;
        this.feelslike.textContent = `Real Feel : ${weather.current.feelslike}`
        this.wind.textContent = `Wind: ${weather.current.wind_speed}`
        this.string.textContent = weather.current.temperature + 'C';
    }
}