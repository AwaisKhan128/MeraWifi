import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  SafeAreaView,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import react from "react";
import NotificationsScreen from "./Components/navigation";
import ProfileScreen from "./screens/Profile";
import SettingsScreen from "./screens/Settings";
import ReferScreen from "./screens/Refer";
import SavedScreen from "./screens/Saved";
import DrawerItems from "./Components/DrawerItems";
import Carousel from "react-native-reanimated-carousel";
import Wrapper from "./Components/Wrapper";

export default function App() {
  const Drawer = createDrawerNavigator();
  const images = [
    "https://i.pinimg.com/originals/e4/dc/76/e4dc76d4f9cc82113f46ee4f7ad29392.jpg",
    "https://i.ytimg.com/vi/UW_UkgfARPE/maxresdefault.jpg",
    "https://media.istockphoto.com/photos/banner-with-collection-of-eyeglasses-over-pastel-background-optical-picture-id1248750463?k=20&m=1248750463&s=170667a&w=0&h=Bzm7RGCAPy3_XoWKM7gc4T0JpLX15MtvcgG7Di_VRtM=",
  ];

  return (
    <Wrapper>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.text}>Order now to save 20%</Text>
        </View>

        <View style={styles.Second_header}>
          <View style={styles.Dropbar_container}>
            <View style={styles.Dropbars}>
              <Text style={styles.text_1}>Home</Text>
            </View>

            <View style={styles.Dropbars}>
              <Text style={styles.text_1}>Details</Text>
            </View>

            <View style={styles.Dropbars}>
              <Text style={styles.text_1}>Contact</Text>
            </View>

            <View style={styles.Dropbars}>
              <Text style={styles.text}>Brand Template Look</Text>
            </View>
          </View>
        </View>

        <View></View>

        <StatusBar style="auto" />
      </SafeAreaView>

      <NavigationContainer>
        <Drawer.Navigator
          drawerType="front"
          initialRouteName="Profile"
          screenOptions={{
            activeTintColor: "#e91e63",
            itemStyle: { marginVertical: 10 },
          }}
        >
          {DrawerItems.map((drawer) => (
            // <Drawer.Screen key={drawer.name} name={drawer.name}/>
            <Drawer.Screen
              key={drawer.name}
              name={drawer.name}
              component={
                drawer.name === "Eye Glasses"
                  ? ProfileScreen
                  : drawer.name === "Sunglasses"
                  ? SettingsScreen
                  : drawer.name === "Fashion Wear"
                  ? SavedScreen
                  : ReferScreen
              }
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  header: {
    height: 40,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignContent: "space-between",
    flexDirection: "row",
    alignSelf: "auto",
  },
  Second_header: {
    height: 50,
    backgroundColor: "#ffffff",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    flexDirection: "row",
    paddingStart: 20,
    paddingEnd: 20,
  },
  text: {
    color: "#ffffff",
    height: 25,
    margin: 10,
    fontSize: 16,
    fontWeight: "normal",
    flexDirection: "column",
  },
  text_1: {
    color: "#000000",
    height: 25,
    margin: 10,
    fontSize: 16,
    fontWeight: "normal",
    flexDirection: "column",
  },
  Dropbars: {
    color: "#ffffff",
    height: 25,
    margin: 10,
    fontSize: 16,
    fontWeight: "normal",
    flexDirection: "column",
  },

  Dropbar_container: {
    color: "#ffffff",
    justifyContent: "center",
    alignContent: "space-around",
    flexDirection: "row",
  },
  top_bar: {
    color: "#ffffff",
    height: 25,
    margin: 10,
    fontSize: 20,
    fontWeight: "normal",
    flexDirection: "column",
  },
});
