import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WordItem = ({ title, playersAnswers }) =>
  playersAnswers.find((element) => element.word === title) ? (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  ) : (
    <View style={styles.item2}>
      <Text style={styles.title2}>{title}</Text>
    </View>
  );

export default WordItem;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#28A352",
  },
  title2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1B486B",
  },
});
