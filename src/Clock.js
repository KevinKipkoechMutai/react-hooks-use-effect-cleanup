import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
    //setting up the cleanup function within the useEffect
    //pasted the entire setInterval function into the return function rather than assign it to a variable for easier comprehension
    //clock toggles perfectly!
    return function cleanup() {
      clearInterval(setInterval(() => {
        setTime(new Date());
      }, 1000))
    }
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
