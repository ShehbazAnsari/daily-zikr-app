import React from "react";
import { FlatList, Image, View, Dimensions } from "react-native";
import { styles } from "./utils/styles";

const imageList = [
  require("../assets/images/surah_mulk/surahMulkPage01.jpg"),
  require("../assets/images/surah_mulk/surahMulkPage02.jpg"),
  require("../assets/images/surah_mulk/surahMulkPage03.jpg"),
  require("../assets/images/surah_mulk/surahMulkPage04.jpg"),
];

const { width, height } = Dimensions.get("window");

const SurahMulkScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.page}>
      <Image source={item} style={styles.pageImage} resizeMode="stretch" />
    </View>
  );

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
