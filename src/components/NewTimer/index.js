import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const NewTimer = (props) => {
  const { clockCounter } = props;

  initialTimeBreake = clockCounter - 25;

  initialMinutes = initialTimeBreake / 60;
  actuallMinutes = Math.floor(initialMinutes);
  initialSeconds = initialMinutes - actuallMinutes;
  actuallSeconds = Math.ceil(initialSeconds * 60);
  const [minutes, setMinutes] = useState(actuallMinutes);
  const [seconds, setSeconds] = useState(actuallSeconds);

  useEffect(() => {
    let startTime = new Date().getTime();

    let timestampInteraval = setInterval(() => {
      let nextTime = new Date().getTime();
      let timePassed = nextTime - startTime;
      let secondsPassed = Math.floor(timePassed / 1000);
      let difference = seconds - secondsPassed;

      difference > 0 ? setSeconds(seconds - secondsPassed) : console.log("1");
      difference === 0 && minutes > 0
        ? (() => {
            setSeconds(59);
            setMinutes(0);
          })()
        : null;
      difference < 0 && difference > -59
        ? setSeconds(seconds - secondsPassed + 59)
        : null;
      difference < 0 && difference <= -59
        ? console.log("now it is time to finish")
        : null;
    }, 1000);

    return () => {
      clearInterval(timestampInteraval);
    };
  }, []);

  return (
    <View>
      {minutes === 0 && seconds === 0 ? null : (
        <Text>
          {" "}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </Text>
      )}
    </View>
  );
};

export default NewTimer;
