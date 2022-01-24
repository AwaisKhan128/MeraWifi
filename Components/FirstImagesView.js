import react from "react";
import { View } from "react-native";

const FirstImagesView = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flexDirection: "column",
        }}
      >
          <Image
          style={{
            width: 150,
            height: 150,
          }}
          source={{
            uri: productImage,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {props.name}
        </Text>
        <Text
          style={{
            alignItems: "center",
          }}
        >
          Brand: {props.brand}
        </Text>
        <Text
          style={{
            alignItems: "center",
          }}
        >
          Price: {props.price}
        </Text>
      </View>
    </View>
  );
};
