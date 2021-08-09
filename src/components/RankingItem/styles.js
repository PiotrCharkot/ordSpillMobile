import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#28A352",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  container2: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#1B486B",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  position: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1B486B",
    marginRight: 5,
  },
  position2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#28A352",
    marginRight: 5,
  },
  positionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  nameContainer: {},
  whiteText: {
    color: "white",
  },
  rightSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  imgContainer: {
    marginLeft: 15,
  },
});

export default styles;
