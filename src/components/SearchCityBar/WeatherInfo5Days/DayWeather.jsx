/* eslint-disable react/prop-types */

function DayWeather({ item }) {
  console.log("item", item);
  function getDayOfWeek(dateString) {
    // Split the date string by '/'

    // Create a Date object
    const date = new Date(dateString);

    // Array of day names
    const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

    // Get the day name
    const dayName = daysOfWeek[date.getDay()];

    return dayName;
  }
  const dayOfWeek = getDayOfWeek(item.dt_txt);
  return (
    <div className=" space-y-4 flex flex-col items-center">
      <div>
        <p className="text-slate-800 font-bold">{dayOfWeek}</p>
      </div>

      <div className=" flex items-center justify-center">
        <img
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
        />
      </div>
      <div className="flex text-slate-800 items-center justify-between">
        <p className="flex-1 text-center">
          {Math.round(item.main.temp_max)}°C max /{" "}
          {Math.round(item.main.temp_min)}
          °C min
        </p>
      </div>
      <p className="text-slate-800 text-center font-sans font-bold ">
        {item.weather[0].description.charAt(0).toUpperCase() +
          item.weather[0].description.slice(1)}
      </p>
    </div>
  );
}

export default DayWeather;
