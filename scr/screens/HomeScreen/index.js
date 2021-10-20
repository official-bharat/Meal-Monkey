import React from 'react';
import {View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';

const HomeScreen = () => {
  const {navigate} = useNavigation();
  return (
    <>
      <ImageBackground
        style={{flex: 1, backgroundColor: '#ffffff', opacity: 0.3}}
        source={require('../../assets/icons/background.png')}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}>
        <Image
          style={{height: 200, width: 250}}
          source={require('../../assets/icons/Logo.png')}
        />
        <TouchableOpacity onPress={() => navigate('CreateLogin')}>
          <Text
            style={{
              letterSpacing: 2,
              textTransform: 'uppercase',
              fontSize: 10,
              fontFamily: 'Metropolis-Regular',
            }}>
            food delivery
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default HomeScreen;
