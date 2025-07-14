import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  page: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D2F26", // dark matte green
  },
  //   pageImage: {
  //     width: width * 0.95,
  //     height: height * 0.98,
  //     borderRadius: 10,
  //   },
  pageImage: {
    width: width,
    height: height,
    marginTop: -20, // reduce extra space
    marginBottom: -20,
    alignSelf: "center",
    backgroundColor: "#0D2F26",
  },
});
