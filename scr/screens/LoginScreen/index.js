import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SocialIcon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/core';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const {navigate} = useNavigation();

  const facebook = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw 'Someting went wrong abtaining access token';
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );
      await auth().signInWithCredential(facebookCredential);
    } catch (error) {
      console.log({error});
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '<672872318301-ckp0k3tk41hqtuithdv8ceki6vnr8clj.apps.googleusercontent.com>', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      //accountName: '', // [Android] specifies an account name on the device that should be used
      //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    });
  }, []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log({userInfo});
    } catch (error) {
      console.log({error});
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',

          padding: hp(2),
          fontFamily: 'Metropolis-ExtraBold',
          color: '#4A4B4D',
        }}>
        Login
      </Text>
      <Text
        style={{
          fontSize: 14,
          textAlign: 'center',
          color: '#7c7d7e',
          fontFamily: 'Metropolis-Medium',
          margin: hp(-1),
        }}>
        Add your details to login
      </Text>
      <View
        style={{
          width: wp(90),
          alignSelf: 'center',
          marginTop: hp(5),
          backgroundColor: '#ffffff',
        }}>
        <TextInput
          style={{margin: hp(1), fontSize: 14}}
          placeholder="Your Email"
          fontFamily="Metropolis-Regular"
          placeholderTextColor="#B6B7B7"
          backgroundColor="#F2F2F2"
          underlineColor="#fff"
          value={email}
          borderColor="#707070"
          borderRadius={30}
          theme={{roundness: 30}}
          style={{
            margin: hp(1.6),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: wp(5),
            backgroundColor: '#F2F2F2',
          }}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          value={pass}
          fontFamily="Metropolis-Regular"
          underlineColor="#fff"
          backgroundColor="#F2F2F2"
          borderColor="#707070"
          placeholderTextColor="#B6B7B7"
          borderRadius={30}
          paddingVertical={10}
          theme={{roundness: 30}}
          style={{
            margin: hp(1.6),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: wp(5),
            backgroundColor: '#F2F2F2',
          }}
          onChangeText={text => setPass(text)}
        />
        <Button
          style={{
            margin: hp(1.6),
            backgroundColor: '#fc6011',
            borderRadius: 30,
          }}
          color="#fff"
          uppercase={false}
          contentStyle={{height: 53}}>
          <Text
            style={{
              fontSize: 16,
              color: '#ffffff',
              fontFamily: 'Metropolis-SemiBold',
            }}>
            Login
          </Text>
        </Button>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            marginTop: hp(2),
            fontFamily: 'Metropolis-Medium',
            color: '#7c7d7e',
          }}>
          Forgot your password?
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: hp(8),
            fontSize: 14,
            fontFamily: 'Metropolis-Medium',
            color: '#7c7d7e',
          }}>
          or Login With
        </Text>
        <SocialIcon
          title="Login With Facebook"
          button
          iconSize={18}
          type="facebook"
          style={{
            marginHorizontal: 12,
            margin: hp(2.7),
            height: 53,
          }}
          onPress={() => facebook()}
        />
        <SocialIcon
          title="Login With Google"
          button
          iconSize={18}
          style={{marginHorizontal: 12, height: 53}}
          type="google"
          onPress={() => signIn()}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          margin: hp(8),
        }}>
        <Text style={{color: '#7c7d7e', fontFamily: 'Metropolis-Medium'}}>
          Don't have an Account?
        </Text>
        <TouchableOpacity onPress={() => navigate('SignUp')}>
          <Text
            style={{
              color: '#fc6011',
              fontFamily: 'Metropolis-Bold',
              fontSize: 14,
              paddingHorizontal: wp(1),
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginScreen;
