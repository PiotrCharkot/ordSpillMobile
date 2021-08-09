import React, { useState, useLayoutEffect } from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { auth } from "../../firebase";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: username,
        });
        navigation.replace("Login");
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
        <Text style={styles.mainText}>Register here</Text>
        <Input
          placeholder={"Username"}
          autoFocus
          type={"text"}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Input
          placeholder={"Email"}
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
          onSubmitEditing={register}
        />

        <Button
          title="Register"
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
          onPress={register}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
