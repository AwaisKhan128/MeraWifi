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
import Product from "../Components/Product";
import FashionWear from "../Components/FashionWear";
import CarousalRenderer from "../Components/Crousal";
import Wrapper from "../Components/Wrapper";
import { FlatGrid } from "react-native-super-grid";
import BannerWrapper from "../Components/BannerWrapper";
import AdvanceCarousel from "../Components/Carousel";

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

export default function SavedScreen() {
  const width = Dimensions.get("window").width;
  const renderItem = ({ item }) => <Item title={item.title} uri={item.uri} />;
  const images = [
    "https://media.allure.com/photos/60a20195606cc6e91f9b0a6d/16:9/w_2560%2Cc_limit/Glasses_Online_social.jpg",
    "https://iwearglasses.co.uk/media/wysiwyg/demo/infortis/ultimo/slideshow/premium_range.jpg",
    "https://www.clearly.co.nz/thelook/wp-content/uploads/2019/06/Glassesversuscontact_header_EN-1050x700.jpg",
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
        data={FashionWear}
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
