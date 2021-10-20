import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Modal, Text, Button, TextInput, Switch} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';

function OrderScreen() {
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
          My Order
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: wp(2.5),
          marginTop: hp(2),
        }}>
        <Image
          source={require('../../assets/icons/king3.jpg')}
          style={{
            width: wp(30),
            height: hp(15),
            borderRadius: 20,
            marginVertical: hp(1),
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              marginHorizontal: wp(7),
              marginTop: hp(2),
              width: wp(53),
              fontFamily: 'Metropolis-Bold',
              fontSize: 16,
              color: '#4A4B4D',
            }}>
            King Burgers
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: wp(7),
            }}>
            <Image
              source={require('../../assets/icons/star.png')}
              style={{marginTop: hp(0.5)}}
            />
            <Text
              style={{
                fontFamily: 'Metropolis-Regular',
                color: '#Fc6011',
                paddingLeft: wp(1),
              }}>
              4.9
            </Text>
            <Text
              style={{
                paddingLeft: wp(1),
                marginTop: hp(0.3),
                color: '#B6B7B7',
                fontFamily: 'Metropolis-Regular',
                fontSize: 12,
              }}>
              (124 Ratings)
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: wp(7),
            }}>
            <Text
              style={{
                fontFamily: 'Metropolis-Regular',
                fontSize: 12,
                color: '#B6B7B7',
              }}>
              Burger
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#FC6011',
                marginTop: hp(-1),
                paddingLeft: wp(1),
              }}>
              .
            </Text>
            <Text
              style={{
                fontFamily: 'Metropolis-Regular',
                fontSize: 12,
                color: '#B6B7B7',
              }}>
              Western Food
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: wp(7),
            }}>
            <Image
              source={require('../../assets/icons/location.png')}
              style={{marginTop: hp(0.5)}}
            />

            <Text
              style={{
                paddingLeft: wp(1),
                marginTop: hp(0.3),
                color: '#B6B7B7',
                fontFamily: 'Metropolis-Regular',
                fontSize: 12,
              }}>
              No 03, 4th Lane, Newyork
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: wp(100),
          height: hp(7),
          backgroundColor: '#F6F6F6',
        }}>
        <Text
          style={{
            marginLeft: wp(4),
            color: '#4A4B4D',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          Beef Burger x1
        </Text>
        <Text
          style={{
            marginLeft: wp(60),
            color: '#4A4B4D',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          $16
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: wp(4),
          borderBottomWidth: 1,
          borderBottomColor: '#E8E8E8',
          marginTop: hp(-0.5),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          width: wp(100),
          height: hp(7),
          backgroundColor: '#F6F6F6',
        }}>
        <Text
          style={{
            marginLeft: wp(4),
            color: '#4A4B4D',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          Classic Burger x1
        </Text>
        <Text
          style={{
            marginLeft: wp(56.2),
            color: '#4A4B4D',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          $14
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: wp(4),
          borderBottomWidth: 1,
          borderBottomColor: '#E8E8E8',
          marginTop: hp(-0.5),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          width: wp(100),
          height: hp(7),
          backgroundColor: '#F6F6F6',
        }}>
        <Text
          style={{
            marginLeft: wp(4),
            color: '#4A4B4D',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          Cheese Chicken Burger x1
        </Text>
        <Text
          style={{
            marginLeft: wp(41.8),
            color: '#4A4B4D',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          $17
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: wp(4),
          borderBottomWidth: 1,
          borderBottomColor: '#E8E8E8',
          marginTop: hp(-0.5),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          width: wp(100),
          height: hp(7),
          backgroundColor: '#F6F6F6',
        }}>
        <Text
          style={{
            marginLeft: wp(4),
            color: '#4A4B4D',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          Chicken Legs Basket x1
        </Text>
        <Text
          style={{
            marginLeft: wp(46),
            color: '#4A4B4D',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          $15
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: wp(4),
          borderBottomWidth: 1,
          borderBottomColor: '#E8E8E8',
          marginTop: hp(-0.5),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          width: wp(100),
          height: hp(7),
          backgroundColor: '#F6F6F6',
        }}>
        <Text
          style={{
            marginLeft: wp(4),
            color: '#4A4B4D',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          French Fries Large x1
        </Text>
        <Text
          style={{
            marginLeft: wp(49),
            color: '#4A4B4D',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          $16
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: wp(4),
          borderBottomWidth: 1,
          borderBottomColor: '#E8E8E8',
          marginTop: hp(-0.5),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          width: wp(100),
          height: hp(7),
        }}>
        <Text
          style={{
            marginLeft: wp(4),
            color: '#4A4B4D',
            fontFamily: 'Metropolis-Bold',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          Delivery Instrusctions
        </Text>
        <Text
          style={{
            marginLeft: wp(33),
            color: '#FC6011',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          + Add Notes
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: wp(4),
          borderBottomWidth: 1,
          borderBottomColor: '#E8E8E8',
          marginTop: hp(-0.5),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          width: wp(100),
          height: hp(7),
        }}>
        <Text
          style={{
            marginLeft: wp(4),
            color: '#4A4B4D',
            fontFamily: 'Metropolis-Bold',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          Sub Total
        </Text>
        <Text
          style={{
            marginLeft: wp(66.3),
            color: '#FC6011',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          $68
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: wp(100),
          height: hp(7),
        }}>
        <Text
          style={{
            marginLeft: wp(4),
            color: '#4A4B4D',
            fontFamily: 'Metropolis-Bold',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          Delivery Cost
        </Text>
        <Text
          style={{
            marginLeft: wp(62),
            color: '#FC6011',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          $2
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: wp(4),
          borderBottomWidth: 1,
          borderBottomColor: '#E8E8E8',
          marginTop: hp(-0.5),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          width: wp(100),
          height: hp(7),
        }}>
        <Text
          style={{
            marginLeft: wp(4),
            color: '#4A4B4D',
            fontFamily: 'Metropolis-Bold',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          Total
        </Text>
        <Text
          style={{
            marginLeft: wp(69),
            color: '#FC6011',
            fontFamily: 'Metropolis-Bold',
            fontSize: 22,
            paddingTop: hp(2),
          }}>
          $70
        </Text>
      </View>
      <Button
        onPress={() => navigate('CheckOut')}
        style={{
          marginHorizontal: wp(7),
          backgroundColor: '#fc6011',
          borderRadius: 30,
          marginTop: hp(5),
        }}
        color="#fff"
        contentStyle={{height: 53}}
        uppercase={false}>
        <Text
          style={{
            fontSize: 16,
            color: '#ffffff',
            fontFamily: 'Metropolis-SemiBold',
          }}>
          Checkout
        </Text>
      </Button>
    </View>
  );
}
export default OrderScreen;
