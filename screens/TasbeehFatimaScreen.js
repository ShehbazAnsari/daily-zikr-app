import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Vibration,
  Alert,
  Animated,
} from "react-native";
import { tasbeehStyles } from "../screens/utils/tasbeehStyles";
import AnimatedCircleButton from "../components/AnimatedCircleButton";
const phrases = [
  { text: "SubhanAllah", arabic: "سُبْحَانَ ٱللَّٰهِ", limit: 33 },
  { text: "Alhamdulillah", arabic: "ٱلْـحَمْدُ لِلّٰهِ", limit: 33 },
  { text: "Allahu Akbar", arabic: "ٱللّٰهُ أَكْبَرُ", limit: 34 },
];

const TasbeehFatimaScreen = () => {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [index]);

  const handleCount = () => {
    if (count + 1 >= phrases[index].limit) {
      Vibration.vibrate(300); // Vibrate only once when current zikr finishes

      if (index + 1 < phrases.length) {
        setIndex(index + 1);
        setCount(0);
      } else {
        Alert.alert("✨ Completed", "You have completed Tasbeeh-e-Fatima");
        setIndex(0);
        setCount(0);
      }
    } else {
      setCount(count + 1); // No vibration here
    }
  };

  const reset = () => {
    Alert.alert("Reset Counter", "Are you sure you want to reset?", [
      { text: "Cancel" },
      {
        text: "Reset",
        onPress: () => {
          setIndex(0);
          setCount(0);
        },
      },
    ]);
  };

  const progress = (count / phrases[index].limit) * 100;

  return (
    <View style={tasbeehStyles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={tasbeehStyles.heading}>{phrases[index].text}</Text>
        <Text style={tasbeehStyles.arabicText}>{phrases[index].arabic}</Text>
        <Text style={tasbeehStyles.count}>{count}</Text>

        <View style={tasbeehStyles.progressBarContainer}>
          <View
            style={[tasbeehStyles.progressBar, { width: `${progress}%` }]}
          />
        </View>

        {/* <TouchableOpacity
          style={tasbeehStyles.circleButton}
          onPress={handleCount}
        >
          <Text style={tasbeehStyles.buttonText}>Tap</Text>
        </TouchableOpacity> */}

        <AnimatedCircleButton onPress={handleCount} />

        <TouchableOpacity style={tasbeehStyles.resetButton} onPress={reset}>
          <Text style={tasbeehStyles.resetText}>Reset</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default TasbeehFatimaScreen;
