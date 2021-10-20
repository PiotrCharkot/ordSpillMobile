import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const NewTimer = (props) => {
  const { clockCounter, runDown, breakTimer } = props;

  breakTimer
    ? (initialTimeBreake = clockCounter)
    : (initialTimeBreake = clockCounter - 25);

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
      let difference = initialTimeBreake - secondsPassed;

      difference > 0 && difference <= 59 && !breakTimer && minutes === 1
        ? setSeconds(seconds - secondsPassed + 60)
        : setSeconds(seconds - secondsPassed);

      difference === 59
        ? (() => {
            setSeconds(59);
            setMinutes(0);
          })()
        : null;

      difference <= 0
        ? (() => {
            setMinutes(0);
            setSeconds(0);
            clearInterval(timestampInteraval);
            runDown(true);
            console.log("end of game");
          })()
        : null;
    }, 1000);

    return () => {
      clearInterval(timestampInteraval);
    };
  }, []);

  return (
    <View style={styles.container}>
      {initialTimeBreake < 0 ? (
        <Text style={styles.timeText}> 0:00</Text>
      ) : (
        <Text style={styles.timeText}>
          {" "}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </Text>
      )}
    </View>
  );
};

export default NewTimer;
