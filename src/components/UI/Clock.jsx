import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;
  const countDown = () => {
    const destination = new Date("Dec 25, 2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    countDown();
  });
  return (
    <div className="flex items-center  mx-3 gap-3 pt-10 ">
      <div className="flex items-center gap-3">
        <div>
          <h1 className="text-white text-3xl">{days}</h1>
          <h5 className="text-white text-sm">Days</h5>
        </div>
        <span className="text-white text-4xl">:</span>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <h1 className="text-white text-3xl">{hours}</h1>
          <h5 className="text-white text-sm">Hours</h5>
        </div>
        <span className="text-white text-4xl">:</span>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <h1 className="text-white text-3xl">{minutes}</h1>
          <h5 className="text-white text-sm">Minutes</h5>
        </div>
        <span className="text-white text-4xl">:</span>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <h1 className="text-white text-3xl">{seconds}</h1>
          <h5 className="text-white text-sm">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
