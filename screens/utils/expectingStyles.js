import { StyleSheet } from "react-native";

export const expectingStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFF2D5",
    paddingHorizontal: 30,
    paddingBottom: 40,
    // justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#A56C43",
    marginTop: 100,
    marginBottom: 24,
    textAlign: "center",
  },
  surahButton: {
    backgroundColor: "#FFF2D5",
    borderWidth: 1.5,
    borderColor: "#A56C43",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 12,
    width: "92%",
    alignSelf: "center",
    alignItems: "center",
    elevation: 4,
  },
  surahName: {
    fontSize: 20,
    color: "#A56C43",
    fontWeight: "bold",
    marginBottom: 6,
  },
  surahBenefit: {
    fontSize: 14,
    color: "#A56C43",
    textAlign: "center",
  },
});
