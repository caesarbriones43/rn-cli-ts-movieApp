import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  return (
    <View
      style={{
        width,
        height,
        marginHorizontal: 5,
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 10,
  },
});

export default MoviePoster;
