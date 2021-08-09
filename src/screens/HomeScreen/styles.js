import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#B2DB34",
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
  loaderCont: {
    height: 50,
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
    backgroundColor: "#1B486B",
    marginBottom: 10,
    borderRadius: 10,
  },
  otherButtons: {
    height: 30,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FC7634",
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
