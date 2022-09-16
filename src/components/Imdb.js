import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";

const Imdb = ({ imdb = "-/-" }) => {
  return (
    <View style={styles.imdbWrapper}>
      <IconButton
        icon="star"
        iconColor="#FFC319"
        size={14}
        onPress={() => console.log("Pressed")}
        style={styles.starIcon}
      />
      <Text style={styles.imdbText}>{imdb} IMDb</Text>
    </View>
  );
};

export default Imdb;

const styles = StyleSheet.create({
  imdbWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  starIcon: {
    width: 12,
    height: 16,
    margin: 0,
    marginRight: 4,
  },
  imdbText: {
    fontWeight: "400",
    fontSize: 12,
    color: "#9C9C9C",
    letterSpacing: 1,
  },
});
