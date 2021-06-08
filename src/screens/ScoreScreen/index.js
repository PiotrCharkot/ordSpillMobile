import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import PlayerItem from "../../components/PlayerItem";
import Timer from "../../components/Timer";
import styles from "../ScoreScreen/styles";

const ScoreScreen = ({ route, navigation }) => {
  const data = route.params;
  const userID = data.params;

  console.log("that would be an id passed to score", userID);

  const [isEndOfBreake, setIsEndOfBreak] = useState(false);
  useEffect(() => {
    const gettingResults = async () => {
      const response = await fetch(
        "https://acidic-heavy-caterpillar.glitch.me/resultsMobileBack"
      );
      const parsedResponse = await response.json();
      console.log("server response in the scores", parsedResponse);
    };
    gettingResults();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.leftUp}>
          <Text>Your place</Text>
        </View>
        <View style={styles.rightUp}>
          <View style={styles.timerContainer}>
            <Timer
              clockCounter={10}
              runDown={(boolean) => setIsEndOfBreak(boolean)}
            />
          </View>
        </View>
      </View>
      <View style={styles.scoreList}>
        <PlayerItem />
        <PlayerItem />
      </View>
    </View>
  );
};

export default ScoreScreen;
