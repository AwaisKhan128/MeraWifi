import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import WebView from "react-native-webview";
import GlassesView from "./GlassesView";
import BeautyWebView from "react-native-beauty-webview";
import Wrapper from "./Wrapper";
import { SafeAreaView } from "react-native";

const Product = (props) => {
  const [VTO, setVTO] = useState(false);

  const ActivityIndicatorLoadingView = () => {
    return (
      <ActivityIndicator
        color="#009688"
        size="large"
        style={styles.ActivityIndicatorStyle}
      />
    );
  };

  const ProductVirtualTryOn = (val) => {
    // console.log(props)
    setVTO(val);
  };

  const { name, brand, price, productImage, glassesID } = props.product;
  return (
    <Wrapper>
      {VTO && (
        <GlassesView
          VTO={true}
          resetVTO={ProductVirtualTryOn}
          glass={glassesID}
        />)}

      <SafeAreaView
        style={{
          alignItems: "center",
          margin: "1%",
          borderWidth: 0.55,
          
        }}>
        <Image
          style={{
            width: "100%",
            height: 200,
            shadowRadius: 2,
            shadowColor: "gray",
          }}
          source={{
            uri: productImage,
          }}/>

        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            alignItems: "center",
          }}
        >
          Brand: {brand}
        </Text>
        <Text
          style={{
            alignItems: "center",
          }}
        >
          Price: ${price}
        </Text>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              margin: 5,
              width: 'auto',
              borderColor: "#000000",
              backgroundColor: "0000ffff",
              alignItems: "center",
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
            }}
            id={glassesID}
            onPress={() => {
              // console.log(glassesID);
              ProductVirtualTryOn(true);
            }}
          >
            <Text>Try On</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 5,
              width: 'auto',
              borderColor: "#000000",
              backgroundColor: "#378821",
              alignItems: "center",
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>

        {/* <Button style={
          {
            width:100,
            height:20,
            borderWidth:1,
          }
        }
        title="Try On"
        id={glassesID}
        
        onPress={
          ()=>{
            console.log( glassesID)
          }
        }>

        </Button> */}
      </SafeAreaView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "90%",
  },
  modalContainer: {
    backgroundColor: "white",
    width: "90%",
    height: "90%",
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Product;
