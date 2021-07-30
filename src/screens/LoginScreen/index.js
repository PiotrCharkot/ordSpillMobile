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
        <Image source={require("../../../assets/favicon.png")} />
      </View>
      <View style={styles.formContainer}>
        <Input
          placeholder={"Email"}
          autoFocus
          type={"email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder={"Password"}
          secureTextEntry
          type={"password"}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Button
          title="Login"
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
          onPress={signIn}
        />
        <Button
          title="Register"
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
        <Button
          title="Go to home"
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
