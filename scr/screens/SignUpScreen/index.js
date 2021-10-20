import {NavigationHelpersContext} from '@react-navigation/core';
import React from 'react';
import {View} from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import ResetScreen from '../ResetScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
const SignUpScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            padding: hp(2),
            fontFamily: 'Metropolis-ExtraBold',
            color: '#4A4B4D',
          }}>
          Sign Up
        </Text>
        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            margin: hp(-1),
            color: '#7c7d7e',
            fontFamily: 'Metropolis-Medium',
          }}>
          Add your details to sign up
        </Text>
      </View>
      <View style={{width: wp(90), alignSelf: 'center', margin: hp(3.5)}}>
        <TextInput
          style={{margin: hp(1), fontSize: 14}}
          placeholder="Name"
          placeholderTextColor="#b6b7b7"
          underlineColor="#fff"
          backgroundColor="#f1f1f1"
          borderRadius={30}
          theme={{roundness: 28}}
          style={{
            margin: hp(1.6),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: wp(5),
            backgroundColor: '#F2F2F2',
          }}
        />
        <TextInput
          placeholder="Email"
          underlineColor="#fff"
          placeholderTextColor="#b6b7b7"
          style={{margin: hp(1), fontSize: 14}}
          backgroundColor="#f1f1f1"
          borderRadius={30}
          theme={{roundness: 28}}
          style={{
            margin: hp(1.6),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: wp(5),
            backgroundColor: '#F2F2F2',
          }}
        />
        <TextInput
          placeholder="Mobale No"
          underlineColor="#fff"
          placeholderTextColor="#b6b7b7"
          style={{margin: hp(1), fontSize: 14}}
          backgroundColor="#F2F2F2"
          borderRadius={30}
          theme={{roundness: 28}}
          style={{
            margin: hp(1.6),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: wp(5),
            backgroundColor: '#F2F2F2',
          }}
        />
        <TextInput
          placeholder="Address"
          underlineColor="#fff"
          placeholderTextColor="#b6b7b7"
          style={{margin: hp(1), fontSize: 14}}
          backgroundColor="#F2F2F2"
          borderRadius={30}
          theme={{roundness: 28}}
          style={{
            margin: hp(1.6),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: wp(5),
            backgroundColor: '#F2F2F2',
          }}
        />
        <TextInput
          placeholder="Password"
          underlineColor="#fff"
          placeholderTextColor="#b6b7b7"
          style={{margin: hp(1.6), fontSize: 14}}
          backgroundColor="#F2F2F2"
          borderRadius={30}
          theme={{roundness: 28}}
          style={{
            margin: hp(1.6),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: wp(5),
            backgroundColor: '#F2F2F2',
          }}
        />
        <TextInput
          placeholder="Confird Password"
          underlineColor="#fff"
          placeholderTextColor="#b6b7b7"
          backgroundColor="#F2F2F2"
          borderRadius={30}
          theme={{roundness: 28}}
          style={{
            margin: hp(1.6),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: wp(5),
            backgroundColor: '#F2F2F2',
          }}
        />
        <Button
          style={{
            margin: hp(1.6),
            backgroundColor: '#fc6011',
            borderRadius: 30,
          }}
          color="#fff"
          onPress={() => navigate('ResetScreen')}
          uppercase={false}
          contentStyle={{height: 53}}>
          <Text
            style={{
              fontSize: 16,
              color: '#ffffff',
              fontFamily: 'Metropolis-SemiBold',
            }}>
            Sign Up
          </Text>
        </Button>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: hp(-1),
        }}>
        <Text style={{color: '#7c7d7e', fontFamily: 'Metropolis-Medium'}}>
          Already have an Account?
        </Text>
        <Text
          style={{
            color: '#fc6011',
            fontFamily: 'Metropolis-Bold',
            fontSize: 14,
            paddingHorizontal: wp(1),
          }}>
          Login
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;
