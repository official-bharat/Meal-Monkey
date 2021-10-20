import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {useNavigation} from '@react-navigation/core';
function offerScreen() {
  const {navigate} = useNavigation();
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Metropolis-ExtraBold',
            color: '#4A4B4D',
            padding: hp(2),
            marginHorizontal: wp(1),
          }}>
          Latest Offers
        </Text>

        <Image
          source={require('../../assets/icons/cardt.png')}
          style={{
            width: wp(6),
            height: hp(3),
            marginLeft: wp(37),
            marginTop: hp(2),
          }}
        />
      </View>
      <Text
        style={{
          fontFamily: 'Metropolis-Medium',
          color: '#7C7D7E',
          fontSize: 14,
          marginHorizontal: wp(5),
          marginTop: hp(-1),
        }}>
        Find discounts, Offers special{'\n'} meals and more!
      </Text>
      <Button
        style={{
          backgroundColor: '#FC6011',
          width: wp(38),
          height: hp(4),
          marginLeft: wp(4.5),
          borderRadius: 25,
          marginTop: hp(1),
        }}>
        <Text
          style={{
            fontFamily: 'Metropolis-SemiBold',
            color: '#FFFFFF',
            fontSize: 11,
            textTransform: 'none',
          }}>
          Check Offers
        </Text>
      </Button>
      <View style={{flexDirection: 'column', marginTop: hp(2.5)}}>
        <Image
          source={require('../../assets/icons/Cafe2.jpg')}
          style={{
            height: hp(16),
            width: wp(100),
            // marginHorizontal: widthPercentageToDP(6),
            marginVertical: hp(-0.8),
          }}
        />
        <Text
          style={{
            fontFamily: 'Metropolis-Bold',
            fontSize: 16,
            color: '#4A4B4D',
            marginVertical: hp(1),
            marginHorizontal: wp(3),
          }}>
          Café de Noires
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: wp(3),
            marginTop: hp(-1),
          }}>
          <Image
            source={require('../../assets/icons/star.png')}
            style={{
              height: hp(2),
              width: wp(4),
              marginTop: hp(-0.3),
            }}
          />
          <Text
            style={{
              fontFamily: 'Metropolis-Regular',
              color: '#Fc6011',
              paddingLeft: wp(1),
              marginVertical: hp(-0.5),
            }}>
            4.9
          </Text>
          <Text
            style={{
              color: '#B6B7B7',
              fontFamily: 'Metropolis-Regular',
              fontSize: 11,
              marginVertical: hp(-0.3),
              paddingLeft: wp(0.5),
            }}>
            (124 Ratings)
          </Text>
          <Text
            style={{
              color: '#B6B7B7',
              fontFamily: 'Metropolis-Regular',
              fontSize: 11,
              marginVertical: hp(-0.3),
              paddingLeft: wp(1),
            }}>
            Cafe
          </Text>
          <Text
            style={{
              color: '#B6B7B7',
              fontFamily: 'Metropolis-Regular',
              fontSize: 11,
              marginVertical: hp(-0.3),
              paddingLeft: wp(10),
            }}>
            Western Food
          </Text>
        </View>
      </View>
      <View style={{marginVertical: hp(1)}}>
        <Image
          source={require('../../assets/icons/Isso.jpg')}
          style={{
            height: hp(16),
            width: wp(100),
            // marginHorizontal: widthPercentageToDP(6),
            marginVertical: hp(2),
          }}
        />
        <Text
          style={{
            marginVertical: hp(-2),
            marginLeft: wp(3),
            fontFamily: 'Metropolis-Bold',
            fontSize: 16,
            color: '#4A4B4D',
          }}>
          Isso
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: wp(3),
            marginVertical: hp(2),
          }}>
          <Image
            source={require('../../assets/icons/star.png')}
            style={{
              height: hp(2),
              width: wp(4),
              marginTop: hp(-0.3),
            }}
          />
          <Text
            style={{
              fontFamily: 'Metropolis-Regular',
              color: '#Fc6011',
              paddingLeft: wp(1),
              marginVertical: hp(-0.5),
            }}>
            4.9
          </Text>
          <Text
            style={{
              color: '#B6B7B7',
              fontFamily: 'Metropolis-Regular',
              fontSize: 11,
              marginVertical: hp(-0.3),
              paddingLeft: wp(0.5),
            }}>
            (124 Ratings)
          </Text>
          <Text
            style={{
              color: '#B6B7B7',
              fontFamily: 'Metropolis-Regular',
              fontSize: 11,
              marginVertical: hp(-0.3),
              paddingLeft: wp(1),
            }}>
            Cafe
          </Text>
          <Text
            style={{
              color: '#B6B7B7',
              fontFamily: 'Metropolis-Regular',
              fontSize: 11,
              marginVertical: hp(-0.3),
              paddingLeft: wp(10),
            }}>
            Western Food
          </Text>
        </View>
      </View>
      <Image
        source={require('../../assets/icons/cafee.jpg')}
        style={{
          height: hp(16),
          width: wp(100),
          // marginHorizontal: widthPercentageToDP(6),
          marginVertical: hp(-1),
        }}
      />
      <Text
        style={{
          marginHorizontal: wp(3),
          // marginVertical: heightPercentageToDP(-1),
          marginVertical: hp(1),
          fontFamily: 'Metropolis-Bold',
          fontSize: 16,
          color: '#4A4B4D',
        }}>
        Cafe Beans
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: wp(3),
          marginTop: hp(-1),
        }}>
        <Image
          source={require('../../assets/icons/star.png')}
          style={{
            height: hp(2),
            width: wp(4),
            marginTop: hp(-0.3),
          }}
        />
        <Text
          style={{
            fontFamily: 'Metropolis-Regular',
            color: '#Fc6011',
            paddingLeft: wp(1),
            marginVertical: hp(-0.5),
          }}>
          4.9
        </Text>
        <Text
          style={{
            color: '#B6B7B7',
            fontFamily: 'Metropolis-Regular',
            fontSize: 11,
            marginVertical: hp(-0.3),
            paddingLeft: wp(0.5),
          }}>
          (124 Ratings)
        </Text>
        <Text
          style={{
            color: '#B6B7B7',
            fontFamily: 'Metropolis-Regular',
            fontSize: 11,
            marginVertical: hp(-0.3),
            paddingLeft: wp(1),
          }}>
          Cafe
        </Text>
        <Text
          style={{
            color: '#B6B7B7',
            fontFamily: 'Metropolis-Regular',
            fontSize: 11,
            marginVertical: hp(-0.3),
            paddingLeft: wp(10),
          }}>
          Western Food
        </Text>
      </View>
      <View />
    </View>
  );
}
export default offerScreen;
