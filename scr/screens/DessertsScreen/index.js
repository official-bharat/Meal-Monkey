import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';

const DessertsScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigate('SearchFood')}>
          <Image
            source={require('../../assets/icons/leftarrow.png')}
            style={{
              width: widthPercentageToDP(5),
              height: heightPercentageToDP(2),
              marginTop: heightPercentageToDP(3),
              marginLeft: widthPercentageToDP(1),
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Metropolis-ExtraBold',
            color: '#4A4B4D',
            padding: heightPercentageToDP(2),
            marginHorizontal: widthPercentageToDP(1),
          }}>
          Desserts
        </Text>

        <Image
          source={require('../../assets/icons/s1.png')}
          style={{
            width: widthPercentageToDP(6),
            height: heightPercentageToDP(3),
            marginLeft: widthPercentageToDP(45),
            marginTop: heightPercentageToDP(2),
          }}
        />
      </View>
      <View>
        <TextInput
          placeholder="Search food"
          placeholderTextColor="#B6B7B7"
          backgroundColor="#F2F2F2"
          underlineColor="#ffffff"
          borderRadius={30}
          theme={{roundness: 28}}
          style={{
            margin: heightPercentageToDP(1),
            marginHorizontal: widthPercentageToDP(4),
            fontSize: 14,
            height: heightPercentageToDP(7),
            borderRadius: 30,
            backgroundColor: '#F2F2F2',
            paddingLeft: 35,
          }}
        />
        <Image
          source={require('../../assets/icons/search.png')}
          style={{
            width: widthPercentageToDP(5.2),
            height: heightPercentageToDP(2.7),
            marginTop: heightPercentageToDP(-5.6),
            marginLeft: widthPercentageToDP(8),
          }}
        />
      </View>
      <View style={{flexDirection: 'column'}}>
        <View style={{marginTop: heightPercentageToDP(3)}}>
          <TouchableOpacity onPress={() => navigate('ChickenScreen')}>
            <Image
              source={require('../../assets/icons/david.jpg')}
              style={{
                height: heightPercentageToDP(18),
                width: widthPercentageToDP(100),
                marginTop: heightPercentageToDP(0.5),
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Metropolis-Bold',
              fontSize: 16,
              color: '#ffffff',
              marginTop: heightPercentageToDP(-5.6),
              marginHorizontal: widthPercentageToDP(3),
            }}>
            French Apple Pie
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: widthPercentageToDP(3),
              marginTop: heightPercentageToDP(0.2),
            }}>
            <Image
              source={require('../../assets/icons/star.png')}
              style={{
                height: heightPercentageToDP(2),
                width: widthPercentageToDP(4),
                marginTop: heightPercentageToDP(-0.5),
              }}
            />
            <Text
              style={{
                fontFamily: 'Metropolis-Regular',
                color: '#Fc6011',
                paddingLeft: widthPercentageToDP(1),
                marginVertical: heightPercentageToDP(-0.5),
              }}>
              4.9
            </Text>
            <Text
              style={{
                color: '#B6B7B7',
                fontFamily: 'Metropolis-Regular',
                fontSize: 11,
                marginVertical: heightPercentageToDP(-0.3),
                paddingLeft: widthPercentageToDP(0.5),
              }}>
              Minute by tuk tuk
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#FC6011',
                marginTop: heightPercentageToDP(-1),
                marginLeft: widthPercentageToDP(2),
              }}>
              .
            </Text>

            <Text
              style={{
                color: '#B6B7B7',
                fontFamily: 'Metropolis-Regular',
                fontSize: 11,
                marginVertical: heightPercentageToDP(-0.3),
                paddingLeft: widthPercentageToDP(2),
              }}>
              Desserts
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/icons/Dark.jpg')}
            style={{
              height: heightPercentageToDP(18),
              width: widthPercentageToDP(100),
              marginTop: heightPercentageToDP(1.7),

              // marginHorizontal: widthPercentageToDP(6),
            }}
          />
          <Text
            style={{
              fontFamily: 'Metropolis-Bold',
              fontSize: 16,
              color: '#ffffff',
              marginTop: heightPercentageToDP(-6),
              marginHorizontal: widthPercentageToDP(3),
            }}>
            Dark Chocolate Cake
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: widthPercentageToDP(3),
              marginTop: heightPercentageToDP(0.6),
            }}>
            <Image
              source={require('../../assets/icons/star.png')}
              style={{
                height: heightPercentageToDP(2),
                width: widthPercentageToDP(4),
                marginTop: heightPercentageToDP(-0.5),
              }}
            />
            <Text
              style={{
                fontFamily: 'Metropolis-Regular',
                color: '#Fc6011',
                paddingLeft: widthPercentageToDP(1),
                marginVertical: heightPercentageToDP(-0.5),
              }}>
              4.9
            </Text>
            <Text
              style={{
                color: '#B6B7B7',
                fontFamily: 'Metropolis-Regular',
                fontSize: 11,
                marginVertical: heightPercentageToDP(-0.3),
                paddingLeft: widthPercentageToDP(0.5),
              }}>
              Cakes by Tella
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#FC6011',
                marginTop: heightPercentageToDP(-1),
                marginLeft: widthPercentageToDP(2),
              }}>
              .
            </Text>

            <Text
              style={{
                color: '#B6B7B7',
                fontFamily: 'Metropolis-Regular',
                fontSize: 11,
                marginVertical: heightPercentageToDP(-0.3),
                paddingLeft: widthPercentageToDP(2),
              }}>
              Desserts
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/icons/Shake.jpg')}
            style={{
              height: heightPercentageToDP(18),
              width: widthPercentageToDP(100),
              marginTop: heightPercentageToDP(1.6),

              // marginHorizontal: widthPercentageToDP(6),
            }}
          />
          <Text
            style={{
              fontFamily: 'Metropolis-Bold',
              fontSize: 16,
              color: '#ffffff',
              marginTop: heightPercentageToDP(-6),
              marginHorizontal: widthPercentageToDP(3),
            }}>
            Street Shake
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: widthPercentageToDP(3),
              marginTop: heightPercentageToDP(0.6),
            }}>
            <Image
              source={require('../../assets/icons/star.png')}
              style={{
                height: heightPercentageToDP(2),
                width: widthPercentageToDP(4),
                marginTop: heightPercentageToDP(-0.5),
              }}
            />
            <Text
              style={{
                fontFamily: 'Metropolis-Regular',
                color: '#Fc6011',
                paddingLeft: widthPercentageToDP(1),
                marginVertical: heightPercentageToDP(-0.5),
              }}>
              4.9
            </Text>
            <Text
              style={{
                color: '#B6B7B7',
                fontFamily: 'Metropolis-Regular',
                fontSize: 11,
                marginVertical: heightPercentageToDP(-0.3),
                paddingLeft: widthPercentageToDP(0.5),
              }}>
              Cafe Racer
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#FC6011',
                marginTop: heightPercentageToDP(-1),
                marginLeft: widthPercentageToDP(2),
              }}>
              .
            </Text>

            <Text
              style={{
                color: '#B6B7B7',
                fontFamily: 'Metropolis-Regular',
                fontSize: 11,
                marginVertical: heightPercentageToDP(-0.3),
                paddingLeft: widthPercentageToDP(2),
              }}>
              Desserts
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/icons/Fudgy.jpg')}
            style={{
              height: heightPercentageToDP(17),
              width: widthPercentageToDP(100),
              // marginHorizontal: widthPercentageToDP(6),
              marginTop: heightPercentageToDP(1.7),
            }}
          />

          <Text
            style={{
              fontFamily: 'Metropolis-Bold',
              fontSize: 16,
              color: '#ffffff',
              marginTop: heightPercentageToDP(-6),
              marginHorizontal: widthPercentageToDP(3),
            }}>
            Fudgy Chewy Brownies
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: widthPercentageToDP(3),
              marginTop: heightPercentageToDP(1),
            }}>
            <Image
              source={require('../../assets/icons/star.png')}
              style={{
                height: heightPercentageToDP(2),
                width: widthPercentageToDP(4),
                marginTop: heightPercentageToDP(-0.5),
              }}
            />
            <Text
              style={{
                fontFamily: 'Metropolis-Regular',
                color: '#Fc6011',
                paddingLeft: widthPercentageToDP(1),
                marginVertical: heightPercentageToDP(-0.5),
              }}>
              4.9
            </Text>
            <Text
              style={{
                color: '#B6B7B7',
                fontFamily: 'Metropolis-Regular',
                fontSize: 11,
                marginVertical: heightPercentageToDP(-0.3),
                paddingLeft: widthPercentageToDP(0.5),
              }}>
              Minute by tuk tuk
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#FC6011',
                marginTop: heightPercentageToDP(-1),
                marginLeft: widthPercentageToDP(2),
              }}>
              .
            </Text>

            <Text
              style={{
                color: '#B6B7B7',
                fontFamily: 'Metropolis-Regular',
                fontSize: 11,
                marginVertical: heightPercentageToDP(-0.3),
                paddingLeft: widthPercentageToDP(2),
              }}>
              Desserts
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DessertsScreen;
