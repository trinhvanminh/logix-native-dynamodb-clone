import { FontAwesome5, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, TouchableOpacity, View } from "react-native";
import LogixLogo from "../assets/img/logix-logo.png";
import MenuIcon from "../components/svgs/MenuIcon";
import MoviesScreen from "./MoviesScreen";
import ProfileScreen from "./ProfileScreen";
import SavedScreen from "./SavedScreen";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../helpers/AsyncStorage";
import { setAuthenticated } from "../store/authReducer";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getData("token").then((token) => {
      if (token) {
        dispatch(setAuthenticated(true));
        return;
      }
      dispatch(setAuthenticated(false));
    });
  }, [dispatch]);

  const mainScreenOptions = (navigation) => {
    return {
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => console.log("menu pressed")}
          style={{ marginLeft: 16 }}
        >
          <MenuIcon />
        </TouchableOpacity>
      ),
      headerTitle: (props) => (
        <View {...props}>
          <Image style={{ width: 120, height: 50 }} source={LogixLogo} />
        </View>
      ),
      headerTitleAlign: "center",
      headerRight: () => (
        <TouchableOpacity
          onPress={() => console.log("notifications pressed")}
          style={{ marginRight: 16 }}
        >
          <MaterialIcons name="notifications" size={24} color="#110E47" />
        </TouchableOpacity>
      ),
    };
  };

  return (
    <Tab.Navigator
      initialRouteName="Movies"
      screenOptions={{
        tabBarActiveTintColor: "#110E47",
      }}
    >
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        // https://reactnavigation.org/docs/native-stack-navigator#options
        options={({ navigation }) => {
          const otps = mainScreenOptions(navigation);
          return {
            ...otps,
            tabBarLabel: "Movies",
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="film" color={color} size={size} />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={({ navigation }) => {
          const otps = mainScreenOptions(navigation);
          return {
            ...otps,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="favorite" color={color} size={size} />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => {
          const otps = mainScreenOptions(navigation);
          return {
            ...otps,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user-alt" color={color} size={size} />
            ),
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
