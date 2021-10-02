import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlayerWord = ({ prop }) => {
  const { item } = prop;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{prop}</Text>
    </View>
  );
};

export default PlayerWord;

const styles = StyleSheet.create({
  container: {
    height: 25,
    width: 170,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgb(11,156,49)",
  },
});
