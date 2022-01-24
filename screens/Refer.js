import * as React from "react";
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

export default function ReferScreen() {
  const renderItem = ({ item }) => <Item title={item.title} uri={item.uri} />;
  const StaticProductImage =
    "https://www.gkboptical.com/pub/static/version1635416652/frontend/Gkb/Gkboptical/en_US/images/New-arrival-web-banner.jpg";

  const products = [
    {
      brand: "John Jacobs",
      type: "Eye glasses",
      name: "John Jacob Blue rectangle glasses",
      price: 50,
      productImage:
        "https://images.ctfassets.net/u4vv676b8z52/7gDQHxOn1ciYucQl4txQdF/1c5a463ff509944441a64b8d975d90dc/Hero_Article_MensEyeglasses-Most-Durable-compressor.jpg?fm=jpg&q=80",
      glassesID: "rayban_aviator_or_vertFlash",
    },
    {
      brand: "John Jacobs",
      type: "Eye glasses",
      name: "John Jacob Blue rectangle glasses",
      price: 50,
      productImage: StaticProductImage,
      glassesID: "polaroid_6016_blue_grey",
    },
    {
      brand: "John Jacobs",
      type: "Eye glasses",
      name: "John Jacob Blue rectangle glasses",
      price: 50,
      productImage: StaticProductImage,
      glassesID: "marshal_argent_bleudegrade",
    },
    {
      brand: "John Jacobs",
      type: "Eye glasses",
      name: "John Jacob Blue rectangle glasses",
      price: 50,
      productImage: StaticProductImage,
      glassesID: "blaze_clubmaster_noir_grisdegrade",
    },
  ];

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      uri: "https://www.gkboptical.com/pub/static/version1635416652/frontend/Gkb/Gkboptical/en_US/images/New-arrival-web-banner.jpg",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      uri: "https://www.gkboptical.com/pub/static/version1635416652/frontend/Gkb/Gkboptical/en_US/images/New-arrival-web-banner.jpg",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      uri: "https://www.gkboptical.com/pub/static/version1635416652/frontend/Gkb/Gkboptical/en_US/images/New-arrival-web-banner.jpg",
    },
  ];

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 200,
          }}
        >
          <Image
            resizeMode={"contain"}
            style={{ flex: 1, width: "100%", height: 400 }}
            source={{
              uri: "https://www.gkboptical.com/pub/static/version1635416652/frontend/Gkb/Gkboptical/en_US/images/New-arrival-web-banner.jpg",
            }}
          ></Image>

          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                margin: 5,
                padding: 5,
              }}
            >
              <TouchableOpacity style={styles.button}>
                <Text>Eye Wear</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "column",
                margin: 5,
                padding: 5,
              }}
            >
              <TouchableOpacity style={styles.button}>
                <Text>Sunglasses</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <FlatList
        numColumns={1}
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Product product={item}></Product>}
      ></FlatList>
    </SafeAreaView>
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
