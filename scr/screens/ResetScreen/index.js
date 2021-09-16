import React from 'react';
import {View} from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ResetScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{margin: hp(6), alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Reset Password</Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#7c7d7e',
          }}>
          Please enter your email to receive a {'\n'}link to create a new
          password via email
        </Text>
      </View>
      <View>
        <TextInput
          style={{margin: hp(3)}}
          placeholder="Your Email"
          placeholderTextColor="#b6b7b7"
          backgroundColor="#f5f5f5"
        />
        <Button
          style={{
            margin: hp(2),
            backgroundColor: '#fc6011',
            borderRadius: 30,
          }}
          color="#fff"
          contentStyle={{height: 60}}>
          Send
        </Button>
      </View>
    </View>
  );
};
export default ResetScreen;
