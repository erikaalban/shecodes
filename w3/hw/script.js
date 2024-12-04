let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  sanfrancisco: {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here

let city = prompt("Enter a city");
city = city.toLocaleLowerCase().trim().replace(/\s+/g, "");

if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let celsiusTemp = Math.round(temperature);
  let fahrenheitTemp = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemp}°C (${fahrenheitTemp}°F) in ${city} with a humidity of 80%.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney`
  );
}
