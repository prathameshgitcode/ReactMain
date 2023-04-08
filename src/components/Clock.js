import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toString());

  useEffect(() => {
    console.log("Component mounted or updated");
    const interval = setInterval(showDate, 1000);
    return () => {
      console.log("Cleanup of Interval");
      clearInterval(interval);
    };
  }, [time]);

  function showDate() {
    // console.log(new Date().toString());
    setTime(new Date().toString());
  }
  //   setInterval(showDate, 1000);
  return <div>{time}</div>;
}

export default Clock;
