import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FAF0DC",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImg: {
    height: 150,
    width: 250,
  },
  gameInfo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  numOfPlayers: {
    alignItems: "center",
  },
  textPlayerCount: {
    marginTop: 35,
    fontSize: 30,
    fontWeight: "bold",
  },
  displayText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  gameTimeInfo: {
    alignItems: "center",
  },
  timer: {
    marginTop: 15,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
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
