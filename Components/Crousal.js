import React, { Component } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";

const deviceWidth = Dimensions.get("window").width;
const FIXED_BAR_WIDTH = 280;
const BAR_SPACE = 10;

export default class CarousalRenderer extends Component {
  numItems = this.props.images.length;
  itemWidth = FIXED_BAR_WIDTH / this.numItems - (this.numItems - 1) * BAR_SPACE;
  animVal = new Animated.Value(0);
  render() {
    let imageArray = [];
    let barArray = [];
    this.props.images.forEach((image, i) => {
      const thisImage = (
        <Image
          key={`image${i}`}
          source={{ uri: image }}
          style={{ width: deviceWidth }}
        />
      );
      imageArray.push(thisImage);

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
        extrapolate: "clamp",
      });

      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
              width: this.itemWidth,
              marginLeft: i === 0 ? 0 : BAR_SPACE,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.bar,
              {
                width: this.itemWidth,
                transform: [{ translateX: scrollBarVal }],
              },
            ]}
          />
        </View>
      );
      barArray.push(thisBar);
    });

    return (
      <SafeAreaView >
        <ScrollView
          horizontal
          contentInsetAdjustmentBehavior="automatic"
          // showsHorizontalScrollIndicator={false}
          pagingEnabled
          
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.animVal } } }],
            { useNativeDriver: false }
          )}
        >
          {
          imageArray
          }
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
  },
  tinyLogo: {
    flex: 1,
    flexWrap: "wrap",
    width: 400,
    height: "auto",
  },
  logo: {
    width: 66,
    height: 58,
  },
  barContainer: {
    position: "absolute",
    zIndex: 2,
    bottom: 20,
    flexDirection: "row",
  },
  skip: {
    position: "absolute",
    zIndex: 2,
    bottom: 20,
    flexDirection: "row",
  },
  track: {
    backgroundColor: "#ccc",
    overflow: "hidden",
    height: 2,
  },
  bar: {
    backgroundColor: "#5294d6",
    height: 2,
    position: "absolute",
    left: 0,
    top: 0,
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
    zIndex: 2,
  },
});
