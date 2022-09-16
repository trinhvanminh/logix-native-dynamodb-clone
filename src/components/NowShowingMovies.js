import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryTitle from "./CategoryTitle";
import VerticalMovieCard from "./VerticalMovieCard";

const NowShowingMovies = ({ handleSeeMorePress, nowShowingMoviesData }) => {
  return (
    <View>
      <CategoryTitle title="Now Showing" onButtonPress={handleSeeMorePress} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {nowShowingMoviesData?.map((movie, index) => {
          return <VerticalMovieCard movie={movie} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default NowShowingMovies;

const styles = StyleSheet.create({});
