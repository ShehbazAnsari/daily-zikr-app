import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  ActivityIndicator,
  Dimensions,
  Text,
} from "react-native";
import { Asset } from "expo-asset";
import { styles } from "./utils/styles";

const imageList = [
  // require("../assets/images/surah_yaseen/tajweedDetails.jpg"),
  require("../assets/images/surah_yaseen/page01.jpg"),
  require("../assets/images/surah_yaseen/page02.jpg"),
  require("../assets/images/surah_yaseen/page03.jpg"),
  require("../assets/images/surah_yaseen/page04.jpg"),
  require("../assets/images/surah_yaseen/page05.jpg"),
  require("../assets/images/surah_yaseen/page06.jpg"),
  require("../assets/images/surah_yaseen/page07.jpg"),
  require("../assets/images/surah_yaseen/page08.jpg"),
];

const { width, height } = Dimensions.get("window");
const SurahYaseenScreen = () => {
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
        <Text style={styles.loaderText}>
          “Surah Yaseen is the heart of the Qur’an” – Prophet Muhammad ﷺ
        </Text>
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

export default SurahYaseenScreen;
