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
  const [refresh, setRefresh] = useState(true);
  const [fileUrl, setFileUrl] = useState(null);
  const [imgSrc, setImgSrc] = useState(
    "https://reactnative.dev/img/tiny_logo.png"
  );

  const navigation = useNavigation();

  const imgTitle = auth.currentUser.uid;
  const setPicture = async (file) => {
    var ref = firebase
      .storage()
      .ref()
      .child("images/" + imgTitle);

    setFileUrl(await ref.getDownloadURL());
    console.log("liiiiiiiiiiiiiiink", file);
    setImgSrc(await file);
  };

  setPicture(fileUrl);

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

  console.log("here is some ppppppathhhhhh", fileUrl);

  const showButtons = () => {
    setShowOptions(!showOptions);
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
        <TouchableOpacity onPress={showButtons}>
          <Text>Change image</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text>jump to home</Text>
        </TouchableOpacity>
      </View>

      {showOptions ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={choosePic}>
            <View style={styles.otherButtons}>
              <Text style={styles.buttonText}>Choose Picture</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
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
