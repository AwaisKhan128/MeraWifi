import react from "react";
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
import { FlatGrid } from "react-native-super-grid";
import BannerWrapper from "../Components/BannerWrapper";
import CarousalRenderer from "../Components/Crousal";
import Product from "../Components/Product";
import SunglassesData from "../Components/SunglassesData";

import Wrapper from "../Components/Wrapper";
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

export default function SettingsScreen() {
  const width = Dimensions.get("window").width;
  const renderItem = ({ item }) => <Item title={item.title} uri={item.uri} />;
  const images = [
    "https://i.ytimg.com/vi/DQS8s5aoUNQ/maxresdefault.jpg",
    "https://i.pinimg.com/originals/a0/d6/a0/a0d6a0650926a301d493aa205d6301cb.png",
    "https://familyeyecare.co.uk/wp-content/uploads/2015/04/sunglasses-in-harrow.jpg",
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
        data={SunglassesData}
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
