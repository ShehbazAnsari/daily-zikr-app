import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF2D5", // New light background
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 24,
    color: "#A56C43", // New bronze text color
    marginBottom: 40,
    fontWeight: "bold",
    textAlign: "center",
  },

  button: {
    backgroundColor: "#A56C43", // Bronze button
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 20,
    width: width * 0.8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  buttonText: {
    color: "#FFF2D5", // Light text on dark button
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
