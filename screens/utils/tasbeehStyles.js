// utils/tasbeehStyles.js
import { StyleSheet, Dimensions, Platform } from "react-native";

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
    textAlign: "center",
    alignSelf: "center",
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFF2D5",
    padding: 30,
    borderRadius: 16,
    width: "80%",
    alignItems: "center",
    elevation: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#A56C43",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: "#5E4B3C",
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#A56C43",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  modalButtonText: {
    color: "#FFF2D5",
    fontSize: 16,
    fontWeight: "bold",
  },
  //picker
  pickerWrapper: {
    width: "100%",
    backgroundColor: "#FFF2D5",
    borderWidth: 2,
    borderColor: "#A56C43",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "android" ? 0 : 10,
    marginBottom: 20,
  },

  picker: {
    color: "#A56C43",
    fontSize: 16,
    width: "100%",
  },

  pickerItem: {
    fontSize: 16,
    color: "#A56C43",
  },
});
