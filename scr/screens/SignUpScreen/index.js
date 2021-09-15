import React from 'react';
import {Block, Text, Input, Button} from './scr/components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

function SignUp() {
  return (
    <Block white>
      <Block flex={false} margin={[20]}>
        <Text center bold size={30}>
          Sign Up
        </Text>
        <Text center size={14}>
          Add your details to sign up
        </Text>
        <Block flex={false} padding={[hp(3), wp(1)]}>
          <Input placeholder="Name " width="100%" height={45} />
          <Input placeholder="Email  " width="100%" height={45} />
          <Input placeholder="Mobile No  " width="100%" height={45} />
          <Input placeholder="Address  " width="100%" height={45} />
          <Input placeholder="Password  " width="100%" height={45} />
          <Input placeholder="Confirm Password  " width="100%" height={45} />
          <Button color="orange">Sign Up</Button>
        </Block>
        <Block row flex={false} middle>
          <Text size={13}>Already have an account?</Text>
          <Text size={13} color="orange" bold>
            Login
          </Text>
        </Block>
      </Block>
    </Block>
  );
}
export default SignUp;
