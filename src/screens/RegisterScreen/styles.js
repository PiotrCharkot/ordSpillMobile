import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAF0DC",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  formContainer: {
    width: 250,
    alignItems: "center",
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    color: "salmon",
    height: 40,
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
