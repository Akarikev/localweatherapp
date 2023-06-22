import { useState, useEffect } from "react";

function useTimeAndDate() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const dateTimeString = currentDate.toLocaleString();
      setCurrentDateTime(dateTimeString);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return currentDateTime;
}

export default useTimeAndDate;
