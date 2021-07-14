import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = () => {
  const navigator = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="DetailScreen"
        onPress={() => {
          navigator.navigate('DetailScreen');
        }}></Button>
    </View>
  );
};

export default HomeScreen;
