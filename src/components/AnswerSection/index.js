import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import PlayerWord from "../PlayerWord";

const AnswerSection = (prop) => {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text> {prop.number} letters word</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={prop.answer}
          renderItem={({ item }) => {
            return <PlayerWord prop={item.word} />;
          }}
        />
      </View>
    </View>
  );
};

export default AnswerSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  textContainer: {
    height: 20,
  },
});
