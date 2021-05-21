import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

const LoadingScreen = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <ActivityIndicator color={"rgb(185, 35, 235)"} size={50} />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 130,
            lineHeight: 130,
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
