import React from "react";
import { homeStyles } from "../screens/utils/homeStyles";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  const renderButton = (label, screen, delay) => {
    const scale = new Animated.Value(0);

    Animated.spring(scale, {
      toValue: 1,
      delay,
      useNativeDriver: true,
    }).start();

    return (
      <Animated.View style={{ transform: [{ scale }], marginBottom: 20 }}>
        <TouchableOpacity
          onPress={() => handlePress(screen)}
          style={homeStyles.button}
          activeOpacity={0.9}
        >
          <Text
            style={homeStyles.buttonText}
            numberOfLines={1}
            ellipsizeMode="tail"
            adjustsFontSizeToFit
            minimumFontScale={0.9}
          >
            {label}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.heading}>Tasbeeh Fatima & Mothers Zikr</Text>
      {renderButton("Surah Yaseen", "SurahYaseen", 100)}
      {renderButton("Surah Mulk", "SurahMulk", 200)}
      {renderButton("Tasbeeh", "Tasbeeh", 300)}
      {renderButton("For Expecting Mothers", "ExpectingMothers", 400)}
      {/* Screen will be added later */}
    </View>
  );
};

export default HomeScreen;
