import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, ImageBackground, Image} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';

const MenuScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Metropolis-ExtraBold',
            color: '#4A4B4D',
            padding: heightPercentageToDP(2),
            marginHorizontal: widthPercentageToDP(1),
          }}>
          Menu
        </Text>
        <Image
          source={require('../../assets/icons/s1.png')}
          style={{
            width: widthPercentageToDP(6),
            height: heightPercentageToDP(3),
            marginLeft: widthPercentageToDP(60),
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
            width: widthPercentageToDP(5),
            height: heightPercentageToDP(2.6),
            marginTop: heightPercentageToDP(-5.6),
            marginLeft: widthPercentageToDP(9),
          }}
        />
      </View>
      <View
        style={{
          marginVertical: heightPercentageToDP(3),
          flexDirection: 'column',
        }}>
        <ImageBackground
          source={require('../../assets/icons/Sidebar.png')}
          style={{height: heightPercentageToDP(65), width: 90}}
        />
        <View
          style={{
            width: widthPercentageToDP(75),
            height: heightPercentageToDP(12),
            borderBottomLeftRadius: 40,
            borderTopLeftRadius: 40,
            backgroundColor: '#FFFFFF',
            marginHorizontal: widthPercentageToDP(15),
            margin: 20,
            marginTop: heightPercentageToDP(-62.5),
            elevation: 5,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              paddingTop: heightPercentageToDP(2),
              fontFamily: 'EtihadAltis-Bold',
              fontSize: 22,
            }}>
            Food
          </Text>

          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Metropolis-Regular',
              fontSize: 11,
              color: '#B6B7B7',
            }}>
            120 items
          </Text>
          <Image
            source={require('../../assets/icons/Food.jpg')}
            style={{
              width: widthPercentageToDP(18),
              height: heightPercentageToDP(9.2),
              marginTop: heightPercentageToDP(-6.5),
              marginLeft: widthPercentageToDP(-10),
              borderRadius: 50,
            }}
          />
          <View
            style={{
              width: widthPercentageToDP(11),
              height: heightPercentageToDP(6),
              borderRadius: 25,

              backgroundColor: '#ffffff',
              marginTop: heightPercentageToDP(-7.6),
              marginLeft: widthPercentageToDP(69.3),
              elevation: 5,
            }}>
            <Image
              source={require('../../assets/icons/greater1.png')}
              style={{
                width: widthPercentageToDP(12),
                height: heightPercentageToDP(2.2),
                marginVertical: heightPercentageToDP(1.7),
                marginLeft: widthPercentageToDP(-1),
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: widthPercentageToDP(75),
            height: heightPercentageToDP(12),
            borderBottomLeftRadius: 40,
            borderTopLeftRadius: 40,
            backgroundColor: '#FFFFFF',
            margin: 20,
            marginTop: heightPercentageToDP(1),
            marginHorizontal: widthPercentageToDP(15),
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            elevation: 5,
          }}>
          <Text
            style={{
              textAlign: 'center',
              paddingTop: heightPercentageToDP(2),
              fontFamily: 'EtihadAltis-Bold',
              fontSize: 22,
            }}>
            Beverages
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Metropolis-Regular',
              fontSize: 11,
              color: '#B6B7B7',
            }}>
            220 items
          </Text>
          <Image
            source={require('../../assets/icons/Beverages.jpg')}
            style={{
              width: widthPercentageToDP(17),
              height: heightPercentageToDP(9),
              marginTop: heightPercentageToDP(-6.7),
              marginLeft: widthPercentageToDP(-10),
              borderRadius: 10,
            }}
          />
          <View
            style={{
              width: widthPercentageToDP(11),
              height: heightPercentageToDP(6),
              borderRadius: 25,

              backgroundColor: '#ffffff',
              marginTop: heightPercentageToDP(-7.5),
              marginLeft: widthPercentageToDP(69.3),
              elevation: 5,
            }}>
            <Image
              source={require('../../assets/icons/greater1.png')}
              style={{
                width: widthPercentageToDP(12),
                height: heightPercentageToDP(2.2),
                marginVertical: heightPercentageToDP(1.7),
                marginLeft: widthPercentageToDP(-1),
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: widthPercentageToDP(75),
            height: heightPercentageToDP(12),
            borderBottomLeftRadius: 40,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: '#FFFFFF',
            margin: 20,
            marginTop: heightPercentageToDP(1),
            marginHorizontal: widthPercentageToDP(15),

            elevation: 5,
          }}>
          <Text
            style={{
              textAlign: 'center',
              paddingTop: heightPercentageToDP(2),
              fontFamily: 'EtihadAltis-Bold',
              fontSize: 22,
            }}>
            Desserts
          </Text>

          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Metropolis-Regular',
              fontSize: 11,
              color: '#B6B7B7',
              marginVertical: heightPercentageToDP(-0.5),
            }}>
            155 items
          </Text>
          <Image
            source={require('../../assets/icons/Desserts.jpeg')}
            style={{
              width: widthPercentageToDP(17),
              height: heightPercentageToDP(9),
              marginTop: heightPercentageToDP(-5.8),
              marginLeft: widthPercentageToDP(-10),

              borderRadius: 20,
            }}
          />
          <View
            style={{
              width: widthPercentageToDP(11),
              height: heightPercentageToDP(6),
              borderRadius: 25,

              backgroundColor: '#ffffff',
              marginTop: heightPercentageToDP(-7.6),
              marginLeft: widthPercentageToDP(69.3),
              elevation: 5,
            }}>
            <TouchableOpacity onPress={() => navigate('Desserts')}>
              <Image
                source={require('../../assets/icons/greater1.png')}
                style={{
                  width: widthPercentageToDP(12),
                  height: heightPercentageToDP(2.2),
                  marginVertical: heightPercentageToDP(1.7),
                  marginLeft: widthPercentageToDP(-1),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: widthPercentageToDP(75),
            height: heightPercentageToDP(12),
            borderBottomLeftRadius: 40,
            borderTopLeftRadius: 40,
            backgroundColor: '#FFFFFF',
            margin: 20,
            marginHorizontal: widthPercentageToDP(15),
            marginTop: heightPercentageToDP(1),
            elevation: 5,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              paddingTop: heightPercentageToDP(2),
              fontFamily: 'EtihadAltis-Bold',
              fontSize: 22,
            }}>
            Promotions
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Metropolis-Regular',
              fontSize: 11,
              color: '#B6B7B7',
            }}>
            25 items
          </Text>
          <Image
            source={require('../../assets/icons/Promotions.jpg')}
            style={{
              width: widthPercentageToDP(18),
              height: heightPercentageToDP(9.2),
              marginTop: heightPercentageToDP(-7),
              marginLeft: widthPercentageToDP(-10),
              borderRadius: 50,
            }}
          />
          <View
            style={{
              width: widthPercentageToDP(11),
              height: heightPercentageToDP(6),
              borderRadius: 25,

              backgroundColor: '#ffffff',
              marginTop: heightPercentageToDP(-7.6),
              marginLeft: widthPercentageToDP(69.3),
              elevation: 5,
            }}>
            <Image
              source={require('../../assets/icons/greater1.png')}
              style={{
                width: widthPercentageToDP(12),
                height: heightPercentageToDP(2.2),
                marginVertical: heightPercentageToDP(1.7),
                marginLeft: widthPercentageToDP(-1),
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default MenuScreen;
