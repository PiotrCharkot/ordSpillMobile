import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { MaterialIndicator } from "react-native-indicators";

const LoadingScreen = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#FAF0DC",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <MaterialIndicator
          color={"rgb(185, 35, 235)"}
          size={25}
          trackWidth={5}
        />
        <Text
          style={{
            fontSize: 130,
            lineHeight: 130,
            marginTop: 15,
            alignItems: "center",
            justifyContent: "center",
            color: "rgb(185, 35, 235)",
          }}
        >
          A
        </Text>
      </View>
    </View>
  );
};

export default LoadingScreen;
