import DayWeather from "./DayWeather";

/* eslint-disable react/prop-types */
function WeatherInfo5Days({ city5Data }) {
  let dailyForecast = {};

  for (let forecast of city5Data.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }
  const next5days = Object.values(dailyForecast).slice(0, 5);
  console.log("5 days", next5days);

  return (
    <div className=" p-10 bg-white flex flex-col space-y-6 rounded-md opacity-80">
      <h1 className=" text-3xl font-sans font-bold text-slate-800 text-center ">
        Previsões para os próximos 5 dias
      </h1>
      <div className=" flex flex-wrap gap-5 justify-evenly">
        {next5days.map((item, index) => (
          <div className="py-3 bg-slate-200 shadow-md rounded-md" key={index}>
            <DayWeather item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInfo5Days;
