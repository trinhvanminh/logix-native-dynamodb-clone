import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconButton } from "react-native-paper";
import { fakeMovieImg } from "../constants/base64Img";
import Imdb from "./Imdb";
import TagList from "./TagList";

const HorizontalMovieCard = ({ movie: movieData }) => {
  const navigation = useNavigation();
  const movie = {
    ...movieData,
    uri: movieData?.thumbnail_url,
    imdb: "6.4/10",
    tags: ["HORROR", "MYSTERY", "THRILLER"],
    length: "1h 47m",
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
      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        <Imdb imdb={movie.imdb} />
        <TagList tags={movie.tags} />
        <View style={styles.wrapper}>
          <IconButton
            icon="clock-time-three-outline"
            iconColor="#000"
            size={14}
            style={styles.clockTimeThreeIcon}
          />
          <Text style={styles.length}>{movie.length}</Text>
        </View>
      </View>
    </View>
  );
};

export default HorizontalMovieCard;

const styles = StyleSheet.create({
  container: {
    width: 304,
    height: 120,
    flexDirection: "row",
    marginBottom: 16,
  },
  image: {
    width: 85,
    height: 120,
    borderRadius: 5,
    marginRight: 16,
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    letterSpacing: 0.28,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  clockTimeThreeIcon: {
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
    flex: 1,
  },
  length: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 1,
    color: "#000000",
  },
});
