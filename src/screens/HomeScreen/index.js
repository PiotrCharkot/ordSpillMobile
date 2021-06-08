import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Home");
    });
  };

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
        <Image source={require("../../../assets/favicon.png")} />
      </View>
      <View style={styles.gameInfo}>
        <View>
          <Text>Number of players: {username}</Text>
        </View>
        <View>
          <Text>Game time:</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        {auth.currentUser ? <Text>Welcome {username}</Text> : <Text></Text>}
        <TouchableOpacity onPress={() => navigation.navigate("Play")}>
          <View style={styles.playButton}>
            <Text style={styles.buttonText}>Play</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.otherButtons}>
            <Text style={styles.buttonText}>Rankings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("MyProfil")}>
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
