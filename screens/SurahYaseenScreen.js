import React from "react";
import { FlatList, Image, View, Dimensions } from "react-native";
import { styles } from "./utils/styles";

const imageList = [
  require("../assets/images/surah_yaseen/tajweedDetails.jpg"),
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

const SurahScreen = () => {
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

export default SurahScreen;
