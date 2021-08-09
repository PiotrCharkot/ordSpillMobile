import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import * as firebase from "firebase";

const RankingItem = (item) => {
  const [level, setLevel] = useState(1);
  const [imgSrc, setImgSrc] = useState(
    "https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg"
  );
  const [fileUrl, setFileUrl] = useState(null);

  const imgTitle = item.params.userID;
  const setPicture = async (file) => {
    var ref = firebase
      .storage()
      .ref()
      .child("images/" + imgTitle);

    setFileUrl(await ref.getDownloadURL());
    setImgSrc(await file);
  };

  setPicture(fileUrl)
    .then(() => {
      console.log("Promise resolved");
    })
    .catch(() => {
      console.log("there is no picture for that");
    });

  let sumPoints = item.params.userPoints.reduce((a, b) => a + b, 0);

  useEffect(() => {
    if (sumPoints >= 200 && sumPoints <= 290) {
      setLevel(2);
    } else if (sumPoints > 290 && sumPoints <= 1000) {
      setLevel(3);
    }
  }, []);

  return (
    <View
      style={
        item.params.position % 2 === 0 ? styles.container : styles.container2
      }
    >
      <View style={styles.leftSide}>
        <View
          style={
            item.params.position % 2 === 0 ? styles.position : styles.position2
          }
        >
          <Text style={styles.positionText}>{item.params.position}</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{item.params.userName}</Text>
          <Text style={styles.whiteText}>Level: {level} </Text>
        </View>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.whiteText}>
          {(
            item.params.userGames.reduce((a, b) => a + b, 0) /
            item.params.userGames.length
          ).toFixed(2)}
          %
        </Text>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={{ uri: imgSrc }} />
        </View>
      </View>
    </View>
  );
};

export default RankingItem;
