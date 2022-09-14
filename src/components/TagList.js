import { FlatList, StyleSheet, View } from "react-native";
import Tag from "./Tag";

const TagList = ({ tags }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tags}
        renderItem={({ item }) => (
          <Tag text={item} onPress={() => console.log("Pressed")} />
        )}
        keyExtractor={(item, index) => index}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TagList;
