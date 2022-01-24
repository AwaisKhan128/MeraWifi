import { react, useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";
import Product from "../Components/Product";

import EyeGlassesData from "../Components/EyeGlassesData";

import { FlatGrid } from "react-native-super-grid";
import ImageProducer, { MyCarousel } from "../Components/Carousel";
import Wrapper from "../Components/Wrapper";
import BannerWrapper from "../Components/BannerWrapper";
import AdvanceCarousel from "../Components/Carousel";

// import { SliderBox } from "react-native-image-slider-box";

const Item = ({ title, uri }) => (
  <View style={styles.item}>
    <Image
      source={{
        uri: { uri },
      }}
    ></Image>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function ProfileScreen() {
  // ---Check Device OS ---
  const width = Dimensions.get("window").width;

  const renderItem = ({ item }) => <Item title={item.title} uri={item.uri} />;
  const StaticProductImage =
    "https://www.gkboptical.com/pub/static/version1635416652/frontend/Gkb/Gkboptical/en_US/images/New-arrival-web-banner.jpg";

  const images = [
    "https://i.pinimg.com/originals/e4/dc/76/e4dc76d4f9cc82113f46ee4f7ad29392.jpg",
    "https://i.ytimg.com/vi/UW_UkgfARPE/maxresdefault.jpg",
    "https://media.istockphoto.com/photos/banner-with-collection-of-eyeglasses-over-pastel-background-optical-picture-id1248750463?k=20&m=1248750463&s=170667a&w=0&h=Bzm7RGCAPy3_XoWKM7gc4T0JpLX15MtvcgG7Di_VRtM=",
  ];


  

  return (
    <Wrapper
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <BannerWrapper height={width <= 200 ? "30%" : "50%"}>
        {/* {<CarousalRenderer images={images} />} */}
        {<AdvanceCarousel images={images}/>}
      </BannerWrapper>

      <FlatGrid
        itemDimension={300}
        data={EyeGlassesData}
        scrollEnabled
        // staticDimension={300}
        // fixed
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => <Product product={item}></Product>}
      />
    </Wrapper>
  );
}
const styles = StyleSheet.create({
  titleText: {
    flex: 1,
    fontSize: 54,
    fontWeight: "bold",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  gridView: {
    height: "auto",
  },
  paraText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "normal",
    maxWidth: 500,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    margin: 5,
    width: 150,
    borderColor: "#000000",
    backgroundColor: "transparent",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  items2: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    margin: 20,
  },
  title: {
    fontSize: 32,
  },
});
