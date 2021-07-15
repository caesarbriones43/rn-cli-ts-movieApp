import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
  title?: string;
}

const HorizontalSlider = ({movies, title}: Props) => {
  return (
    <View
      style={{
        height: title ? 260 : 220,
      }}>
      {title && (
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 5,
            marginLeft: 10,
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
