import { useEffect, useState } from "react";

const WeatherNewComp = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState();

  async function getweatherData() {
    let API_KEY = "fc45a8cd5911475371e262a26b9a0374";
    let response = await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    );

    let result = await response.json();
    console.log(
      "🚀 ~ file: weatherNewComp.jsx:10 ~ getweatherData ~ result:",
      result
    );
    if (result.cod !== "400") {
      setWeatherData(result);
    }
    console.log("Testing the sound ");
  }

  useEffect(() => {
    getweatherData();
  }, [cityName]);
  console.log("City name variable", cityName);
  //   getweatherData();

  function convertToCelcius(temp) {
    let newTemp = temp - 273;
    return Math.floor(newTemp);
  }

  return (
    <>
      <h1>Weather APP:</h1>

      <p>Enter Your city:</p>
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />

      {weatherData && (
        <div style={{ padding: "30px" }}>
          <h3>City Name : {weatherData?.name} </h3>
          <h3>Country : {weatherData?.sys?.country}</h3>
          <h3>
            Description :
            {weatherData.weather && weatherData?.weather[0].description}{" "}
          </h3>
          {weatherData.weather && (
            <img
              src={`${weatherData?.weather[0].icon}.svg`}
              alt="img"
              style={{ width: "80px", height: "80px" }}
            />
          )}
          <h3>
            Temperature : {convertToCelcius(weatherData?.main?.temp)} celcius{" "}
          </h3>
        </div>
      )}
    </>
  );
};

export default WeatherNewComp;
