import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import PlayScreen from "../screens/PlayScreen";
import ScoreScreen from "../screens/ScoreScreen";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Play"
          component={PlayScreen}
          options={{ headerShown: true, gestureEnabled: false }}
          headerStyle
        />
        <Stack.Screen
          name="Scores"
          component={ScoreScreen}
          options={{ headerShown: true, gestureEnabled: false }}
          headerStyle
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
