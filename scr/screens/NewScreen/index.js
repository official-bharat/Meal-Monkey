import React from 'react';
import {View} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDPas as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';

const NewScreen = () => {
  const {navigate} = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Metropolis-ExtraBold',
            textAlign: 'center',
            paddingVertical: hp(2),
            color: '#4A4B4D',
          }}>
          New Password
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Metropolis-Medium',
            textAlign: 'center',
            marginVertical: hp(-1),

            color: '#7c7d7e',
          }}>
          Please enter your email to receive a{'\n'}link to create a new
          password via email
        </Text>
      </View>
      <View style={{paddingVertical: hp(2)}}>
        <TextInput
          style={{
            margin: hp(1.6),
            fontSize: 14,
            fontFamily: 'Metropolis-Regular',
          }}
          placeholder="New Password"
          placeholderTextColor="#b6b7b7"
          underlineColor="#ffffff"
          backgroundColor="#f1f1f1"
          borderRadius={30}
          theme={{roundness: 28}}
          style={{
            margin: hp(4),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: 10,
            backgroundColor: '#F2F2F2',
          }}
        />
        <TextInput
          style={{
            margin: hp(1),
            fontSize: 14,
            fontFamily: 'Metropolis-Regular',
          }}
          placeholder="Confirm Password"
          placeholderTextColor="#b6b7b7"
          backgroundColor="#f1f1f1"
          underlineColor="#ffffff"
          borderRadius={30}
          theme={{roundness: 28}}
          style={{
            margin: hp(4),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            marginTop: hp(1),
            paddingLeft: 10,
            backgroundColor: '#F2F2F2',
          }}
        />
        <Button
          style={{
            marginHorizontal: hp(4),

            backgroundColor: '#fc6011',
            borderRadius: 30,
          }}
          onPress={() => navigate('introScreen')}
          fontSize={16}
          fontFamily="Metropolis-SemiBold"
          color="#fff"
          contentStyle={{height: 53}}
          uppercase={false}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 16,
              fontFamily: 'Metropolis-SemiBold',
            }}>
            Next
          </Text>
        </Button>
      </View>
    </View>
  );
};
export default NewScreen;
