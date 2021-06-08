import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {},
  upperContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftUp: {},
  rightUp: {},
  timerContainer: {
    alignItems: "flex-end",
    marginRight: 5,
    marginTop: 5,
  },
  image: {
    height: 150,
  },
  scoreList: {},
});

export default styles;
