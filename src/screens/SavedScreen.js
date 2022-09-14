import * as React from "react";
import { Button, Text, View } from "react-native";

function SavedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Saved Screen</Text>
      <Button
        title="Go to Movies"
        onPress={() => {
          navigation.navigate("Movies");
        }}
      />
    </View>
  );
}

export default SavedScreen;
