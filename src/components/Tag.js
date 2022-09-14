import { Chip } from "react-native-paper";
import { StyleSheet } from "react-native";

const Tag = ({ iconName, onPress, text }) => {
  const handleTagPress = () => {
    onPress();
  };
  return (
    <Chip
      icon={iconName}
      onPress={handleTagPress}
      style={styles.chip}
      textStyle={styles.chipText}
    >
      {text}
    </Chip>
  );
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: "#DBE3FF",
    borderRadius: 100,
    width: 61,
    height: 18,
    justifyContent: "center",
    marginRight: 8,
  },
  chipText: {
    fontWeight: "400",
    fontSize: 8,
    lineHeight: 10,
    letterSpacing: 1,
    color: "#88A4E8",
  },
});

export default Tag;
