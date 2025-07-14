import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const homeStyles = StyleSheet.create({
  // 🟢 Main screen container
  container: {
    flex: 1,
    backgroundColor: "#0D2F26", // Dark matte green
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  // 🟡 Heading/title
  heading: {
    fontSize: 24,
    color: "#FFD700", // Golden text
    marginBottom: 40,
    fontWeight: "bold",
    textAlign: "center",
  },

  // 🟣 Button container style
  button: {
    backgroundColor: "#FFD700", // Golden button
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 20,
    width: width * 0.8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5, // Android shadow
  },

  // ⚪️ Button label
  buttonText: {
    color: "#0D2F26", // Text color = background color of screen
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
