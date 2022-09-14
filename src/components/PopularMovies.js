import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CatogoryTitle from "./CategoryTitle";
import HorizontalMovieCard from "./HorizontalMovieCard";

const PopularMovies = ({ handleSeeMorePress }) => {
  return (
    <View>
      <CatogoryTitle title="Popular" onButtonPress={handleSeeMorePress} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HorizontalMovieCard />
        <HorizontalMovieCard />
        <HorizontalMovieCard />
        <HorizontalMovieCard />
        <HorizontalMovieCard />
      </ScrollView>
    </View>
  );
};

export default PopularMovies;

const styles = StyleSheet.create({});
