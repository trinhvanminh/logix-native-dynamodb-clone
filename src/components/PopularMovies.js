import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import CategoryTitle from "./CategoryTitle";
import HorizontalMovieCard from "./HorizontalMovieCard";

const PopularMovies = ({ handleSeeMorePress, popularMoviesData }) => {
  return (
    <View>
      <CategoryTitle title="Popular" onButtonPress={handleSeeMorePress} />
      {popularMoviesData?.map((movie, index) => (
        <HorizontalMovieCard movie={movie} key={index} />
      ))}
    </View>
  );
};

export default PopularMovies;

const styles = StyleSheet.create({});
