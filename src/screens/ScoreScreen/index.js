import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import PlayerItem from "../../components/PlayerItem";
import Timer from "../../components/Timer";
import LoadingScreen from "../LoadingScreen";
import styles from "../ScoreScreen/styles";

const ScoreScreen = ({ route, navigation }) => {
  const data = route.params;
  const isNextGameReady = data.params2;
  const userID = data.params;
  const [timeForCountdown, setTimeForCountdown] = useState(0);
  const [parsedResponse, setParsedResponse] = useState([]);
  const [clockResponse, setClockResponse] = useState(0);
  const [showList, setShowList] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPlace, setShowPlace] = useState(false);
  const [isEndOfBreake, setIsEndOfBreak] = useState(false);
  const [myPlace, setMyPlace] = useState(null);
  const [percentOf, setPercentOf] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: { backgroundColor: "#FAF0DC", shadowColor: "transparent" },
      headerTintColor: "rgb(11,156,49)",
      headerBackTitle: "Answers",
    });
  }, [navigation]);

  useEffect(() => {
    const gettingResults = async () => {
      const response = await fetch(
        "https://acidic-heavy-caterpillar.glitch.me/resultsMobileBack"
      );
      setParsedResponse(await response.json());
      setShowList(true);
    };
    gettingResults();
  }, []);

  useEffect(() => {
    const gettingTime = async () => {
      const responseClock = await fetch(
        "https://acidic-heavy-caterpillar.glitch.me/clock"
      );

      setTimeForCountdown(await responseClock.json());
      setIsLoading(false);
      if (isNextGameReady) {
        setIsEndOfBreak(true);
      }
    };
    gettingTime();
  }, []);

  setTimeout(() => {
    for (let i = 0; i < parsedResponse.length; i++) {
      if (parsedResponse[i].userID === userID) {
        setShowPlace(true);
        setMyPlace(parsedResponse[i].position);
        setPercentOf(parsedResponse[i].percentOf);
      }
    }
  }, 1500);

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.leftUp}>
          {showPlace ? (
            <Text style={styles.textLeft}>
              Your place: <Text style={styles.textLeft2}>{myPlace},,,{percentOf}</Text>
            </Text>
          ) : (
            <Text style={styles.textLeft}>Your place:</Text>
          )}

          {isEndOfBreake ? (
            <TouchableOpacity onPress={() => navigation.replace("Play")}>
              <View style={styles.otherButtons}>
                <Text style={styles.buttonText}>Play again</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.otherButtonsClear}></View>
          )}
        </View>
        <View style={styles.rightUp}>
          {isLoading ? (
            <View style={styles.timerContainer}>
              <View></View>
            </View>
          ) : (
            <Timer
              clockCounter={timeForCountdown}
              runDown={(boolean) => setIsEndOfBreak(boolean)}
            />
          )}
        </View>
      </View>
      <View style={styles.scoreList}>
        {showList ? (
          <FlatList
            style={styles.flatlist}
            keyExtractor={(item) => item.userID.toString()}
            data={parsedResponse}
            renderItem={({ item }) => {
              return <PlayerItem params={item} userID={userID} />;
            }}
          />
        ) : (
          <LoadingScreen />
        )}
      </View>
    </View>
  );
};

export default ScoreScreen;
