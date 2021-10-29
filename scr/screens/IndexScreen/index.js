import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Image, ImageBackground} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
function NotificationScreen() {
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
          Inbox
        </Text>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/s1.png')}
            style={{
              width: wp(6),
              height: hp(3),
              marginLeft: wp(57),
              marginTop: hp(1),
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: wp(5),
          flexDirection: 'row',
          marginTop: hp(3),
        }}>
        <View
          style={{
            width: wp(2),
            height: hp(1),

            borderRadius: 25,
            marginTop: hp(3),
            backgroundColor: '#EE5A30',
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Metropolis-SemiBold',
                color: '#4A4B4D',
                fontSize: 14,
                marginTop: hp(2.5),
                marginLeft: wp(7),
              }}>
              MealMonkey Promotions
            </Text>
            <Text
              style={{
                color: '#7C7D7E',
                fontSize: 9,
                fontFamily: 'Metropolis-Regular',
                marginLeft: wp(25),
                marginTop: hp(2.5),
              }}>
              6th July
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Metropolis-Medium',
                fontSize: 14,
                color: '#B6B7B7',
                marginLeft: wp(7),
              }}>
              Lorem ipsum dolor sit amet, consectetur{'\n'} adipiscing elit, sed
              do eiusmod tempor
            </Text>
            <Image
              source={require('../../assets/icons/star2.png')}
              style={{marginTop: hp(2.5), marginLeft: wp(2.7)}}
            />
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: wp(5), flexDirection: 'row'}}>
        <View
          style={{
            width: wp(2),
            height: hp(1),

            borderRadius: 25,
            marginTop: hp(3),
            backgroundColor: '#EE5A30',
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Metropolis-SemiBold',
                color: '#4A4B4D',
                fontSize: 14,
                marginTop: hp(2.5),
                marginLeft: wp(7),
              }}>
              MealMonkey Promotions
            </Text>
            <Text
              style={{
                color: '#7C7D7E',
                fontSize: 9,
                fontFamily: 'Metropolis-Regular',
                marginLeft: wp(25),
                marginTop: hp(2.5),
              }}>
              6th July
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Metropolis-Medium',
                fontSize: 14,
                color: '#B6B7B7',
                marginLeft: wp(7),
              }}>
              Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit, sed
              do eiusmod tempor
            </Text>
            <Image
              source={require('../../assets/icons/star2.png')}
              style={{marginTop: hp(2.5), marginLeft: wp(2.7)}}
            />
          </View>
          <View
            style={{
              width: wp(90),
              borderBottomWidth: 1,
              marginHorizontal: wp(-3.5),
              borderBottomColor: '#F6F6F6',
              marginTop: hp(2),
            }}
          />
        </View>
      </View>
      <View style={{marginHorizontal: wp(5), flexDirection: 'row'}}>
        <View
          style={{
            width: wp(2),
            height: hp(1),

            borderRadius: 25,
            marginTop: hp(3),
            backgroundColor: '#EE5A30',
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Metropolis-SemiBold',
                color: '#4A4B4D',
                fontSize: 14,
                marginTop: hp(2.5),
                marginLeft: wp(7),
              }}>
              MealMonkey Promotions
            </Text>
            <Text
              style={{
                color: '#7C7D7E',
                fontSize: 9,
                fontFamily: 'Metropolis-Regular',
                marginLeft: wp(25),
                marginTop: hp(2.5),
              }}>
              6th July
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Metropolis-Medium',
                fontSize: 14,
                color: '#B6B7B7',
                marginLeft: wp(7),
              }}>
              Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit, sed
              do eiusmod tempor
            </Text>
            <Image
              source={require('../../assets/icons/star2.png')}
              style={{marginTop: hp(2.5), marginLeft: wp(2.7)}}
            />
          </View>
          <View
            style={{
              width: wp(90),
              borderBottomWidth: 1,
              marginHorizontal: wp(-3.5),
              borderBottomColor: '#F6F6F6',
              marginTop: hp(2),
            }}
          />
        </View>
      </View>
      <View style={{marginHorizontal: wp(5), flexDirection: 'row'}}>
        <View
          style={{
            width: wp(2),
            height: hp(1),

            borderRadius: 25,
            marginTop: hp(3),
            backgroundColor: '#EE5A30',
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Metropolis-SemiBold',
                color: '#4A4B4D',
                fontSize: 14,
                marginTop: hp(2.5),
                marginLeft: wp(7),
              }}>
              MealMonkey Promotions
            </Text>
            <Text
              style={{
                color: '#7C7D7E',
                fontSize: 9,
                fontFamily: 'Metropolis-Regular',
                marginLeft: wp(25),
                marginTop: hp(2.5),
              }}>
              6th July
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Metropolis-Medium',
                fontSize: 14,
                color: '#B6B7B7',
                marginLeft: wp(7),
              }}>
              Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit, sed
              do eiusmod tempor
            </Text>
            <Image
              source={require('../../assets/icons/star2.png')}
              style={{marginTop: hp(2.5), marginLeft: wp(2.7)}}
            />
          </View>
          <View
            style={{
              width: wp(90),
              borderBottomWidth: 1,
              marginHorizontal: wp(-3.5),
              borderBottomColor: '#F6F6F6',
              marginTop: hp(2),
            }}
          />
        </View>
      </View>
      <View style={{marginHorizontal: wp(5), flexDirection: 'row'}}>
        <View
          style={{
            width: wp(2),
            height: hp(1),

            borderRadius: 25,
            marginTop: hp(3),
            backgroundColor: '#EE5A30',
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Metropolis-SemiBold',
                color: '#4A4B4D',
                fontSize: 14,
                marginTop: hp(2.5),
                marginLeft: wp(7),
              }}>
              MealMonkey Promotions
            </Text>
            <Text
              style={{
                color: '#7C7D7E',
                fontSize: 9,
                fontFamily: 'Metropolis-Regular',
                marginLeft: wp(25),
                marginTop: hp(2.5),
              }}>
              6th July
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Metropolis-Medium',
                fontSize: 14,
                color: '#B6B7B7',
                marginLeft: wp(7),
              }}>
              Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit, sed
              do eiusmod tempor
            </Text>
            <Image
              source={require('../../assets/icons/star2.png')}
              style={{marginTop: hp(2.5), marginLeft: wp(2.7)}}
            />
          </View>
          <View
            style={{
              width: wp(90),
              borderBottomWidth: 1,
              marginHorizontal: wp(-3.5),
              borderBottomColor: '#F6F6F6',
              marginTop: hp(2),
            }}
          />
        </View>
      </View>
      <View style={{marginHorizontal: wp(5), flexDirection: 'row'}}>
        <View
          style={{
            width: wp(2),
            height: hp(1),

            borderRadius: 25,
            marginTop: hp(3),
            backgroundColor: '#EE5A30',
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Metropolis-SemiBold',
                color: '#4A4B4D',
                fontSize: 14,
                marginTop: hp(2.5),
                marginLeft: wp(7),
              }}>
              MealMonkey Promotions
            </Text>
            <Text
              style={{
                color: '#7C7D7E',
                fontSize: 9,
                fontFamily: 'Metropolis-Regular',
                marginLeft: wp(25),
                marginTop: hp(2.5),
              }}>
              6th July
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Metropolis-Medium',
                fontSize: 14,
                color: '#B6B7B7',
                marginLeft: wp(7),
              }}>
              Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit, sed
              do eiusmod tempor
            </Text>
            <Image
              source={require('../../assets/icons/star2.png')}
              style={{marginTop: hp(2.5), marginLeft: wp(2.7)}}
            />
          </View>
          <View
            style={{
              width: wp(90),
              borderBottomWidth: 1,
              marginHorizontal: wp(-3.5),
              borderBottomColor: '#F6F6F6',
              marginTop: hp(2),
            }}
          />
        </View>
      </View>
    </View>
  );
}
export default NotificationScreen;
