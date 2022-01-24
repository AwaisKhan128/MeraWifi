import react, { useState, useEffect, useRef } from "react";
import WebView from "react-native-webview";
import React from "react";
import { Camera } from "expo-camera";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  StatusBar,
  BackHandler,
  Platform,
} from "react-native";
import BeautyWebView from "react-native-beauty-webview";

const GlassesView = (props) => {
  // console.log(props.location)
  const [newvTO, setvTO] = useState(props.VTO);
  var width = Dimensions.get("window").width; //full width
  var height = Dimensions.get("window").height; //full height

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const webViewRef = React.createRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  useEffect(() => {
    const backAction = () => {
      webViewRef.current.goBack();
      props.resetVTO(false);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const ActivityIndicatorLoadingView = () => {
    return (
      <ActivityIndicator
        color="#009688"
        size="large"
        style={styles.ActivityIndicatorStyle}
      />
    );
  };

  // useEffect( () =>{
  //     setvTO(props.VTO)
  // },[newvTO,setvTO])

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Modal visible={newvTO}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            {Platform.OS == "web" ? (
              <iframe
                id="inlineFrameExample"
                title="Inline Frame Example"
                width='100%'
                height='100%'
                src={"https://awaiskhan128.github.io/Frames?id="+ props.glass}
                allow="camera"
              ></iframe>
            ) : (
              <WebView
                style={{ flex: 1 }}
                source={{
                  uri:
                    "https://awaiskhan128.github.io/Frames?id=" + props.glass,
                }}
                // ref={webViewRef}
                originWhitelist={["*"]}
                allowsInlineMediaPlayback
                javaScriptEnabled
                scalesPageToFit
                mediaPlaybackRequiresUserAction={false}
                javaScriptEnabledAndroid
                useWebkit
                startInLoadingState={true}
                javaScriptEnabledAndroid
              />
            )}

            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  margin: 4,
                  width: 150,
                  borderColor: "#000000",
                  backgroundColor: "0000ffff",
                  alignItems: "center",
                  padding: 10,
                  borderWidth: 1,
                  borderRadius: 10,
                  flexDirection: "column",
                }}
                onPress={() => {
                  props.resetVTO(false);
                }}
              >
                <Text>Close it</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* <BeautyWebView
        visible={newvTO} // Required for open and close
        onPressClose={() => props.resetVTO(false)} // Required for closing the modal
        url={
          "https://www.eyebuydirect.com/sunglasses/frames/disclosure-gold-l-22248"
        }
        extraMenuItems={[
          {
            title: "Extra Item",
            onPress: () => console.log("Extra Menu Item Clicked"),
          },
        ]}
      /> */}

      <StatusBar style="auto" />
    </SafeAreaView>
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

export default GlassesView;
