import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native';

function ChickenScreen() {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{flex: 0.5}}>
        <ImageBackground
          source={require('../../assets/icons/Chicken1.jpeg')}
          style={{width: wp(100), height: hp(30)}}
        />
        <Image
          source={require('../../assets/icons/s2.png')}
          style={{
            marginVertical: hp(-28),
            marginLeft: wp(86),
            width: wp(7.5),
            height: hp(3.5),
          }}
        />
      </View>
      <View
        style={{
          flex: 1.9,
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          width: wp(100),
        }}>
        <View style={{margin: hp(3)}}>
          <Text
            style={{
              fontFamily: 'Metropolis-ExtraBold',
              color: '#4A4B4D',
              fontSize: 22,
            }}>
            Tandoori Chicken Pizza
          </Text>
          <Image
            source={require('../../assets/icons/fourStar.png')}
            style={{marginVertical: hp(0.8), width: wp(30), height: hp(2)}}
          />
          <Text
            style={{
              color: '#EE5A30',
              fontFamily: 'Metropolis-Medium',
              fontSize: 11,
            }}>
            4 Star Ratings
          </Text>
          <View />
          <View style={{marginLeft: wp(53), marginTop: hp(-2)}}>
            <Text
              style={{
                fontFamily: 'Metropolis-Bold',
                fontSize: 31,
                color: '#4A4B4D',
              }}>
              Rs. 750
            </Text>
            <Text
              style={{
                fontFamily: 'CircularStd-Medium',
                fontSize: 12,
                color: '#4A4B4D',
                marginLeft: wp(12),
              }}>
              / per Portion
            </Text>
          </View>
        </View>
        <View style={{margin: wp(3.5), marginTop: hp(-4)}}>
          <Text
            style={{
              color: '#4A4B4D',
              fontFamily: 'Metropolis-Bold',
              fontSize: 14,
            }}>
            Description
          </Text>
          <Text
            style={{
              color: '#7C7D7E',
              fontFamily: 'Metropolis-Regular',
              fontSize: 12,
              marginTop: hp(1),
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare leo
            non mollis id cursus. Eu euismod faucibus in leo malesuada
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#F2F2F2',
            marginHorizontal: wp(4),
          }}
        />
        <View style={{margin: wp(3), marginTop: hp(-0.2)}}>
          <Text
            style={{
              color: '#4A4B4D',
              fontFamily: 'Metropolis-Bold',
              fontSize: 14,
              marginTop: hp(1),
              marginLeft: wp(1),
            }}>
            Customize your Order
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="- Select the size of portion -"
              placeholderTextColor="#4A4B4D"
              fontSize={25}
              fontFamily="Metropolis-Medium"
              style={{
                height: hp(7),
                width: wp(90),
                marginHorizontal: wp(3),
                marginTop: hp(1.5),
                textAlign: 'left',
              }}
            />
            <Image
              source={require('../../assets/icons/arrowDown.png')}
              style={{marginLeft: wp(-11), marginTop: hp(4)}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="- Select the ingredients -"
              placeholderTextColor="#4A4B4D"
              fontSize={25}
              fontFamily="Metropolis-Medium"
              style={{
                height: hp(7),
                width: wp(90),
                marginHorizontal: wp(3),
                marginTop: hp(1.5),
                textAlign: 'left',
              }}
            />
            <Image
              source={require('../../assets/icons/arrowDown.png')}
              style={{marginLeft: wp(-11), marginTop: hp(4)}}
            />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: wp(3.6),
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#4A4B4D',
              fontFamily: 'Metropolis-Bold',
              fontSize: 14,
              marginTop: hp(1),
            }}>
            Number of Portions
          </Text>
          <Button
            style={{
              backgroundColor: '#FC6011',
              borderRadius: 20,
              marginLeft: wp(4),
              height: hp(5),
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontFamily: 'CircularStd-Black',
                fontSize: 14,
              }}>
              -
            </Text>
          </Button>
          <Button
            style={{
              borderColor: '#FC6011',
              borderRadius: 20,
              borderWidth: 1,
              marginLeft: wp(0.5),
              height: hp(5),
            }}>
            <Text
              style={{
                color: '#FC6011',
                fontFamily: 'CircularStd-Black',
                fontSize: 14,
              }}>
              2
            </Text>
          </Button>
          <Button
            style={{
              backgroundColor: '#FC6011',
              borderRadius: 20,
              marginLeft: wp(0.5),
              height: hp(5),
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontFamily: 'CircularStd-Black',
                fontSize: 14,
              }}>
              +
            </Text>
          </Button>
        </View>

        <View style={{marginTop: hp(2)}}>
          <ImageBackground
            source={require('../../assets/icons/raman.png')}
            style={{width: wp(21), height: hp(20)}}
          />
          <View
            style={{
              width: wp(80),
              borderWidth: -1,
              height: hp(13),
              marginTop: hp(-16.6),
              marginHorizontal: wp(10),
              borderTopLeftRadius: 25,
              borderBottomLeftRadius: 25,
              backgroundColor: '#ffffff',
              elevation: 7,
              alignItems: 'center',
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Metropolis-Medium',
                fontSize: 12,
                color: '#4A4B4D',
              }}>
              Total Price
            </Text>
            <Text
              style={{
                fontFamily: ' Metropolis-Bold',
                fontSize: 21,
                color: '#4A4B4D',
              }}>
              LKR 1500
            </Text>
            <Button
              style={{
                backgroundColor: '#FC6011',
                width: wp(50),
                height: hp(5),
                borderRadius: 17,
                marginTop: hp(1),
              }}>
              <Text
                style={{
                  fontFamily: 'Metropolis-SemiBold',
                  color: '#ffffff',
                  fontSize: 11,
                }}>
                Add to Cart
              </Text>
            </Button>

            <View
              style={{
                width: wp(12),
                height: hp(6.5),
                borderRadius: 25,
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: wp(80),
                marginTop: hp(-8.8),
                elevation: 3,
              }}>
              <Image
                source={require('../../assets/icons/s3.png')}
                style={{height: hp(3), width: wp(6)}}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default ChickenScreen;
