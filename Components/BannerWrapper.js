import React from "react";
import { SafeAreaView ,View} from "react-native";
const BannerWrapper = (props) => {
  return (
    <View
      style={{
        alignItems: "center",
        height: '40%',
        width: "100%",
        borderBottomColor: "#388993",
        // borderWidth: 2,
        borderBottomWidth:2,
        alignContent:'center',
        justifyContent:'center'
      }}
    >
      {props.children}
    </View>
  );
};

export default BannerWrapper;
