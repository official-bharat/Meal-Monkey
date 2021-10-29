import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Alert} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import ImagePicker from 'react-native-image-crop-picker';

const ProfileScreen = () => {
  const [text, setText] = React.useState('');
  const {navigate} = useNavigation();
  const [image, setImage] = useState('');
  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      cropperCircleOverlay: true,
    }).then(v => {
      console.log(v);
      setImage(v);
    });
  };

  const choosePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      includeBase64: true,
      useFrontCamera: true,
      cropping: true,
    }).then(v => {
      console.log(v);
      setImage(v);
    });
  };

  const selectOption = () => {
    Alert.alert(
      'Meal-Monkey',
      'Choose your Suitable Option',
      [
        {
          text: 'Camera',
          onPress: () => {
            choosePhotoFromCamera();
          },
        },
        {
          text: 'Gallery',
          onPress: () => {
            choosePhoto();
          },
        },
        {
          text: 'Cancel',
          style: 'destructive',
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={{backgroundColor: '#ffffff', flex: 1, padding: hp(0.5)}}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Metropolis-ExtraBold',
            marginHorizontal: wp(3),
            marginTop: hp(1),
            color: '#4A4B4D',
          }}>
          Profile
        </Text>
        <Image
          source={require('../../assets/icons/s1.png')}
          style={{
            width: wp(6),
            height: hp(3),
            marginLeft: wp(59),
            marginTop: hp(1),
          }}
        />
      </View>
      <Image
        source={require('../../assets/icons/profile2.jpg')}
        style={{
          alignSelf: 'center',
          height: hp(15),
          width: wp(30),
          borderRadius: 100,
          marginVertical: hp(-2.5),
        }}
      />
      <TouchableOpacity onPress={selectOption}>
        <Image
          source={require('../../assets/icons/4.png')}
          style={{
            alignSelf: 'center',

            height: hp(2.5),
            width: wp(6),
            marginTop: hp(-0.2),
          }}
        />
      </TouchableOpacity>

      <Text
        style={{
          textAlign: 'center',
          color: '#FC6011',
          fontSize: 10,
          fontFamily: 'Metropolis-Medium',
          marginTop: hp(2),
        }}>
        Edit Profile
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: '#4A4B4D',
          fontSize: 16,
          fontFamily: 'Metropolis-Bold',
          marginTop: hp(0),
        }}>
        Hi there Emilia!
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: '#7C7D7E',
          fontSize: 11,
          fontFamily: 'Metropolis-Medium',
          marginTop: hp(0.5),
        }}>
        Sign Out
      </Text>
      <View style={{marginHorizontal: wp(3.6), marginVertical: hp(-1)}}>
        <TextInput
          label="Name"
          value={text}
          onChangeText={text => setText(text)}
          borderRadius={30}
          theme={{roundness: 28}}
          underlineColor="#fff"
          style={{
            marginTop: hp(1.8),
            marginHorizontal: wp(3.6),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: wp(5),
            backgroundColor: '#F2F2F2',
          }}
        />

        <TextInput
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
          borderRadius={30}
          theme={{roundness: 28}}
          underlineColor="#fff"
          style={{
            marginTop: hp(1.8),
            marginHorizontal: wp(3.6),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: wp(5),
            backgroundColor: '#F2F2F2',
          }}
        />
        <TextInput
          label="Mobile No"
          value={text}
          onChangeText={text => setText(text)}
          borderRadius={30}
          theme={{roundness: 28}}
          underlineColor="#fff"
          style={{
            marginTop: hp(1.8),
            marginHorizontal: wp(3.6),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: wp(5),
            backgroundColor: '#F2F2F2',
          }}
        />
        <TextInput
          label="Address"
          value={text}
          onChangeText={text => setText(text)}
          borderRadius={30}
          theme={{roundness: 28}}
          underlineColor="#fff"
          style={{
            marginTop: hp(1.8),
            marginHorizontal: wp(3.6),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: wp(5),
            backgroundColor: '#F2F2F2',
          }}
        />
        <TextInput
          label="Password"
          value={text}
          onChangeText={text => setText(text)}
          borderRadius={30}
          theme={{roundness: 28}}
          underlineColor="#fff"
          style={{
            marginTop: hp(1.8),
            marginHorizontal: wp(3.6),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: wp(5),
            backgroundColor: '#F2F2F2',
          }}
        />
        <TextInput
          label="Confirm Password"
          value={text}
          onChangeText={text => setText(text)}
          borderRadius={30}
          theme={{roundness: 28}}
          underlineColor="#fff"
          style={{
            marginTop: hp(1.8),
            marginHorizontal: wp(3.6),
            fontSize: 14,
            borderRadius: 30,
            height: hp(7.6),
            paddingLeft: wp(5),
            backgroundColor: '#F2F2F2',
          }}
        />
        <Button
          style={{
            margin: hp(1.5),
            backgroundColor: '#fc6011',
            borderRadius: 30,
          }}
          color="#fff"
          // onPress={() => navigate('ResetScreen')}
          uppercase={false}
          contentStyle={{height: 53}}>
          <Text
            style={{
              fontSize: 16,
              color: '#ffffff',
              fontFamily: 'Metropolis-SemiBold',
            }}>
            Save
          </Text>
        </Button>
      </View>
    </View>
  );
};
export default ProfileScreen;
