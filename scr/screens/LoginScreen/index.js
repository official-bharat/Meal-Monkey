import React from 'react';
import {View} from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Text
        style={{
          fontSize: 35,
          textAlign: 'center',
          fontWeight: 'bold',
          margin: hp(2),
        }}>
        Login
      </Text>
      <Text
        style={{
          fontSize: 15,
          textAlign: 'center',
          color: '#7c7d7e',
        }}>
        Add your details to login
      </Text>
      <View
        style={{
          width: wp(90),
          alignSelf: 'center',
          backgroundColor: '#ffffff',
        }}>
        <TextInput
          style={{margin: hp(1)}}
          placeholder="Your Email"
          placeholderTextColor="#b6b7b7"
          backgroundColor="#f5f5f5"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          value={pass}
          underlineColor="#fff"
          backgroundColor="#f5f5f5"
          placeholderTextColor="#b6b7b7"
          style={{margin: hp(1)}}
          onChangeText={text => setPass(text)}
        />
        <Button
          style={{margin: hp(1), backgroundColor: '#fc6011', borderRadius: 30}}
          color="#fff"
          contentStyle={{height: 60}}>
          Login
        </Button>
        <Text style={{textAlign: 'center', margin: hp(3), color: '#7c7d7e'}}>
          Forget your password?
        </Text>
        <Text style={{textAlign: 'center', margin: hp(3), color: '#7c7d7e'}}>
          or Login With
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          margin: hp(15),
        }}>
        <Text style={{color: '#7c7d7e'}}>Don't have an Account?</Text>
        <Text style={{color: '#fc6011', fontWeight: 'bold'}}>Sign Up</Text>
      </View>
    </View>
  );
};
export default LoginScreen;
