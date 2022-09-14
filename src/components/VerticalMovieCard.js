import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconButton } from "react-native-paper";

const VerticalMovieCard = () => {
  const navigation = useNavigation();
  const movie = {
    id: 1,
    title: "Spiderman: No Way Home",
    uri: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0,0,540,810&width=480",
    imdb: "9.1/10",
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            movieId: movie.id,
          })
        }
      >
        <Image
          style={styles.image}
          source={{
            uri: movie.uri,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{movie.title}</Text>
      <View style={styles.imdbWrapper}>
        <IconButton
          icon="star"
          iconColor="#FFC319"
          size={14}
          onPress={() => console.log("Pressed")}
          style={styles.starIcon}
        />
        <Text style={styles.imdbText}>{movie.imdb} IMDb</Text>
      </View>
    </View>
  );
};

export default VerticalMovieCard;

const styles = StyleSheet.create({
  container: {
    width: 143,
    height: 283,
    marginRight: 16,
  },
  image: {
    width: 143,
    height: 212,
    borderRadius: 5,
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    letterSpacing: 1,
  },
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
