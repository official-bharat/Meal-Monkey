import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Image, ImageBackground} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import MapView from 'react-native-maps';

function SearchScreen() {
  const {navigate} = useNavigation();
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1, padding: hp(0.5)}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigate('SearchFood')}>
          <Image
            source={require('../../assets/icons/leftarrow.png')}
            style={{width: wp(5), height: hp(2), marginTop: hp(2)}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Metropolis-ExtraBold',
            marginHorizontal: wp(3),
            marginTop: hp(1),
            color: '#4A4B4D',
          }}>
          Change Address
        </Text>
      </View>

      <View>
        <TextInput
          placeholder="Search Address"
          placeholderTextColor="#B6B7B7"
          backgroundColor="#F2F2F2"
          underlineColor="#ffffff"
          borderRadius={30}
          theme={{roundness: 28}}
          style={{
            margin: hp(1),
            marginHorizontal: wp(4),
            fontSize: 14,
            height: hp(7),
            borderRadius: 30,
            backgroundColor: '#F2F2F2',
            paddingLeft: 35,
          }}
        />
        <Image
          source={require('../../assets/icons/search.png')}
          style={{
            width: wp(5),
            height: hp(2.6),
            marginTop: hp(-5.6),
            marginLeft: wp(9),
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(5),
          marginHorizontal: wp(3),
        }}>
        <Image
          source={require('../../assets/icons/backS.png')}
          style={{marginTop: hp(-0.2), marginLeft: wp(3)}}
        />
        <Image
          source={require('../../assets/icons/star.png')}
          style={{
            marginTop: hp(1),
            marginLeft: wp(-6.5),
            width: wp(4),
            height: hp(2.5),
          }}
        />
        <Text
          style={{
            fontFamily: 'Metropolis-SemiBold',
            fontSize: 14,
            color: '#4A4B4D',
            marginLeft: wp(9),
            marginTop: hp(1),
          }}>
          Choose a saved place
        </Text>
        <TouchableOpacity onPress={() => navigate('ChangeAddress')}>
          <Image
            source={require('../../assets/icons/next.png')}
            style={{marginTop: hp(0.5), marginLeft: wp(25), height: hp(3.5)}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SearchScreen;
