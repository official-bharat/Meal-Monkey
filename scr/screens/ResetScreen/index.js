import React from 'react';
import {View} from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';

const ResetScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{padding: hp(2), alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Metropolis-ExtraBold',
            color: '#4A4B4D',
          }}>
          Reset Password
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Metropolis-Medium',
            color: '#7C7D7E',
            textAlign: 'center',
            margin: hp(2),
          }}>
          Please enter your email to receive a {'\n'}link to create a new
          password via email
        </Text>
      </View>
      <View style={{paddingVertical: hp(-3)}}>
        <TextInput
          style={{margin: hp(4), fontSize: 14}}
          placeholder="Email"
          placeholderTextColor="#b6b7b7"
          fontFamily="Metropolis-Regular"
          bordercolor="#707070"
          backgroundColor="#F2F2F2"
          underlineColor="#ffffff"
          borderRadius={30}
          theme={{roundness: 28}}
          style={{
            margin: hp(4),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: wp(5),
            backgroundColor: '#F2F2F2',
          }}
        />
        <Button
          style={{
            marginHorizontal: hp(4),
            backgroundColor: '#fc6011',

            borderRadius: 30,
          }}
          color="#fff"
          onPress={() => navigate('OtpScreen')}
          contentStyle={{height: 53}}
          uppercase={false}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 16,
              fontFamily: 'Metropolis-SemiBold',
            }}>
            Send
          </Text>
        </Button>
      </View>
    </View>
  );
};
export default ResetScreen;
