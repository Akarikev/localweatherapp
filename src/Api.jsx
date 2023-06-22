/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdOutlineNightlight } from "react-icons/md";
import useTimeAndDate from "./useTimeAndDate";

function Api() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentDateTime = useTimeAndDate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
    getData();
  }, []);

  const getData = async () => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=5.11&longitude=-1.25&current_weather=true&timezone=auto`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      setWeather(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const getTemperatureDescription = (temperature) => {
    if (temperature <= 10) {
      return `It's very cold (${temperature}°C)`;
    } else if (temperature <= 20) {
      return `It's cold (${temperature}°C)`;
    } else if (temperature <= 30) {
      return `It's warm (${temperature}°C)`;
    } else {
      return `It's hot (${temperature}°C)`;
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading weather data...</div>
      ) : weather ? (
        <div>
          <>Place/TimeZone: {weather.timezone}</>
          {weather.current_weather.is_day === 0 ? (
            <>
              <p>It's Night Time</p>
              <MdOutlineNightlight size={45} />
            </>
          ) : (
            <>
              <p>It's Day Time</p>
              <WiDaySunny size={45} />
            </>
          )}
          <p>
            {getTemperatureDescription(weather.current_weather.temperature)}
          </p>
          <>Time & Date: {currentDateTime}</>
        </div>
      ) : (
        <div>Unable to fetch weather data.</div>
      )}
    </div>
  );
}

export default Api;
