import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const GridTile = (props) => {
  const { letter, marker } = props;

  return (
    <View style={marker ? styles.tileAlt : styles.tile}>
      <Text style={styles.tileLetter}>{letter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    width: (screenWidth - 24) / 4,
    height: (screenWidth - 24) / 4,
    backgroundColor: "#1B486B",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  tileAlt: {
    width: (screenWidth - 38) / 4,
    height: (screenWidth - 38) / 4,
    backgroundColor: "#28A352",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  tileLetter: {
    fontSize: 34,
    color: "white",
    fontWeight: "bold",
  },
});

export default GridTile;
