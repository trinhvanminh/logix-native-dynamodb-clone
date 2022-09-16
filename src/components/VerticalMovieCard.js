import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Imdb from "./Imdb";

const VerticalMovieCard = ({ movie: movieData }) => {
  const navigation = useNavigation();
  const movie = {
    ...movieData,
    uri: movieData?.thumbnail_url,
    imdb: "9.1/10",
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            movie,
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
      <Imdb imdb={movie.imdb} />
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
});
