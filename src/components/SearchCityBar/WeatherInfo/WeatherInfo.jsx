/* eslint-disable react/prop-types */
function WeatherInfo({ cityData }) {
  return (
    <div className="space-y-5 p-10 bg-white rounded-md shadow flex flex-col opacity-80">
      <h1 className=" text-3xl font-sans font-bold text-slate-800 text-center">
        {cityData.name}
      </h1>
      <div className=" flex items-center justify-center">
        <img
          className="w-20 h-20"
          src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`}
        />
        <p className=" text-4xl text-slate-800 font-bold text-center">
          {Math.round(cityData.main.temp)}°C
        </p>
      </div>

      <p className="text-slate-800 text-center font-sans font-bold ">
        {cityData.weather[0].description.charAt(0).toUpperCase() +
          cityData.weather[0].description.slice(1)}
      </p>

      <div className="flex text-slate-800 items-center font-bold justify-between">
        <p className="flex-1 text-center">
          Temp Max: {Math.round(cityData.main.temp_max)}°C
        </p>
        <p className="flex-1 text-center">
          Temp Min: {Math.round(cityData.main.temp_min)}°C
        </p>
      </div>
      <div className="flex items-center justify-between font-bold text-slate-800">
        <div className="flex-1 text-center">
          <p>Sensação Térmica: {Math.round(cityData.main.feels_like)}°C</p>
        </div>
        <div className="flex-1 text-center">
          <p>Humidade: {cityData.main.humidity}%</p>
        </div>
        <div className="flex-1 text-center">
          <p>Pressão: {cityData.main.grnd_level} hPa</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
