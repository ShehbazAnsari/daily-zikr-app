import React, { useRef } from "react";
import { Text, Animated, TouchableWithoutFeedback } from "react-native";
import { tasbeehStyles as styles } from "../screens/utils/tasbeehStyles";

const AnimatedCircleButton = ({ onPress }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
      speed: 20,
      bounciness: 10,
    }).start();

    // 🔥 Instant feedback
    onPress();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 10,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[styles.circleButton, { transform: [{ scale: scaleAnim }] }]}
      >
        <Text style={styles.resetText}>Tap</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default AnimatedCircleButton;
