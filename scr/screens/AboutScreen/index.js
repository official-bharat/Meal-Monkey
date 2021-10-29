import React from 'react';
import {View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
function AboutScreen() {
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
          About Us
        </Text>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/s1.png')}
            style={{
              width: wp(6),
              height: hp(3),
              marginLeft: wp(46),
              marginTop: hp(1),
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: wp(5),
          flexDirection: 'row',
          marginTop: hp(3),
        }}>
        <View
          style={{
            width: wp(2),
            height: hp(1),

            borderRadius: 25,
            marginTop: hp(3),
            backgroundColor: '#EE5A30',
          }}
        />

        <Text
          style={{
            fontFamily: 'Metropolis-SemiBold',
            color: '#4A4B4D',
            fontSize: 14,
            marginTop: hp(2.5),
            marginLeft: wp(2),
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: wp(5),
          flexDirection: 'row',
          marginTop: hp(3),
        }}>
        <View
          style={{
            width: wp(2),
            height: hp(1),

            borderRadius: 25,
            marginTop: hp(3),
            backgroundColor: '#EE5A30',
          }}
        />

        <Text
          style={{
            fontFamily: 'Metropolis-SemiBold',
            color: '#4A4B4D',
            fontSize: 14,
            marginTop: hp(2.5),
            marginLeft: wp(2),
          }}>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex eacommodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: wp(5),
          flexDirection: 'row',
          marginTop: hp(3),
        }}>
        <View
          style={{
            width: wp(2),
            height: hp(1),

            borderRadius: 25,
            marginTop: hp(3),
            backgroundColor: '#EE5A30',
          }}
        />

        <Text
          style={{
            fontFamily: 'Metropolis-SemiBold',
            color: '#4A4B4D',
            fontSize: 14,
            marginTop: hp(2.5),
            marginLeft: wp(2),
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </Text>
      </View>
    </View>
  );
}
export default AboutScreen;
