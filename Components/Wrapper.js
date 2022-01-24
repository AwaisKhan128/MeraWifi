import { react, SafeAreaView,ScrollView } from "react-native";
import { Animated,StyleSheet } from "react-native";

const Wrapper = (props) => {
    
  return (
      props.children
  );
};
export default Wrapper;

const styles = StyleSheet.create({
    container: {
      // paddingTop: 50,
    },
    tinyLogo: {
      flex:1,
      flexWrap:'wrap',
      width: 400,
      height: 'auto',
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