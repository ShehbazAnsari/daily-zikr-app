import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Vibration,
  Modal,
  Animated,
} from "react-native";
import { tasbeehStyles as styles } from "../screens/utils/tasbeehStyles";
import { Picker } from "@react-native-picker/picker";
import AnimatedCircleButton from "../components/AnimatedCircleButton";

const zikrs = [
  { label: "Select a Zikr", value: null },
  { label: "Astaghfirullah", value: "أَسْتَغْفِرُ اللّٰهَ" },
  { label: "SubhanAllah", value: "سُبْحَانَ ٱللَّٰهِ" },
  { label: "Alhamdulillah", value: "ٱلْـحَمْدُ لِلّٰهِ" },
  { label: "Allahu Akbar", value: "ٱللّٰهُ أَكْبَرُ" },
  { label: "La ilaha illallah", value: "لَا إِلٰهَ إِلَّا ٱللّٰهُ" },
  {
    label: "SubhanAllahi wa bihamdihi",
    value: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
  },
  {
    label: "La ilaha illa Anta Subhanaka inni kuntu minaz-zalimeen",
    value:
      "لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ ٱلظَّالِمِينَ",
  },
  {
    label: "Hasbunallahu wa ni'mal wakeel",
    value: "حَسْبُنَا ٱللّٰهُ وَنِعْمَ ٱلْوَكِيلُ",
  },
  {
    label: "La hawla wa la quwwata illa billah",
    value: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللّٰهِ",
  },
  {
    label: "Rabbi inni lima anzalta ilayya min khayrin faqir",
    value: "رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
  },
  {
    label: "Rabbi zidni ilma",
    value: "رَّبِّ زِدْنِي عِلْمًا",
  },
];

const TasbeehCounterScreen = () => {
  const [selectedZikr, setSelectedZikr] = useState(null);
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [selectedZikr]);

  const animateModal = () => {
    scaleAnim.setValue(0.5);
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 5,
      tension: 150,
    }).start();
  };

  const handleTap = () => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount % 100 === 0) {
      Vibration.vibrate(300);
      setShowModal(true);
      animateModal();
    }
  };

  const handleReset = () => {
    setCount(0);
    setSelectedZikr(null);
  };

  const confirmReset = () => {
    setShowResetModal(true);
    animateModal();
  };

  const performReset = () => {
    setCount(0);
    setShowResetModal(false);
  };
  return (
    <View style={styles.container}>
      {/* <Picker
        selectedValue={selectedZikr}
        onValueChange={(itemValue) => {
          setSelectedZikr(itemValue);
          setCount(0);
          Vibration.vibrate(300); // vibrate on zikr change
        }}
        style={{
          width: "100%",
          marginBottom: 20,
          backgroundColor: "#FFF2D5",
          color: "#A56C43",
        }}
        mode="dropdown"
        dropdownIconColor="#A56C43"
      >
        {zikrs.map((zikr, index) => (
          <Picker.Item key={index} label={zikr.label} value={zikr.value} />
        ))}
      </Picker> */}
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedZikr}
          onValueChange={(itemValue) => {
            setSelectedZikr(itemValue);
            setCount(0);
            Vibration.vibrate(300);
          }}
          mode="dropdown"
          dropdownIconColor="#A56C43"
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          {zikrs.map((zikr, index) => (
            <Picker.Item key={index} label={zikr.label} value={zikr.value} />
          ))}
        </Picker>
      </View>

      {selectedZikr && (
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.arabicText}>{selectedZikr}</Text>
        </Animated.View>
      )}

      {/* {!selectedZikr && (
        <Text style={styles.heading}>Tap below to start counting</Text>
      )} */}

      <Text style={styles.count}>{count}</Text>

      <AnimatedCircleButton onPress={handleTap} />

      <TouchableOpacity style={styles.resetButton} onPress={confirmReset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>

      {/* 🎉 Completion Modal */}
      <Modal transparent visible={showModal} animationType="none">
        <View style={styles.modalOverlay}>
          <Animated.View
            style={[styles.modalContent, { transform: [{ scale: scaleAnim }] }]}
          >
            <Text style={styles.modalTitle}>✨ {count} Reached</Text>
            <Text style={styles.modalText}>
              You’ve completed {count} counts of Zikr!
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
      {/* ✅ Reset Confirmation Modal */}
      <Modal transparent visible={showResetModal} animationType="none">
        <View style={styles.modalOverlay}>
          <Animated.View
            style={[styles.modalContent, { transform: [{ scale: scaleAnim }] }]}
          >
            <Text style={styles.modalTitle}>Reset Counter</Text>
            <Text style={styles.modalText}>
              Are you sure you want to reset?
            </Text>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <TouchableOpacity
                style={styles.resetButton}
                onPress={() => setShowResetModal(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.resetButton}
                onPress={performReset}
              >
                <Text style={styles.resetText}>Reset</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

export default TasbeehCounterScreen;
