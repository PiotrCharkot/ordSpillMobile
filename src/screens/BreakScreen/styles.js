import { StyleSheet, Dimensions, StatusBar } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#B2DB34",
  },
  serverAnswers: {
    marginBottom: 30,
    marginLeft: 5,
    width: 160,
    overflow: "scroll",
  },
  header: {
    backgroundColor: "#B2DB34",
    color: "black",
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1B486B",
  },
  title2: {
    fontSize: 20,
    fontWeight: "bold",
  },
  upperContainer: {
    justifyContent: "flex-end",
  },
  replaceSection: {
    alignItems: "center",
    justifyContent: "center",
  },
  replaceSectionText: {
    color: "#28A352",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  rightSideCont: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  timerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    marginTop: 5,
    paddingBottom: 20,
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
    color: "#28A352",
  },
  middleContainer: {
    marginRight: 5,
  },
  otherButtons: {
    height: 30,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FC7634",
    marginBottom: 10,
    borderRadius: 10,
  },
  otherButtonsClear: {
    height: 30,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
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
