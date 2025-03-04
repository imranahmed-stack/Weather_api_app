import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState("");
  const currentDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;



  const fetchData = async () => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bcda10ba323e88e96cb486015a104d1d&units=metric`
    );
    const res = await data.json();
    console.log(res);
    setWeatherData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };
  return (
    <div className="App">
      <h2 className="text"></h2>
      <div className="container">
        <h1 className="container_date">{formattedDate}</h1>
        <div className="weather_data">
          <h2 className="container_city">
            {weatherData ? weatherData.name : ""}
          </h2>
          <br />

          <img
            src="./sunreal.png"
            alt="sun"
            className="container_img"
            width="160px"
          />
          <h2 className="container_degree">
            {weatherData ? weatherData.main.temp : ""}
          </h2>
          <h2 className="country_per">
            {weatherData ? weatherData.weather[0].main : ""}
          </h2>
          <form className="form">
            <input
              type="text"
              className="input"
              placeholder="enter city name"
              onChange={handleInputChange}
            />
            <button type="submit" onClick={handleSubmit} className="space">
              Get
            </button>
          </form>
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
