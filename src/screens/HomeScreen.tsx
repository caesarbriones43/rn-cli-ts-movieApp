import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import movieDB from '../api/movieDB';
import MoviePoster from '../components/MoviePoster';
import {useMovies} from '../hook/useMovies';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

const HomeScreen = () => {
  const navigator = useNavigation();
  const {top} = useSafeAreaInsets();
  const {nowPlaying, popular, upcoming, topRated, isLoading} = useMovies();

  const {width: windowWidth} = Dimensions.get('window');

  console.log(windowWidth);

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* <MoviePoster movie={latestMovie[5]} /> */}
        <View
          style={{
            height: 440,
          }}>
          <Carousel
            data={nowPlaying}
            sliderWidth={windowWidth}
            itemWidth={300}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            inactiveSlideOpacity={0.9}
          />
        </View>

        <HorizontalSlider movies={popular} title="Popular Movies" />
        <HorizontalSlider movies={upcoming} title="Upcoming Movies" />
        <HorizontalSlider movies={topRated} title="Top Rated Movies" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
