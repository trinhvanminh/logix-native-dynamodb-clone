import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";

function ProfileScreen({ navigation }) {
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
  console.log({ isAuthenticated });
  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate("Auth");
    } else {
      // get user profile
    }
  }, [isAuthenticated]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Movies"
        onPress={() => {
          navigation.navigate("Movies");
        }}
      />
    </View>
  );
}

export default ProfileScreen;
