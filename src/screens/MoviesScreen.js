import { ScrollView, StyleSheet } from "react-native";
import NowShowingMovies from "../components/NowShowingMovies";
import PopularMovies from "../components/PopularMovies";

const MoviesScreen = () => {
  const handleSeeMorePress = () => {
    console.log("See More Pressed");
  };
  return (
    <ScrollView style={styles.container}>
      <NowShowingMovies handleSeeMorePress={handleSeeMorePress} />
      <PopularMovies handleSeeMorePress={handleSeeMorePress} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
export default MoviesScreen;
