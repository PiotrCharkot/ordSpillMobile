import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../../assets/favicon.png")} />
      </View>
      <View style={styles.gameInfo}>
        <View>
          <Text>Number of players:</Text>
        </View>
        <View>
          <Text>Game time:</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
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
        <TouchableOpacity>
          <View style={styles.otherButtons}>
            <Text style={styles.buttonText}>My profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
