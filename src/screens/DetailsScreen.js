import { useEffect } from "react";
import { Text, View, Button } from "react-native";

function DetailsScreen({ route, navigation }) {
  const { movieId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>MovieId: {JSON.stringify(movieId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Details", {
            movieId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        title="Go to Movies"
        onPress={() => navigation.navigate("Movies")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default DetailsScreen;
