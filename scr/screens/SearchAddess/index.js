import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Image, ImageBackground} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

function SearchScreen() {
  const {navigate} = useNavigation();
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1, padding: hp(0.5)}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigate('SearchFood')}>
          <Image
            source={require('../../assets/icons/leftarrow.png')}
            style={{width: wp(5), height: hp(2), marginTop: hp(2)}}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Metropolis-ExtraBold',
            marginHorizontal: wp(3),
            marginTop: hp(1),
            color: '#4A4B4D',
          }}>
          Change Address
        </Text>
      </View>
      <View style={{marginVertical: hp(3)}}>
        <MapView
          style={{height: hp(70), width: wp(100)}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
          />
        </MapView>
      </View>

      <View>
        <GooglePlacesAutocomplete
          // ref={ref}
          placeholder="Search Address"
          minLength={1}
          autoFocus={false}
          currentLocation={false}
          enablePoweredByContainer={false}
          keyboardShouldPersistTaps={'handled'}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          styles={{
            textInputContainer: {
              alignItems: 'center',
              marginTop: hp(-1),
              margin: hp(-5),
              marginHorizontal: wp(5),
              borderRadius: 25,

              paddingLeft: wp(8),
              backgroundColor: '#F2F2F2',
            },
            textInput: {
              color: '#000',
              fontSize: 14,
              backgroundColor: 'transparent',
              paddingVertical: hp(1),
            },
            listView: {
              color: '#8A8E99',
              fontSize: 14,
              zIndex: 1000, //To popover the component outwards,
            },
            description: {
              color: '#8A8E99',
              fontSize: 14,
              zIndex: 99,
            },
          }}
          query={{
            key: 'AIzaSyBf4G3qQTDy6-DN6Tb9m6WzgYCW598EoxU',
            language: 'en',
          }}
        />
        <Image
          source={require('../../assets/icons/search.png')}
          style={{
            width: wp(5),
            height: hp(2.5),
            marginTop: hp(1),
            marginLeft: wp(9.5),
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(5),
          marginHorizontal: wp(3),
        }}>
        <Image
          source={require('../../assets/icons/backS.png')}
          style={{marginTop: hp(-0.2), marginLeft: wp(3)}}
        />
        <Image
          source={require('../../assets/icons/star.png')}
          style={{
            marginTop: hp(1),
            marginLeft: wp(-6.8),
            width: wp(4),
            height: hp(2),
          }}
        />
        <Text
          style={{
            fontFamily: 'Metropolis-SemiBold',
            fontSize: 14,
            color: '#4A4B4D',
            marginLeft: wp(9),
            marginTop: hp(1),
          }}>
          Choose a saved place
        </Text>
        <TouchableOpacity onPress={() => navigate('ChangeAddress')}>
          <Image
            source={require('../../assets/icons/next.png')}
            style={{marginTop: hp(0.5), marginLeft: wp(25), height: hp(3.5)}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SearchScreen;
