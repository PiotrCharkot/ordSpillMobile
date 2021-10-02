import React, { useState, useEffect } from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { auth } from "../../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //       if (authUser) {
  //         navigation.replace("Home");
  //       }
  //     });
  //     return unsubscribe;
  //   }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("is this that object??", user);

        navigation.replace("Home");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.logoImg}
          source={require("../../../assets/LogoIcon.png")}
        />
      </View>
      <View style={styles.formContainer}>
        <Input
          placeholder={"E-post"}
          autoFocus
          type={"email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder={"Passord"}
          secureTextEntry
          type={"password"}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Button
          title="LOGG INN"
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
          onPress={signIn}
        />
        <Button
          title="REGISTRERE"
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
        <Button
          title="TILBAKE"
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
