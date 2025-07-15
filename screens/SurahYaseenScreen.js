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

// import React, { useState } from "react";
// import { FlatList, Image, View, Dimensions, Animated } from "react-native";
// import { styles } from "./utils/styles";

// const imageList = [
//   require("../assets/images/surah_yaseen/tajweedDetails.jpg"),
//   require("../assets/images/surah_yaseen/page01.jpg"),
//   require("../assets/images/surah_yaseen/page02.jpg"),
//   require("../assets/images/surah_yaseen/page03.jpg"),
//   require("../assets/images/surah_yaseen/page04.jpg"),
//   require("../assets/images/surah_yaseen/page05.jpg"),
//   require("../assets/images/surah_yaseen/page06.jpg"),
//   require("../assets/images/surah_yaseen/page07.jpg"),
//   require("../assets/images/surah_yaseen/page08.jpg"),
// ];

// const SurahYaseenScreen = () => {
//   const fadeAnim = useState(new Animated.Value(0))[0];
//   const renderItem = ({ item }) => {
//     const onLoad = () => {
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 300, // smooth fade
//         useNativeDriver: true,
//       }).start();
//     };

//     return (
//       <View style={styles.page}>
//         <Animated.Image
//           source={item}
//           style={[styles.pageImage, { opacity: fadeAnim }]}
//           resizeMode="stretch"
//           onLoad={onLoad}
//         />
//       </View>
//     );
//   };

//   return (
//     <FlatList
//       data={imageList}
//       renderItem={renderItem}
//       keyExtractor={(_, index) => index.toString()}
//       horizontal
//       pagingEnabled
//       initialNumToRender={1}
//       maxToRenderPerBatch={1}
//       windowSize={2}
//       showsHorizontalScrollIndicator={false}
//       bounces={false}
//       inverted
//     />
//   );
// };

// export default SurahYaseenScreen;

//final one
// import React, { useState, useEffect } from "react";
// import {
//   FlatList,
//   View,
//   Image,
//   Animated,
//   ActivityIndicator,
//   Dimensions,
// } from "react-native";
// import { styles } from "./utils/styles";

// const imageList = [
//   require("../assets/images/surah_yaseen/tajweedDetails.jpg"),
//   require("../assets/images/surah_yaseen/page01.jpg"),
//   require("../assets/images/surah_yaseen/page02.jpg"),
//   require("../assets/images/surah_yaseen/page03.jpg"),
//   require("../assets/images/surah_yaseen/page04.jpg"),
//   require("../assets/images/surah_yaseen/page05.jpg"),
//   require("../assets/images/surah_yaseen/page06.jpg"),
//   require("../assets/images/surah_yaseen/page07.jpg"),
//   require("../assets/images/surah_yaseen/page08.jpg"),
// ];

// const SurahYaseenScreen = () => {
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     const preloadImages = async () => {
//       const prefetchTasks = imageList.map((img) =>
//         Image.prefetch(Image.resolveAssetSource(img).uri)
//       );
//       await Promise.all(prefetchTasks);
//       setReady(true);
//     };

//     preloadImages();
//   }, []);
//   const fadeAnim = useState(new Animated.Value(0))[0];
//   const renderItem = ({ item }) => {
//     const handleImageLoad = () => {
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 50,
//         useNativeDriver: true,
//       }).start();
//     };

//     return (
//       <View style={styles.page}>
//         <Animated.Image
//           source={item}
//           style={[styles.pageImage, { opacity: fadeAnim }]}
//           resizeMode="stretch"
//           onLoad={handleImageLoad}
//         />
//       </View>
//     );
//   };

//   if (!ready) {
//     return (
//       <View style={styles.page}>
//         <ActivityIndicator size="large" color="#A56C43" />
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={imageList}
//       renderItem={renderItem}
//       keyExtractor={(_, index) => index.toString()}
//       horizontal
//       pagingEnabled
//       initialNumToRender={1}
//       maxToRenderPerBatch={1}
//       windowSize={2}
//       showsHorizontalScrollIndicator={false}
//       bounces={false}
//       inverted
//     />
//   );
// };

// export default SurahYaseenScreen;
