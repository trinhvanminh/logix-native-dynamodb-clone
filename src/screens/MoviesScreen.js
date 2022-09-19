import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import NowShowingMovies from "../components/NowShowingMovies";
import PopularMovies from "../components/PopularMovies";
import { getMoviesApi } from "../services/Movies";

const MoviesScreen = () => {
  const [nowShowingMoviesData, setNowShowingMoviesData] = useState();
  const [popularMoviesData, setPopularMoviesData] = useState();
  const isAuthenticated = useSelector((state) => state.auth.authenticated);

  useEffect(() => {
    getMoviesApi().then(({ response }) => {
      if (response) {
        const movies = response.movies;
        setNowShowingMoviesData(movies.slice(0, 5));
        setPopularMoviesData(movies.slice(5, 10));
      }
    });
  }, [isAuthenticated]);

  const handleSeeMorePress = () => {
    console.log("See More Pressed");
  };
  return (
    <ScrollView style={styles.container}>
      <NowShowingMovies
        handleSeeMorePress={handleSeeMorePress}
        nowShowingMoviesData={nowShowingMoviesData}
      />
      <PopularMovies
        handleSeeMorePress={handleSeeMorePress}
        popularMoviesData={popularMoviesData}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
export default MoviesScreen;
