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
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  textConteiner: {
    width: 250,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 30,
  },
  dataEntry: {
    flexDirection: "row",
    width: 250,
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 15,
    marginTop: 20,
    fontWeight: "bold",
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
