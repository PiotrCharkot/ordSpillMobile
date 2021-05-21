import { StyleSheet, Dimensions, StatusBar } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FAF0DC",
  },
  serverAnswers: {
    marginBottom: 30,
    marginLeft: 5,
    width: 160,
    overflow: "scroll",
  },
  header: {
    backgroundColor: "#FAF0DC",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(11,156,49)",
  },
  title2: {
    fontSize: 20,
    fontWeight: "bold",
  },
  upperContainer: {
    justifyContent: "flex-end",
  },
  rightSideCont: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  timerContainer: {
    alignItems: "flex-end",
    marginRight: 5,
    marginTop: 5,
  },
  pointsContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  timerContainer2: {
    alignItems: "flex-end",
    height: 80,
  },
  pointsText: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 5,
    marginTop: 5,
  },
  pointsColor: {
    color: "rgb(11,156,49)",
  },
  samllGridCont: {
    marginBottom: 30,
    marginRight: 5,
  },
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tileContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: (screenWidth - 182) / 4,
    height: (screenWidth - 182) / 4,
    margin: 1.5,
  },
});

export default styles;
