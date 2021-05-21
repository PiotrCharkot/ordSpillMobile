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
    width: (screenWidth - 182) / 4,
    height: (screenWidth - 182) / 4,
    backgroundColor: "lightblue",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  tileAlt: {
    width: (screenWidth - 190) / 4,
    height: (screenWidth - 190) / 4,
    backgroundColor: "lightgreen",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  tileLetter: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
});

export default GridTile;
