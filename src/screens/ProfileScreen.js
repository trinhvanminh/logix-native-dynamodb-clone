import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearData } from "../helpers/AsyncStorage";
import { setAuthenticated } from "../store/authReducer";

function ProfileScreen({ navigation }) {
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate("Login");
    } else {
      // get user profile
    }
  }, [isAuthenticated, navigation]);

  const handleLogout = () => {
    clearData("token")
      .then(() => {
        console.log("logged out");
        dispatch(setAuthenticated(false));
      })
      .catch((err) => console.log(err));
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
      {isAuthenticated ? (
        <View>
          <Button
            title="Go to Movies"
            onPress={() => {
              navigation.navigate("Movies");
            }}
          />

          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        <Button
          title="Login Now"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      )}
    </View>
  );
}

export default ProfileScreen;
