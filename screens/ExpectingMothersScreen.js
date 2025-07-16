// screens/ExpectingMothersScreen.js

import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Platform,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { expectingStyles } from "../screens/utils/expectingStyles";

const surahs = [
  {
    name: "Surah Al-Fatiha",
    benefit: "For general blessings and protection",
  },
  {
    name: "Surah Luqman",
    benefit: "For wisdom and protection",
  },
  {
    name: "Surah Maryam",
    benefit: "For ease in childbirth and righteous offspring",
  },
  {
    name: "Surah Yusuf",
    benefit: "For beautiful character and appearance of the baby",
  },
  {
    name: "Surah Al-Inshiqaq",
    benefit: "For ease in labor",
  },
];

const ExpectingMothersScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnimList = useRef(surahs.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    // Fade in whole screen
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Animate buttons one by one
    scaleAnimList.forEach((anim, index) => {
      Animated.spring(anim, {
        toValue: 1,
        delay: 150 * index,
        useNativeDriver: true,
      }).start();
    });
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
        paddingBottom: 40,
        backgroundColor: "#FFF2D5",
      }}
    >
      <Text style={expectingStyles.heading}>For Expecting Mothers</Text>

      <ScrollView contentContainerStyle={expectingStyles.scrollContainer}>
        {surahs.map((surah, index) => (
          <Animated.View
            key={index}
            style={{
              transform: [{ scale: scaleAnimList[index] }],
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              style={expectingStyles.surahButton}
              onPress={() =>
                navigation.navigate("SurahImageViewer", {
                  surahName: surah.name,
                })
              }
            >
              <Text style={expectingStyles.surahName}>{surah.name}</Text>
              {surah.benefit ? (
                <Text style={expectingStyles.surahBenefit}>
                  ✨ {surah.benefit}
                </Text>
              ) : null}
            </TouchableOpacity>
          </Animated.View>
        ))}
      </ScrollView>
    </Animated.View>
  );
};

export default ExpectingMothersScreen;
