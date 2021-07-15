import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import movieDB from '../api/movieDB';
import MoviePoster from '../components/MoviePoster';
import {useMovies} from '../hook/useMovies';

const HomeScreen = () => {
  const navigator = useNavigation();
  const {top} = useSafeAreaInsets();
  const {latestMovie, isLoading} = useMovies();

  // console.log(latestMovie[2]?.title);

  // if (true) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center'}}>
  //       <ActivityIndicator color="red" size={100} />
  //     </View>
  //   );
  // }

  return (
    <View style={{marginTop: top + 20}}>
      <MoviePoster movie={latestMovie[5]} />
    </View>
  );
};

export default HomeScreen;
