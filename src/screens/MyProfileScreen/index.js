import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, Platform } from "react-native";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import * as firebase from "firebase";

const MyProfile = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [getPoints, setGetPoints] = useState(null);
  const [points, setPoints] = useState(0);
  const [games, setGames] = useState(0);
  const [percentOf, setPercentOf] = useState(0);
  const [showPoints, setShowPoints] = useState(false);
  const [showData, setShowData] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [fileUrl, setFileUrl] = useState(null);
  const [imgSrc, setImgSrc] = useState(
    "https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg"
  );

  const navigation = useNavigation();

  const imgTitle = auth.currentUser.uid;
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

  console.log(auth.currentUser.uid);

  if (showData) {
    for (let i = 0; i < getPoints.length; i++) {
      if (getPoints[i].userID === auth.currentUser.uid) {
        setGames(getPoints[i].userGames.length);
        setPoints(getPoints[i].userPoints.reduce((a, b) => a + b, 0));
        setPercentOf(
          getPoints[i].userGames.reduce((a, b) => a + b, 0) /
            getPoints[i].userGames.length
        );
        setShowPoints(true);
        setShowData(false);
      }
    }
  }

  //fetch player points

  useEffect(() => {
    const fetchingPoints = async () => {
      const response = await fetch(
        "https://acidic-heavy-caterpillar.glitch.me/gettingPoints"
      );
      setGetPoints(await response.json());
      setShowData(true);
      console.log("data from databse", getPoints);
    };
    fetchingPoints();
  }, []);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const showButtons = () => {
    setShowOptions(!showOptions);
  };

  const takePic = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync();

    console.log("photo results are hereeeeeeeeeeeeee", result);

    setShowOptions(false);

    if (!result.cancelled) {
      await uploadImage(result.uri, imgTitle);

      setImgSrc(result.uri);
      setTimeout(() => {
        setRefresh(!refresh);
      }, 2000);
    }
  };

  const choosePic = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      await uploadImage(result.uri, imgTitle);
    }

    setShowOptions(false);
    setImgSrc(result.uri);
    setTimeout(() => {
      setRefresh(!refresh);
    }, 2000);
  };

  const uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase
      .storage()
      .ref()
      .child("images/" + imageName);
    ref.put(blob);
    setFileUrl(await ref.getDownloadURL());
    console.log("here is some patttth", fileUrl);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.tinyLogo} source={{ uri: imgSrc }} />
      </View>

      <View style={styles.textConteiner}>
        <View style={styles.dataEntry}>
          <View>
            <Text>Username:</Text>
          </View>
          <View>
            <Text style={styles.text}>
              {auth.currentUser.providerData[0].displayName}
            </Text>
          </View>
        </View>

        <View style={styles.dataEntry}>
          <View>
            <Text>Email:</Text>
          </View>
          <View>
            <Text style={styles.text}>
              {auth.currentUser.providerData[0].email}
            </Text>
          </View>
        </View>
        {showPoints ? (
          <View style={styles.dataEntry}>
            <View>
              <Text>Players you beat on average:</Text>
            </View>
            <View>
              <Text style={styles.text}>{percentOf.toFixed(2)}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.dataEntry}>
            <View>
              <Text>Players you beat on average:</Text>
            </View>
            <View>
              <Text style={styles.text}>wait...</Text>
            </View>
          </View>
        )}
        {showPoints ? (
          <View style={styles.dataEntry}>
            <View>
              <Text>Games played:</Text>
            </View>
            <View>
              <Text style={styles.text}>{games}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.dataEntry}>
            <View>
              <Text>Games played:</Text>
            </View>
            <View>
              <Text style={styles.text}>wait...</Text>
            </View>
          </View>
        )}

        {showPoints ? (
          <View style={styles.dataEntry}>
            <View>
              <Text>Points:</Text>
            </View>
            <View>
              <Text style={styles.text}>{points}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.dataEntry}>
            <View>
              <Text>Points:</Text>
            </View>
            <View>
              <Text style={styles.text}>wait...</Text>
            </View>
          </View>
        )}
      </View>
      <TouchableOpacity onPress={showButtons}>
        <View style={styles.otherButtons}>
          <Text style={styles.buttonText}>Change image</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace("Home")}>
        <View style={styles.otherButtons}>
          <Text style={styles.buttonText}>Go to lobby</Text>
        </View>
      </TouchableOpacity>

      {showOptions ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={choosePic}>
            <View style={styles.otherButtons}>
              <Text style={styles.buttonText}>Choose Picture</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePic}>
            <View style={styles.otherButtons}>
              <Text style={styles.buttonText}>Take Photo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowOptions(false)}>
            <View style={styles.otherButtons}>
              <Text style={styles.buttonText}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default MyProfile;
