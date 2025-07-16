import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import SurahYaseenScreen from "../screens/SurahYaseenScreen";
import SurahMulkScreen from "../screens/SurahMulk";
import TasbeehScreen from "../screens/TasbeehScreen";
import TasbeehFatimaScreen from "../screens/TasbeehFatimaScreen";
import TasbeehCounterScreen from "../screens/TasbeehCounterScreen";
import ExpectingMothersScreen from "../screens/ExpectingMothersScreen";
import SurahImageViewer from "../screens/SurahImageViewer";
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SurahYaseen" component={SurahYaseenScreen} />
        <Stack.Screen name="SurahMulk" component={SurahMulkScreen} />
        <Stack.Screen name="Tasbeeh" component={TasbeehScreen} />
        <Stack.Screen name="TasbeehFatima" component={TasbeehFatimaScreen} />
        <Stack.Screen name="TasbeehCounter" component={TasbeehCounterScreen} />
        <Stack.Screen
          name="ExpectingMothers"
          component={ExpectingMothersScreen}
          options={{ title: "Expecting Mothers" }} // optional title in header
        />
        <Stack.Screen name="SurahImageViewer" component={SurahImageViewer} />
        {/* <Stack.Screen name="Tasbeeh" component={TasbeehScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
