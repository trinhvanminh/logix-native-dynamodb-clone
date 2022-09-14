import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CatogoryTitle from "./CategoryTitle";
import VerticalMovieCard from "./VerticalMovieCard";

const NowShowingMovies = ({ handleSeeMorePress }) => {
  return (
    <View>
      <CatogoryTitle title="Now Showing" onButtonPress={handleSeeMorePress} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <VerticalMovieCard />
        <VerticalMovieCard />
        <VerticalMovieCard />
        <VerticalMovieCard />
        <VerticalMovieCard />
      </ScrollView>
    </View>
  );
};

export default NowShowingMovies;

const styles = StyleSheet.create({});
