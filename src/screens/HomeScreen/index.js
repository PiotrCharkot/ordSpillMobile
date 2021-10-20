import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import NewTimer from "../../components/NewTimer";
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
          <Text style={styles.displayText}>Spillere online:</Text>
          {isLoadingPlayerCount ? (
            <View style={styles.loaderCont}></View>
          ) : (
            <Text style={styles.textPlayerCount}>{playersCount}</Text>
          )}
        </View>
        <View style={styles.gameTimeInfo}>
          <Text style={styles.displayText}>Pågående spill:</Text>
          {isLoading ? (
            <View style={{ height: 95 }}></View>
          ) : (
            <View style={styles.timer}>
              <NewTimer
                clockCounter={timeForCountdown}
                runDown={(boolean) => setIsNewGame(boolean)}
              />
            </View>
          )}
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        {auth.currentUser ? (
          <Text style={styles.welcomeText}>
            VELKOMMEN <Text style={styles.usernameText}>{username}</Text>{" "}
          </Text>
        ) : (
          <Text style={styles.welcomeText}>VELKOMMEN</Text>
        )}
        <TouchableOpacity onPress={() => navigation.replace("Play")}>
          <View style={styles.playButton}>
            <Text style={styles.buttonText}>SPILL NÅ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Ranking")}>
          <View style={styles.otherButtons}>
            <Text style={styles.buttonText}>TOPPSPILLERE</Text>
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
            <Text style={styles.buttonText}>MIN PROFIL</Text>
          </View>
        </TouchableOpacity>
        {auth.currentUser ? (
          <TouchableOpacity onPress={signOutUser}>
            <View style={styles.otherButtons}>
              <Text style={styles.buttonText}>LOGG UT</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View style={styles.otherButtons}>
              <Text style={styles.buttonText}>LOGG INN</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
