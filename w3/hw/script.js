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

let parisTemp = Math.round(weather.paris.temp);
let parisHum = Math.round(weather.paris.humidity);

let tokyoTemp = Math.round(weather.tokyo.temp);
let tokyoHum = Math.round(weather.tokyo.humidity);

let lisbonTemp = Math.round(weather.lisbon.temp);
let lisbonHum = Math.round(weather.lisbon.humidity);

let sanfranciscoTemp = Math.round(weather.sanfrancisco.temp);
let sanfranciscoHum = Math.round(weather.sanfrancisco.humidity);

let osloTemp = Math.round(weather.oslo.temp);
let osloHum = Math.round(weather.oslo.humidity);

function cityWeather(city) {
  // a for loop that iterates through the weather objects
  // if the city object exists, alert with relevant info
}

let askCity = prompt("Enter a city");
askCity = askCity.toLocaleLowerCase().replace(/\s+/g, "");
if (askCity === "paris") {
  alert(
    `It is currently ${parisTemp}°C in Paris with a humidity of ${parisHum}%`
  );
}
if (askCity === "tokyo") {
  alert(
    `It is currently ${tokyoTemp}°C in Paris with a humidity of ${tokyoHum}%`
  );
}
if (askCity === "lisbon") {
  alert(
    `It is currently ${lisbonTemp}°C in Paris with a humidity of ${lisbonHum}%`
  );
}
if (askCity === "sanfrancisco") {
  alert(
    `It is currently ${sanfranciscoTemp}°C in Paris with a humidity of ${sanfranciscoHum}%`
  );
}
if (askCity === "oslo") {
  alert(
    `It is currently ${osloTemp}°C in Paris with a humidity of ${osloHum}%`
  );
}
if (askCity !== "oslo" || "sanfrancisco" || "lisbon" || "tokyo" || "paris") {
  alert(
    "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
  );
}
