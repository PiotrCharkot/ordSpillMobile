import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FAF0DC",
  },
  upperContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flatlist: {
    marginTop: 15,
    marginHorizontal: 5,
  },
  leftUp: {
    marginLeft: 15,
    marginTop: 5,
  },
  textLeft: {
    fontSize: 25,
  },
  textLeft2: {
    fontSize: 25,
    fontWeight: "bold",
  },
  rightUp: {
    marginRight: 5,
  },
  timerContainer: {
    alignItems: "flex-end",
    marginRight: 5,
    marginTop: 5,
  },
  image: {
    height: 150,
  },
  scoreList: {},
  otherButtons: {
    height: 30,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "salmon",
    marginBottom: 10,
    marginTop: 15,
    borderRadius: 10,
  },
  otherButtonsClear: {
    height: 30,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
