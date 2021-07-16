import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({route}: Props) => {
  const movie = route.params;

  console.log(movie.title);

  return (
    <View>
      <Text>{movie.original_title}</Text>
    </View>
  );
};

export default DetailScreen;
