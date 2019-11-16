var nMoment = moment().format('M/D/YYYY');
console.log(nMoment);

$("#search-button").on("click", function (event) {
    event.preventDefault();
    var input = $("#search-term").val().trim();
    console.log(input);
    document.getElementById("city-name").innerHTML = input + " " + nMoment;
    document.getElementById("city-temperature").innerHTML = input + " " + nMoment;

});

