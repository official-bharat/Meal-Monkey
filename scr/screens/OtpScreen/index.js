import React from 'react';
import {View} from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';

const OtpScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{padding: hp(2)}}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'Metropolis-ExtraBold',
            color: '#4A4B4D',
            textAlign: 'center',
            paddingVertical: heightPercentageToDP(3),
          }}>
          We have sent an OTP to{'\n'}
          your Mobile
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Metropolis-Medium',
            textAlign: 'center',
            paddingVertical: hp(-1),
            color: '#7c7d7e',
          }}>
          Place check your mobile number 071*****12{'\n'}
          continue to reset your password
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: heightPercentageToDP(5),
          marginHorizontal: wp(4),
        }}>
        <TextInput
          style={{
            backgroundColor: '#f5f5f5',
            paddingHorizontal: wp(7),
            paddingVertical: hp(-1),
            textAlign: 'center',
          }}
          underlineColor="#ffffff"
          secureTextEntry={true}
          maxLength={1}
          keyboardType="numeric"
          borderRadius={10}
          theme={{roundness: 15}}
          style={{
            margin: hp(1),
            width: wp(17),
            fontSize: 14,
            borderRadius: 15,
            padding: hp(-5),
          }}
        />
        <TextInput
          style={{
            backgroundColor: '#f5f5f5',
            paddingHorizontal: wp(7),
            paddingVertical: hp(-1),

            textAlign: 'center',
          }}
          secureTextEntry={true}
          maxLength={1}
          keyboardType="numeric"
          underlineColor="#ffffff"
          borderRadius={10}
          theme={{roundness: 15}}
          style={{
            margin: hp(1),
            width: wp(17),
            fontSize: 14,
            borderRadius: 15,
            padding: hp(-5),
          }}
        />
        <TextInput
          style={{
            backgroundColor: '#f5f5f5',
            paddingHorizontal: wp(7),
            paddingVertical: hp(-1),

            textAlign: 'center',
          }}
          maxLength={1}
          secureTextEntry={true}
          keyboardType="numeric"
          underlineColor="#ffffff"
          borderRadius={10}
          theme={{roundness: 15}}
          style={{
            margin: hp(1),
            width: wp(17),
            fontSize: 14,
            borderRadius: 15,
            padding: hp(-5),
          }}
        />
        <TextInput
          style={{
            backgroundColor: '#f5f5f5',
            paddingHorizontal: wp(7),
            paddingVertical: hp(-1),
            textAlign: 'center',
          }}
          maxLength={1}
          secureTextEntry={true}
          keyboardType="numeric"
          underlineColor="#ffffff"
          borderRadius={10}
          theme={{roundness: 15}}
          style={{
            margin: hp(1),
            width: wp(17),
            fontSize: 14,
            borderRadius: 15,
          }}
        />
      </View>
      <Button
        style={{
          marginHorizontal: wp(7),
          backgroundColor: '#fc6011',
          borderRadius: 30,
        }}
        color="#fff"
        onPress={() => navigate('NewPassword')}
        contentStyle={{height: 53}}
        uppercase={false}>
        <Text
          style={{
            fontSize: 16,
            color: '#ffffff',
            fontFamily: 'Metropolis-SemiBold',
          }}>
          Next
        </Text>
      </Button>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: hp(4),
        }}>
        <Text
          style={{
            fontSize: 14,
            color: '#7c7d7e',
            fontFamily: 'Metropolis-Medium',
          }}>
          Don't Receive?
        </Text>
        <Text
          style={{
            color: '#fc6011',
            fontFamily: 'Metropolis-Bold',
            fontSize: 14,
            paddingHorizontal: wp(1),
          }}>
          Click Here
        </Text>
      </View>
    </View>
  );
};
export default OtpScreen;
