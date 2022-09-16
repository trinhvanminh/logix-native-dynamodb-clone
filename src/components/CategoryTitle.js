import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const CategoryTitle = ({
  title,
  buttonText = "See more",
  onButtonPress,
  style,
}) => {
  const handleButtonPress = () => {
    onButtonPress();
  };
  return (
    <View style={[styles.titleWrapper, style]}>
      <Text style={styles.titleText}>{title}</Text>
      {onButtonPress && (
        <Button
          mode="text"
          onPress={handleButtonPress}
          contentStyle={styles.seeMoreButton}
          labelStyle={styles.seeMoreButtonText}
        >
          {buttonText}
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 20,
    color: "#110E47",
  },
  seeMoreButton: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E5E4EA",
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVerticall: 4,
    height: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  seeMoreButtonText: {
    width: 45,
    height: 13,
    lineHeight: 13,
    color: "#AAA9B1",
    fontSize: 10,
    textAlign: "center",
  },
});

export default CategoryTitle;
