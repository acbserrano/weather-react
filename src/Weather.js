import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(
      `The weather in Lisbon is ${Math.round(response.data.main.temp)} ºC `
    );
  }

  let city_name = "Lisbon";
  let api_key = "f81614abe2395d5dfecd45b9298041de";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return <h2> We df ather app</h2>;
}
