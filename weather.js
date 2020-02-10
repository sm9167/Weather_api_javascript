class Weather {
    constructor(city, state) {
        this.api = 'd28b75b44a305f2e63d5d997739e8c9e';
        this.city = city;
        this.state = state;

    }

    // fetch weather from api
    async getWeather() {
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.api}&query=${this.city},${this.state}`)
        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}