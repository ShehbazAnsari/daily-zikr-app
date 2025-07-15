import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Vibration,
  Alert,
  Platform,
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
];
const TasbeehCounterScreen = () => {
  const [selectedZikr, setSelectedZikr] = useState(null);
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(100); // Default goal

  const handleTap = () => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount % 100 === 0) {
      Vibration.vibrate(300);
    }
  };

  const handleReset = () => {
    setCount(0);
    setSelectedZikr(null);
  };

  return (
    <View style={styles.container}>
      <Picker
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
      </Picker>

      {selectedZikr && <Text style={styles.arabicText}>{selectedZikr}</Text>}

      {!selectedZikr && (
        <Text style={styles.heading}>Tap below to start counting</Text>
      )}

      <Text style={styles.count}>{count}</Text>

      {/* old tap button styles */}
      {/* <TouchableOpacity
        style={styles.circleButton}
        onPress={handleTap}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Tap</Text>
      </TouchableOpacity> */}

      <AnimatedCircleButton onPress={handleTap} />

      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TasbeehCounterScreen;
