import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const PlayButton = ({ text, textStyle, buttonStyle }) => {
  const textS = {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
    color: "#FFFFFF",
    ...textStyle,
  };
  const buttonS = {
    width: 45,
    height: 45,
    justifyContent: "center",
    backgroundColor: "white",
    paddingLeft: 18,
    borderRadius: 100,
    marginBottom: 8,
    ...buttonStyle,
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={buttonS}>
        <FontAwesome5 name="play" size={16} color="#110E47" />
      </TouchableOpacity>
      <Text style={textS}>{text}</Text>
    </View>
  );
};

export default PlayButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
