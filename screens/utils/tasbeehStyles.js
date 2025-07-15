// utils/tasbeehStyles.js
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const tasbeehStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF2D5",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 28,
    color: "#A56C43",
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  arabicText: {
    fontSize: 32,
    color: "#A56C43",
    marginBottom: 24,
    textAlign: "center",
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#A56C43",
    width: width * 0.8,
    paddingVertical: 16,
    borderRadius: 14,
    marginBottom: 20,
    alignItems: "center",
    elevation: 4,
  },
  buttonText: {
    color: "#FFF2D5",
    fontSize: 18,
    fontWeight: "bold",
  },
  count: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#A56C43",
    marginBottom: 16,
  },
  progressBarContainer: {
    width: width * 0.8,
    height: 10,
    backgroundColor: "#E0D9C5",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 30,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#A56C43",
    borderRadius: 5,
  },
  circleButton: {
    backgroundColor: "#A56C43",
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    marginBottom: 20,
    alignSelf: "center",
  },
  resetButton: {
    backgroundColor: "#A56C43",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 4,
    alignSelf: "center",
    marginTop: 10,
  },
  resetText: {
    color: "#FFF2D5",
    fontSize: 16,
    fontWeight: "bold",
  },
});
