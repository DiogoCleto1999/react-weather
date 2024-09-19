import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import axios from "axios";
import WeatherInfo from "./components/SearchCityBar/WeatherInfo/WeatherInfo";
import WeatherInfo5Days from "./components/SearchCityBar/WeatherInfo5Days/WeatherInfo5Days";

function App() {
  const [city, setCity] = useState(null);
  const [city5, setCity5] = useState(null);
  const inputRef = useRef();

  async function searchCity() {
    const cityName = inputRef.current.value;
    const key = "6a805fcea35a969567163b4977932404";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&lang=pt&units=metric`;
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}&lang=pt&units=metric`;
    const apiInfo = await axios.get(url);
    const api5Info = await axios.get(url5days);
    console.log(apiInfo.data);
    console.log(api5Info.data);
    setCity(apiInfo.data);
    setCity5(api5Info.data);
  }

  return (
    <div className="w-screen h-screen space-y-2  flex flex-col ">
      <h1
        className="text-6xl text-white p-4 mt-10 rounded-md font-sans font-bold text-center"
        style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)" }}
      >
        Previsão do Tempo
      </h1>
      <div className="flex space-x-2 justify-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search City"
          className="bg-white p-1 text-black rounded-md shadow"
        ></input>
        <button
          onClick={searchCity}
          className="bg-orange-600 p-1 rounded-md px-4"
        >
          Search
        </button>
      </div>
      <div className="w-full max-w-4xl pt-10 mx-auto">
        {city && <WeatherInfo cityData={city} />}
      </div>
      <div className="w-full max-w-4xl pt-5 mx-auto">
        {city5 && <WeatherInfo5Days city5Data={city5} />}
      </div>
    </div>
  );
}

export default App;
