import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
import movieDB from '../api/movieDB';
import {useMovies} from '../hook/useMovies';

const HomeScreen = () => {
  const navigator = useNavigation();

  const {latestMovie, isLoading} = useMovies();

  console.log(latestMovie[2]?.title);

  if (true) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View>
      {/* <Text>HomeScreen</Text>
      <Button
        title="DetailScreen"
        onPress={() => {
          navigator.navigate('DetailScreen');
        }}></Button> */}
    </View>
  );
};

export default HomeScreen;
