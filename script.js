var nMoment = moment().format('M/D/YYYY');
console.log(nMoment);

var pastCities = [];


$("#search-button").on("click", function (event) {
    event.preventDefault();
    var input = $("#search-term").val().trim();
    pastCities.push(input);
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
        "q=" + input + "&units=imperial&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {
            document.getElementById("city-name").innerHTML = input + " " + nMoment;
            document.getElementById("city-temperature").innerHTML = "Temperature: " + response.main.temp;
            document.getElementById("city-humidity").innerHTML = "Humidity: " + response.main.humidity;
            document.getElementById("city-windspeed").innerHTML = "Wind Speed: " + response.wind.speed;
            fiveDay(input, APIKey);
        });

});

function fiveDay(userInput, key) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=" + key;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {
            console.log(response);
        });

}

