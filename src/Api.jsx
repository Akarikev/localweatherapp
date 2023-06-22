/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import useGeolocation from "./useGeolocation";
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

  return (
    <div>
      {loading ? (
        <div>Loading weather data...</div>
      ) : weather ? (
        <div>
          <>Place/TimeZone : {weather.timezone}</>

          {weather.current_weather.is_day === 0 ? (
            <>
              <p>{`It's Night Time`}</p>
              <MdOutlineNightlight size={45} />
            </>
          ) : (
            <WiDaySunny />
          )}
          {weather.current_weather.temperature <= 10 ? (
            <p>It's very cold ({weather.current_weather.temperature}°C)</p>
          ) : weather.current_weather.temperature <= 20 ? (
            <p>It's cold ({weather.current_weather.temperature}°C)</p>
          ) : weather.current_weather.temperature <= 30 ? (
            <p>It's warm ({weather.current_weather.temperature}°C)</p>
          ) : (
            <p>It's hot ({weather.current_weather.temperature}°C)</p>
          )}

          <>Time & Date: {currentDateTime}</>
        </div>
      ) : (
        <div>Unable to fetch weather data.</div>
      )}
    </div>
  );
}

export default Api;
