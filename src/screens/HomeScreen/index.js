import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import Timer from "../../components/Timer";
import LoadingScreen from "../LoadingScreen";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [timeForCountdown, setTimeForCountdown] = useState(0);
  const [playersCount, setPlayersCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPlayerCount, setIsLoadingPlayerCount] = useState(true);
  const [isNewGame, setIsNewGame] = useState(false);

  const signOutUser = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Home");
      })
      .catch(() => {
        console.log("Could not log out!");
      });
  };

  useEffect(() => {
    const gettingTime = async () => {
      const responseClock = await fetch(
        "https://acidic-heavy-caterpillar.glitch.me/clock"
      );

      setTimeForCountdown(await responseClock.json());
      setIsLoading(false);
    };
    gettingTime();
    return setTimeForCountdown;
  }, [isNewGame]);

  useEffect(() => {
    const gettingPlayersCount = async () => {
      const responseClock = await fetch(
        "https://acidic-heavy-caterpillar.glitch.me/count"
      );

      setPlayersCount(await responseClock.json());
      setIsLoadingPlayerCount(false);
    };
    gettingPlayersCount();
    return setPlayersCount;
  }, [isNewGame]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUsername(auth.currentUser.providerData[0].displayName);
        console.log(
          "auth current:",
          auth.currentUser,
          "username here:",
          auth.currentUser.providerData[0].displayName
        );
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.logoImg}
          source={require("../../../assets/LogoIcon.png")}
        />
      </View>
      <View style={styles.gameInfo}>
        <View style={styles.numOfPlayers}>
          <Text style={styles.displayText}>Number of players:</Text>
          {isLoadingPlayerCount ? (
            <View style={styles.loaderCont}></View>
          ) : (
            <Text style={styles.textPlayerCount}>{playersCount}</Text>
          )}
        </View>
        <View style={styles.gameTimeInfo}>
          <Text style={styles.displayText}>Next round in:</Text>
          {isLoading ? (
            <View style={{ height: 95 }}></View>
          ) : (
            <View style={styles.timer}>
              <Timer
                clockCounter={timeForCountdown}
                runDown={(boolean) => setIsNewGame(boolean)}
              />
            </View>
          )}
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        {auth.currentUser ? (
          <Text style={styles.welcomeText}>Welcome {username}</Text>
        ) : (
          <Text style={styles.welcomeText}>Welcome</Text>
        )}
        <TouchableOpacity onPress={() => navigation.navigate("Play")}>
          <View style={styles.playButton}>
            <Text style={styles.buttonText}>Play</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Ranking")}>
          <View style={styles.otherButtons}>
            <Text style={styles.buttonText}>Rankings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            auth.currentUser
              ? navigation.navigate("MyProfil")
              : navigation.navigate("Login");
          }}
        >
          <View style={styles.otherButtons}>
            <Text style={styles.buttonText}>My profile</Text>
          </View>
        </TouchableOpacity>
        {auth.currentUser ? (
          <TouchableOpacity onPress={signOutUser}>
            <View style={styles.otherButtons}>
              <Text style={styles.buttonText}>Log out</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View style={styles.otherButtons}>
              <Text style={styles.buttonText}>Log in</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
