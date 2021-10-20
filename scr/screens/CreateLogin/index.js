import {NavigationHelpersContext} from '@react-navigation/core';
import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';

const CreateLogin = () => {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{flex: 1}}>
        <Image
          style={{
            height: hp(50),
            width: wp(122),
            alignItems: 'center',
            backgroundColor: '#ffffff',
          }}
          source={require('../../assets/icons/top.png')}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{
            height: 150,
            width: 190,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: hp(0.2),
          }}
          source={require('../../assets/icons/Logo.png')}
        />
        <Text
          style={{
            letterSpacing: 2,
            textTransform: 'uppercase',
            fontSize: 10,
            fontFamily: 'Metropolis-Regular',
          }}>
          food delivery
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginVertical: hp(5),
            fontSize: 13,
            fontFamily: 'Metropolis-Medium',
            color: '#7C7D7E',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          Discover the best foods from over 1000{'\n'}restaurants and fast
          delivery to your{'\n'}doorstep
        </Text>
        <Button
          style={{margin: hp(1), backgroundColor: '#fc6011', borderRadius: 30}}
          color="#fff"
          onPress={() => navigate('LoginScreen')}
          contentStyle={{height: 50, width: wp(80)}}
          uppercase={false}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 16,
              fontFamily: 'Metropolis-SemiBold',
            }}>
            Login
          </Text>
        </Button>
        <Button
          style={{
            margin: hp(1),
            backgroundColor: '#fff',
            borderColor: '#fc6011',
            borderWidth: 1,
            borderRadius: 30,
          }}
          color="#FC6011"
          uppercase={false}
          fontFamily="Metropolis-SemiBold"
          contentStyle={{height: 50, width: wp(80)}}>
          Create an Account
        </Button>
      </View>
    </View>
  );
};
export default CreateLogin;
