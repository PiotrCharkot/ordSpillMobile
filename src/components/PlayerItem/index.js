import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PlayerItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.place}>
        <Text>1</Text>
      </View>
      <Text style={styles.userName}>her is payer item</Text>
      <Image
        style={styles.image}
        source={require("../../../assets/favicon.png")}
      />
    </View>
  );
};

export default PlayerItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  place: {},
  userName: {},
});
