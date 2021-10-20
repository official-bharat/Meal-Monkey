import React from 'react';
import {View, Image} from 'react-native';
import {Button, Text} from 'react-native-paper';
import AppIntroSlider from 'react-native-app-intro-slider';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import SearchFood from '../SearchFood';

const data = [
  {
    title: 'Find Food You Love',
    image: require('../../assets/icons/1.png'),
    text: 'Discover the best foods from over 1,000 restaurants and fast delivery to  your doorstep',
  },
  {
    title: 'Fast Delivery',
    image: require('../../assets/icons/2.png'),
    text: 'Fast food delivery to your home, office wherever you are',
  },
  {
    title: 'Live Tracking',
    image: require('../../assets/icons/3.png'),
    text: 'Real-time tracking of your food on the app once your placed the order',
  },
];
const introScreen = () => {
  const {navigate} = useNavigation();
  const renderItem = ({item}) => {
    return (
      <View style={{backgroundColor: '#ffffff', flex: 1}}>
        <Image
          style={{
            width: wp(64),
            height: hp(45),
            marginTop: hp(9),
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          source={item.image}
        />
        <Text
          style={{
            textAlign: 'center',
            marginVertical: hp(10),
            fontSize: 28,
            fontFamily: 'Metropolis-ExtraBold',
            color: '#4A4B4D',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            paddingHorizontal: hp(8),
            marginVertical: hp(-5),
            fontSize: 13,
            fontFamily: 'Metropolis-Medium',
            color: '#7C7D7E',
          }}>
          {item.text}
        </Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View>
        <Button
          contentStyle={{height: 39}}
          style={{
            backgroundColor: '#FC6011',
            borderRadius: 28,
            width: wp(87),
            marginHorizontal: wp(2),
            marginTop: hp(-3),
            padding: hp(1),
            alignItems: 'center',

            justifyContent: 'center',
          }}
          uppercase={false}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 16,
              fontFamily: 'Metropolis-SemiBold',
            }}>
            Next
          </Text>
        </Button>
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View>
        <Button
          onPress={() => navigate('SearchFood')}
          contentStyle={{height: 39}}
          style={{
            backgroundColor: '#FC6011',
            borderRadius: 28,
            width: wp(85),
            marginHorizontal: wp(4),
            marginTop: hp(-3),
            padding: hp(1),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          uppercase={false}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 16,
              fontFamily: 'Metropolis-SemiBold',
            }}>
            Next
          </Text>
        </Button>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <AppIntroSlider
        renderNextButton={renderNextButton}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        data={data}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 9,
          backgroundColor: '#D6D6D6',
          marginBottom: hp(68),
        }}
        activeDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 9,
          backgroundColor: '#FC6011',
          marginBottom: hp(68),
        }}
      />
    </View>
  );
};

export default introScreen;
