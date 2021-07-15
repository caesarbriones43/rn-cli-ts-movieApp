import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Button, ActivityIndicator, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import movieDB from '../api/movieDB';
import MoviePoster from '../components/MoviePoster';
import {useMovies} from '../hook/useMovies';
import Carousel from 'react-native-snap-carousel';

const HomeScreen = () => {
  const navigator = useNavigation();
  const {top} = useSafeAreaInsets();
  const {latestMovie, isLoading} = useMovies();

  const {width: windowWidth} = Dimensions.get('window');

  console.log(windowWidth);

  return (
    <View style={{marginTop: top + 20}}>
      {/* <MoviePoster movie={latestMovie[5]} /> */}
      <View
        style={{
          height: 440,
        }}>
        <Carousel
          data={latestMovie}
          sliderWidth={windowWidth}
          itemWidth={300}
          renderItem={({item}: any) => <MoviePoster movie={item} />}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
