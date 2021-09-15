import React from 'react';
import {Block, Text, Input, Button} from './scr/components';
import {SocialIcon} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

function Login() {
  return (
    <Block white>
      <Block flex={false} margin={[20]}>
        <Text center bold size={30}>
          Login
        </Text>
        <Text center size={14}>
          Add your details to login
        </Text>
        <Input placeholder="Your Email " width="100%" height={45} />
        <Input placeholder="Password  " width="100%" height={45} />
        <Button color="orange">Login</Button>
        <Text size={13} center>
          Forget Your Password?
        </Text>
        <Text size={13} center>
          or Login With
        </Text>
        <SocialIcon title="Sign In With Facebook" button type="facebook" />
        <SocialIcon title="Sign In With Facebook" button type="google" />
        <Block row flex={false} middle>
          <Text size={13}>Don't have an account?</Text>
          <Text size={13} color="orange" bold>
            Sign Up
          </Text>
        </Block>
      </Block>
    </Block>
  );
}
export default Login;
