import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { tasbeehStyles } from "../screens/utils/tasbeehStyles";

const TasbeehScreen = () => {
  const navigation = useNavigation();

  const TasbeehButton = ({ label, screen }) => (
    <TouchableOpacity
      style={tasbeehStyles.button}
      onPress={() => navigation.navigate(screen)}
      activeOpacity={0.8}
    >
      <Text style={tasbeehStyles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={tasbeehStyles.container}>
      <Text style={tasbeehStyles.heading}>Tasbeeh 📿</Text>

      <TasbeehButton label="Tasbeeh-e-Fatima 📿" screen="TasbeehFatima" />
      <TasbeehButton label="General Zikr Counter 📿" screen="TasbeehCounter" />
    </View>
  );
};

export default TasbeehScreen;
