import React, { useState } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const Timer = (prop) => {
  const { clockCounter, runDown } = prop;
  const [word, setWord] = useState("");

  return (
    <CountdownCircleTimer
      size={80}
      strokeWidth={8}
      isPlaying
      duration={clockCounter}
      colors={[
        ["#004777", 0.4],
        ["#F7B801", 0.4],
        ["#A30000", 0.2],
      ]}
      onComplete={() => runDown(true)}
    >
      {({ remainingTime, animatedColor }) => (
        <View style={styles.timerContainer}>
          <Text>{word}</Text>
          <Animated.Text style={{ color: animatedColor, fontSize: 28 }}>
            {remainingTime}
          </Animated.Text>
          <Text></Text>
        </View>
      )}
    </CountdownCircleTimer>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timerContainer: {
    alignItems: "center",
  },
});
