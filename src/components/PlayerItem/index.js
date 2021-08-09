import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PlayerItem = ({ params, userID }) => {
  return userID === params.userID ? (
    <View style={styles.container}>
      <View style={styles.leftCont}>
        <View style={styles.place}>
          <Text style={styles.posText}>{params.position}</Text>
        </View>
        <View style={styles.midCont}>
          <Text style={styles.userName}>{params.username}</Text>
          <Text style={styles.answer}>{params.longestAnswer}</Text>
        </View>
      </View>

      <View style={styles.imgCont}>
        <View style={styles.pointsCont}>
          <Text>{params.points}</Text>
        </View>
        <Image style={styles.image} source={{ uri: params.userImgAdress }} />
      </View>
    </View>
  ) : (
    <View style={styles.container2}>
      <View style={styles.leftCont}>
        <View style={styles.place}>
          <Text style={styles.posText}>{params.position}</Text>
        </View>
        <View style={styles.midCont}>
          <Text style={styles.userName}>{params.username}</Text>
          <Text style={styles.answer}>{params.longestAnswer}</Text>
        </View>
      </View>

      <View style={styles.imgCont}>
        <View style={styles.pointsCont}>
          <Text style={styles.pointsContText}>{params.points}</Text>
        </View>
        <Image style={styles.image} source={{ uri: params.userImgAdress }} />
      </View>
    </View>
  );
};

export default PlayerItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#28A352",
    borderRadius: 25,
    width: "100%",
    marginBottom: 2,
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
  },
  container2: {
    flexDirection: "row",
    color: "white",
    backgroundColor: "#1B486B",
    borderRadius: 25,
    width: "100%",
    marginBottom: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftCont: {
    flexDirection: "row",
    alignItems: "center",
    color: "white",
  },
  place: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  posText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  midCont: {
    marginLeft: 5,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  answer: {
    color: "white",
  },
  pointsCont: {
    height: 50,
    width: 50,
    justifyContent: "center",
  },
  pointsContText: {
    color: "white",
  },
  imgCont: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
