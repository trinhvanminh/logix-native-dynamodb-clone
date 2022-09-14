import { StyleSheet, Text, View, Pressable } from "react-native";
import { Button } from "react-native-paper";

const CatogoryTitle = ({ title, buttonText = "See more", onButtonPress }) => {
  const handleButtonPress = () => {
    onButtonPress();
  };
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.titleText}>{title}</Text>
      <Button
        mode="elevated"
        onPress={() => console.log("Pressed")}
        contentStyle={styles.seeMoreButton}
        labelStyle={styles.seeMoreButtonText}
      >
        {buttonText}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
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
    width: 61,
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

export default CatogoryTitle;
