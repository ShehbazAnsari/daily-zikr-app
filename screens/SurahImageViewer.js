import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Image,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { Asset } from "expo-asset";

const { width, height } = Dimensions.get("window");

const SurahImageViewer = ({ route }) => {
  const { surahName } = route.params;
  const [imageList, setImageList] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      try {
        let images;
        switch (surahName) {
          case "Surah Maryam":
            images = [
              require("../assets/images/surah_maryam/surahMaryamPage01.jpg"),
              require("../assets/images/surah_maryam/surahMaryamPage02.jpg"),
              require("../assets/images/surah_maryam/surahMaryamPage03.jpg"),
              require("../assets/images/surah_maryam/surahMaryamPage04.jpg"),
              require("../assets/images/surah_maryam/surahMaryamPage05.jpg"),
              require("../assets/images/surah_maryam/surahMaryamPage06.jpg"),
              require("../assets/images/surah_maryam/surahMaryamPage07.jpg"),
              require("../assets/images/surah_maryam/surahMaryamPage08.jpg"),
              require("../assets/images/surah_maryam/surahMaryamPage09.jpg"),
              require("../assets/images/surah_maryam/surahMaryamPage10.jpg"),
              require("../assets/images/surah_maryam/surahMaryamPage11.jpg"),
            ];
            break;
          case "Surah Yusuf":
            images = [
              require("../assets/images/surah_yusuf/surahYusufPage01.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage02.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage03.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage04.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage05.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage06.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage07.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage08.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage09.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage10.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage11.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage12.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage13.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage14.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage15.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage16.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage17.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage18.jpg"),
              require("../assets/images/surah_yusuf/surahYusufPage19.jpg"),
            ];
            break;
          case "Surah Al-Fatiha":
            images = [
              require("../assets/images/surah_alfatiha/surahAlFatihaPage01.jpg"),
            ];
            break;
          case "Surah Al-Inshiqaq":
            images = [
              require("../assets/images/surah_al_inshiqaq/surahAlInshiqaqPage01.jpg"),
              require("../assets/images/surah_al_inshiqaq/surahAlInshiqaqPage02.jpg"),
            ];
            break;
          case "Surah Luqman":
            images = [
              require("../assets/images/surah_luqman/surahLuqmanPage01.jpg"),
              require("../assets/images/surah_luqman/surahLuqmanPage02.jpg"),
              require("../assets/images/surah_luqman/surahLuqmanPage03.jpg"),
              require("../assets/images/surah_luqman/surahLuqmanPage04.jpg"),
              require("../assets/images/surah_luqman/surahLuqmanPage05.jpg"),
              require("../assets/images/surah_luqman/surahLuqmanPage06.jpg"),
              require("../assets/images/surah_luqman/surahLuqmanPage07.jpg"),
            ];
            break;
          default:
            images = [];
        }

        await Asset.loadAsync(images);
        setImageList(images);
        setReady(true);
      } catch (e) {
        console.warn("Image load error", e);
      }
    };

    loadImages();
  }, [surahName]);

  const renderItem = ({ item }) => (
    <View style={{ width, height, justifyContent: "center" }}>
      <Image
        source={item}
        resizeMode="stretch"
        style={{ width, height, resizeMode: "stretch" }}
      />
    </View>
  );

  if (!ready) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
      bounces={true}
      inverted
    />
  );
};

export default SurahImageViewer;
