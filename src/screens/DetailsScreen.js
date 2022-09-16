import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CategoryTitle from "../components/CategoryTitle";
import CustomHeader from "../components/CustomHeader";
import Imdb from "../components/Imdb";
import PlayButton from "../components/PlayButton";
import TagList from "../components/TagList";
import { movie as fakeMovieData } from "../constants/fakeMovieDetail";

export default function DetailsScreen({ route }) {
  const movie = {
    ...fakeMovieData,
    ...route.params?.movie,
  };
  const handleCastSeeMore = () => console.log("cast: seemore button pressed");
  return (
    <View>
      <StatusBar style="light" />
      <ImageBackground
        source={{ uri: movie.uri }}
        resizeMode="cover"
        style={{
          height: 300,
        }}
      >
        <CustomHeader headerStyle={{ marginBottom: 24 }} />
        <PlayButton text="Play Trailer" />
      </ImageBackground>
      <ScrollView style={styles.main}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title} numberOfLines={2}>
            {movie.title}
          </Text>
          <TouchableOpacity>
            <MaterialIcons name="favorite" color={"grey"} size={28} />
          </TouchableOpacity>
        </View>
        <Imdb imdb={movie.imdb} />
        <TagList tags={movie.tags} style={{ marginVertical: 8 }} />
        <View style={styles.movieInfoWrapper}>
          <View style={styles.movieInfo}>
            <Text style={styles.movieInfoItem}>Length</Text>
            <Text style={styles.movieInfoValue}>{movie.length}</Text>
          </View>
          <View style={styles.movieInfo}>
            <Text style={styles.movieInfoItem}>Language</Text>
            <Text style={styles.movieInfoValue}>{movie.language}</Text>
          </View>
          <View style={styles.movieInfo}>
            <Text style={styles.movieInfoItem}>Rating</Text>
            <Text style={styles.movieInfoValue}>{movie.rating}</Text>
          </View>
        </View>
        <CategoryTitle title="Description" style={{ marginBottom: 8 }} />
        <Text style={styles.description}>{movie.description}</Text>
        <CategoryTitle title="Cast" onButtonPress={handleCastSeeMore} />
        <FlatList
          data={movie.casts}
          renderItem={({ item: cast }) => (
            <View style={styles.castItem}>
              <Image
                source={{ uri: cast.picture }}
                style={styles.castPicture}
              />
              <Text style={styles.castName}>{cast.name}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index}
          horizontal
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  // title
  titleWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    letterSpacing: 1,
    lineHeight: 25,
  },

  // movie infomation
  movieInfoWrapper: {
    flexDirection: "row",
    marginBottom: 12,
  },
  movieInfo: {
    flex: 1,
  },
  movieInfoItem: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 15,
    color: "#9C9C9C",
    marginBottom: 4,
  },
  movieInfoValue: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
  },
  // description
  description: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 15,
    color: "#9C9C9C",
    letterSpacing: 0.8,
    marginBottom: 12,
  },
  // casts
  castItem: { marginRight: 13, width: 72 },
  castPicture: {
    width: 72,
    height: 72,
    resizeMode: "contain",
    borderRadius: 5,
    marginBottom: 8,
  },
  castName: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.2,
    color: "#110E47",
  },
});
