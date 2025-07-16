import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Vibration,
  Modal,
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
  const [showModal, setShowModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [index]);

  const animateModal = () => {
    scaleAnim.setValue(0.5);
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 5,
      tension: 150,
    }).start();
  };

  const handleCount = () => {
    if (count + 1 >= phrases[index].limit) {
      Vibration.vibrate(300);

      if (index + 1 < phrases.length) {
        setIndex(index + 1);
        setCount(0);
      } else {
        setShowModal(true);
        animateModal();
        setIndex(0);
        setCount(0);
      }
    } else {
      setCount(count + 1);
    }
  };

  const confirmReset = () => {
    setShowResetModal(true);
    animateModal();
  };

  const performReset = () => {
    setIndex(0);
    setCount(0);
    setShowResetModal(false);
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

        <AnimatedCircleButton onPress={handleCount} />

        <TouchableOpacity
          style={tasbeehStyles.resetButton}
          onPress={confirmReset}
        >
          <Text style={tasbeehStyles.resetText}>Reset</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* ✅ Completion Modal */}
      <Modal transparent visible={showModal} animationType="none">
        <View style={tasbeehStyles.modalOverlay}>
          <Animated.View
            style={[
              tasbeehStyles.modalContent,
              { transform: [{ scale: scaleAnim }] },
            ]}
          >
            <Text style={tasbeehStyles.modalTitle}>✨ Completed</Text>
            <Text style={tasbeehStyles.modalText}>
              You have completed Tasbeeh-e-Fatima
            </Text>
            <TouchableOpacity
              style={tasbeehStyles.modalButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={tasbeehStyles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>

      {/* ✅ Reset Confirmation Modal */}
      <Modal transparent visible={showResetModal} animationType="none">
        <View style={tasbeehStyles.modalOverlay}>
          <Animated.View
            style={[
              tasbeehStyles.modalContent,
              { transform: [{ scale: scaleAnim }] },
            ]}
          >
            <Text style={tasbeehStyles.modalTitle}>Reset Counter</Text>
            <Text style={tasbeehStyles.modalText}>
              Are you sure you want to reset?
            </Text>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <TouchableOpacity
                style={tasbeehStyles.modalButton}
                onPress={() => setShowResetModal(false)}
              >
                <Text style={tasbeehStyles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tasbeehStyles.modalButton}
                onPress={performReset}
              >
                <Text style={tasbeehStyles.modalButtonText}>Reset</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

export default TasbeehFatimaScreen;
