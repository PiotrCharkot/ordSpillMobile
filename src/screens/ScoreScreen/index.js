import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import PlayerItem from "../../components/PlayerItem";
import Timer from "../../components/Timer";
import LoadingScreen from "../LoadingScreen";
import styles from "../ScoreScreen/styles";
import NewTimer from "../../components/NewTimer";

const ScoreScreen = ({ route, navigation }) => {
  const data = route.params;
  const isNextGameReady = data.params2 || false;
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
      headerStyle: { backgroundColor: "#B2DB34", shadowColor: "transparent" },
      headerTintColor: "#28A352",
      headerBackTitle: "Ordliste",
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
        setPercentOf(parsedResponse[i].percentOf.toFixed(2));
      }
    }
  }, 1500);

  !isLoading
    ? setTimeout(() => {
        setIsEndOfBreak(true);
      }, timeForCountdown * 1000)
    : null;

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.leftUp}>
          {showPlace ? (
            <View>
              <Text style={styles.textLeft}>
                Din plass: <Text style={styles.textLeft2}>{myPlace}</Text>
              </Text>
              <Text style={styles.textLeft}>
                Du vinner med <Text style={styles.textLeft2}>{percentOf}</Text>{" "}
                % av spillerne
              </Text>
            </View>
          ) : (
            <View>
              <Text style={styles.textLeft}>Din plass:</Text>
              <Text style={styles.textLeft}>
                Du vinner med <Text style={styles.textLeft2}>0</Text> % av
                spillerne
              </Text>
            </View>
          )}

          {isEndOfBreake ? (
            <TouchableOpacity onPress={() => navigation.replace("Play")}>
              <View style={styles.otherButtons}>
                <Text style={styles.buttonText}>SPILL IGJEN</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.otherButtonsClear}></View>
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
