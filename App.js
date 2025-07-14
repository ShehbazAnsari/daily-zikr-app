import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SurahYaseenScreen from "./screens/SurahYaseenScreen";
import AppNavigator from "./navigation/AppNavigator";
// export default function App() {
//   return <SurahYaseenScreen />;
// }

export default function App() {
  return <AppNavigator />;
}
