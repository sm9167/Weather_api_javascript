// const weather = new Weather('bangalore', 'karnataka');

// weather.changeLocation('chennai', 'tamil nadu');

//Intialize UI
const ui = new UI();

const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
//get weather when on dom load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);

    storage.setLocationData(city, state);
    //get and display weather
    getWeather();

    //Close modal
    $('#locModal').modal('hide');
    
})

function getWeather(){
    weather.getWeather().then(results => {
        console.log(results);
        ui.paint(results);
    })
    .catch(err => console.log(err))
}


