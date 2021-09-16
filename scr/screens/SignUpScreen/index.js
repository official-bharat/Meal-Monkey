import React from 'react';
import {View} from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const SignUpScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View>
        <Text
          style={{
            fontSize: 35,
            textAlign: 'center',
            fontWeight: 'bold',
            margin: hp(1),
          }}>
          Sign Up
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            color: '#7c7d7e',
          }}>
          Add your details to sign up
        </Text>
      </View>
      <View style={{width: wp(90), alignSelf: 'center'}}>
        <TextInput
          style={{margin: hp(1)}}
          placeholder="Name"
          placeholderTextColor="#b6b7b7"
          backgroundColor="#f5f5f5"
        />
        <TextInput
          placeholder="Email"
          underlineColor="#fff"
          placeholderTextColor="#b6b7b7"
          style={{margin: hp(1)}}
          backgroundColor="#f5f5f5"
        />
        <TextInput
          placeholder="Mobale No"
          underlineColor="#fff"
          placeholderTextColor="#b6b7b7"
          style={{margin: hp(1)}}
          backgroundColor="#f5f5f5"
        />
        <TextInput
          placeholder="Address"
          underlineColor="#fff"
          placeholderTextColor="#b6b7b7"
          style={{margin: hp(1)}}
          backgroundColor="#f5f5f5"
        />
        <TextInput
          placeholder="Password"
          underlineColor="#fff"
          placeholderTextColor="#b6b7b7"
          style={{margin: hp(1)}}
          backgroundColor="#f5f5f5"
        />
        <TextInput
          placeholder="Confird Password"
          underlineColor="#fff"
          placeholderTextColor="#b6b7b7"
          style={{margin: hp(1)}}
          backgroundColor="#f5f5f5"
        />
        <Button
          style={{margin: hp(1), backgroundColor: '#fc6011', borderRadius: 30}}
          color="#fff"
          contentStyle={{height: 60}}>
          Sign Up
        </Button>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          margin: hp(5),
        }}>
        <Text style={{color: '#7c7d7e'}}>Don't have an Account?</Text>
        <Text style={{color: '#fc6011', fontWeight: 'bold'}}>Login</Text>
      </View>
    </View>
  );
};

export default SignUpScreen;
