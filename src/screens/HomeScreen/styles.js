import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  imageContainer: {
    height: 50,
    width: "100%",
    alignItems: "center",
  },
  gameInfo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
  },
  playButton: {
    height: 45,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    marginBottom: 10,
    borderRadius: 10,
  },
  otherButtons: {
    height: 30,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "salmon",
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
