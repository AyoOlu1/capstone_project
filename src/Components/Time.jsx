import React, { useState, useEffect } from "react";

function Time() {
  //   const [time, setTime] = useState({ hour, minutes, seconds });
  const [hour, setHour] = useState(Number);
  const [minutes, setMinutes] = useState(Number);
  // const [seconds, setSeconds] = useState(Number);
  const [suffix, setSuffix] = useState("");

  useEffect(() => {
    // run the getCurrentDate function every second
    setInterval(getCurrentDate, 9000);

    return clearInterval(getCurrentDate);
  }, []);

  function getCurrentDate() {
    const date = new Date();

    const [
      newHour,
      newMinutes,
      // , newSeconds
    ] = [
      date.getHours(),
      date.getMinutes(),
      // date.getSeconds(),
    ];

    setHour(newHour);
    setMinutes(newMinutes);
    // setSeconds(newSeconds);

    // add suffix AM or PM
    const suffixAmPm = `${newHour < 12 ? "AM" : "PM"}`;
    setSuffix(suffixAmPm);
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "green",
          color: "hsl(193, 38%, 86%)",
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          borderRadius: "0.5rem",
          margin: "0px auto",
          width: "20rem",
          fontSize: "2rem",
          marginBottom: "3rem",
        }}
      >
        <div className="hour">
          {hour}
          <span>&nbsp;:&nbsp;</span>
        </div>
        <div className="minute">{`${minutes} ${suffix}`}</div>
        {/* <div className="seconds">{`${seconds} ${suffix}`}</div> */}
      </div>
    </>
  );
}

export default Time;
