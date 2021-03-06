import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#B2DB34",
  },
  upperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wordsContainer: {
    maxHeight: 150,
    overflow: "scroll",
    marginLeft: 5,
    marginTop: 5,
  },
  logoImg: {
    height: 40,
    width: 70,
  },
  flatList: {},
  pointsContainer: {},
  pointsText: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 5,
    marginTop: 5,
  },
  pointsColor: {
    color: "#28A352",
  },
  answerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  answerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#28A352",
  },
  gridContainer: {
    marginBottom: 5,
  },
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tileContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: (screenWidth - 24) / 4,
    height: (screenWidth - 24) / 4,
    margin: 3,
  },
  timerContainer: {
    marginRight: 5,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  green: {
    height: screenWidth,
    width: screenWidth,
    backgroundColor: "#28A352",
    position: "absolute",
    borderRadius: 8,
  },
  greenTransparetn: {
    height: screenWidth,
    width: screenWidth,
    backgroundColor: "rgba(11,156,49,0)",
    position: "absolute",
    borderRadius: 8,
  },
  orange: {
    height: screenWidth,
    width: screenWidth,
    backgroundColor: "lightyellow",
    position: "absolute",
    borderRadius: 8,
  },
  orangeTransparetn: {
    height: screenWidth,
    width: screenWidth,
    backgroundColor: "rgba(211,84,0,0)",
    position: "absolute",
    borderRadius: 8,
  },
  red: {
    height: screenWidth,
    width: screenWidth,
    backgroundColor: "#FC7634",
    position: "absolute",
    borderRadius: 8,
  },
  redTransparetn: {
    height: screenWidth,
    width: screenWidth,
    backgroundColor: "rgba(255,0,0,0)",
    position: "absolute",
    borderRadius: 8,
  },
});

export default styles;
