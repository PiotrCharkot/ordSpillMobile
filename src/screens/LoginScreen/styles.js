import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B2DB34",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 0,
  },
  logoImg: {
    height: 100,
    width: 160,
  },
  formContainer: {
    width: 250,
  },
  button: {
    height: 40,
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
