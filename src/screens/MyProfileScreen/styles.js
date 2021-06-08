import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  imgContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  buttonContainer: {
    position: "absolute",
    height: "100%",
    justifyContent: "flex-end",
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
