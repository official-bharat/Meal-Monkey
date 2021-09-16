import React from 'react';
import {View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';

const HomeScreen = () => {
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
          style={{height: 150, width: 200}}
          source={require('../../assets/icons/Logo.png')}
        />
      </View>
    </>
  );
};
export default HomeScreen;
