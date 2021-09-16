import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CreateLogin = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View>
        <Image
          style={{
            height: 370,
            width: 475,
            backgroundColor: '#ffffff',
          }}
          source={require('../../assets/icons/top.png')}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{
            height: 120,
            width: 150,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: heightPercentageToDP(-8),
          }}
          source={require('../../assets/icons/Logo.png')}
        />
        <Text
          style={{letterSpacing: 2, textTransform: 'uppercase', fontSize: 12}}>
          food delivery
        </Text>
        <Text style={{textAlign: 'center', paddingVertical: 23, fontSize: 15}}>
          Discover the best foods from over 1000{'\n'}restaurants and fast
          delivery to your{'\n'}doorstep
        </Text>
        <Button
          style={{margin: hp(1), backgroundColor: '#fc6011', borderRadius: 30}}
          color="#fff"
          contentStyle={{height: 60, width: wp(90)}}>
          Login
        </Button>
        <Button
          style={{
            margin: hp(1),
            backgroundColor: '#fff',
            borderColor: '#fc6011',
            borderWidth: 1,
            borderRadius: 30,
          }}
          color="#fc6011"
          contentStyle={{height: 60, width: wp(90)}}>
          Create an Account
        </Button>
      </View>
    </View>
  );
};
export default CreateLogin;
