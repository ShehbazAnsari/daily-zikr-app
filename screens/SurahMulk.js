import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { Asset } from "expo-asset";
import { styles } from "./utils/styles";

const imageList = [
  require("../assets/images/surah_mulk/surahMulkPage01.jpg"),
  require("../assets/images/surah_mulk/surahMulkPage02.jpg"),
  require("../assets/images/surah_mulk/surahMulkPage03.jpg"),
  require("../assets/images/surah_mulk/surahMulkPage04.jpg"),
];

const { width, height } = Dimensions.get("window");

const SurahMulkScreen = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Asset.loadAsync(imageList);
        setReady(true);
      } catch (error) {
        console.warn("Error preloading images", error);
      }
    };

    preloadImages();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.page}>
      <Image source={item} style={styles.pageImage} resizeMode="stretch" />
    </View>
  );

  if (!ready) {
    return (
      <View style={styles.page}>
        <ActivityIndicator size="large" color="#A56C43" />
      </View>
    );
  }

  return (
    <FlatList
      data={imageList}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      bounces={false}
      inverted
    />
  );
};

export default SurahMulkScreen;
