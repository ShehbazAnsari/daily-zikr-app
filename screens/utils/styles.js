import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  page: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF2D5", // light beige green
  },

  pageImage: {
    width: width,
    height: height,
    marginTop: -20, // reduce extra space
    marginBottom: -20,
    alignSelf: "center",
  },
});
