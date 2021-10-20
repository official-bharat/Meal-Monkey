import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Image, ScrollView} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MenuScreen from '../../screens/MenuScreen/index';
import offerScreen from '../OffersScreen/index';
import ProfileScreen from '../ProfileScreen/index';
import MoreScreen from '../MoreScreen/index';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        backgroundColor: '#ffffff',
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: '#ffffff',

          borderTopRightRadius: 22,
          borderTopLeftRadius: 22,
          height: heightPercentageToDP(9),
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={SearchFood}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../assets/icons/home.png')}
                style={{
                  width: widthPercentageToDP(6),
                  height: heightPercentageToDP(3),
                  tintColor: focused ? '#FC6011' : '#748c94',
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10.5,
                  color: focused ? '#FC6011' : '#748c94',
                  marginHorizontal: widthPercentageToDP(-0.5),
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../assets/icons/menuT.png')}
                style={{
                  width: widthPercentageToDP(6),
                  height: heightPercentageToDP(3),
                  tintColor: focused ? '#FC6011' : '#748c94',
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10.5,
                  color: focused ? '#FC6011' : '#748c94',
                  marginHorizontal: widthPercentageToDP(-0.5),
                }}>
                Menu
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Offers"
        component={offerScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../assets/icons/bag.png')}
                style={{
                  width: widthPercentageToDP(6),
                  height: heightPercentageToDP(3),
                  tintColor: focused ? '#FC6011' : '#748c94',
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10.5,
                  color: focused ? '#FC6011' : '#748c94',
                  marginHorizontal: widthPercentageToDP(-0.5),
                }}>
                Offers
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../assets/icons/profileT.png')}
                style={{
                  width: widthPercentageToDP(6),
                  height: heightPercentageToDP(3),
                  tintColor: focused ? '#FC6011' : '#748c94',
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10.5,
                  color: focused ? '#FC6011' : '#748c94',
                  marginHorizontal: widthPercentageToDP(-0.5),
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../assets/icons/showmore.png')}
                style={{
                  width: widthPercentageToDP(6),
                  height: heightPercentageToDP(3),
                  tintColor: focused ? '#FC6011' : '#748c94',
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10.5,
                  color: focused ? '#FC6011' : '#748c94',
                  marginHorizontal: widthPercentageToDP(-0.5),
                }}>
                More
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function SearchFood() {
  const {navigate} = useNavigation();
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{flexDirection: 'row', backgroundColor: '#ffffff'}}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'Metropolis-ExtraBold',
            color: '#4A4B4D',
            padding: heightPercentageToDP(2),
            marginHorizontal: widthPercentageToDP(1),
          }}>
          Good morning Akila!
        </Text>
        <Image
          source={require('../../assets/icons/cardt.png')}
          style={{
            width: widthPercentageToDP(6),
            height: heightPercentageToDP(3),
            marginLeft: widthPercentageToDP(11),
            marginTop: heightPercentageToDP(2.5),
          }}
        />
      </View>
      <View style={{margin: widthPercentageToDP(3)}}>
        <Text
          style={{
            fontSize: 11,
            fontFamily: 'Metropolis-Regular',
            marginHorizontal: widthPercentageToDP(3),
          }}>
          Delivery to
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'Metropolis-Bold',
              fontSize: 16,
              color: '#7C7D7E',
              marginHorizontal: widthPercentageToDP(3),
              marginVertical: heightPercentageToDP(0.5),
            }}>
            Curent Loction
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/down.png')}
              style={{
                marginTop: heightPercentageToDP(1),
                marginLeft: widthPercentageToDP(10),
                width: widthPercentageToDP(3),
                height: heightPercentageToDP(1),
              }}
            />
          </TouchableOpacity>
        </View>
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
      <ScrollView
        style={{
          margin: widthPercentageToDP(2),
          marginTop: heightPercentageToDP(5),
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require('../../assets/icons/burger.jpg')}
            style={{
              width: widthPercentageToDP(25),
              height: heightPercentageToDP(14),
              borderRadius: 20,
              marginHorizontal: heightPercentageToDP(1),
            }}
          />
          <Text
            style={{
              marginHorizontal: widthPercentageToDP(10),
              fontFamily: 'Metropolis-Bold',
              fontSize: 14,
            }}>
            Offer
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require('../../assets/icons/shri.jpg')}
            style={{
              width: widthPercentageToDP(25),
              height: heightPercentageToDP(14),
              marginHorizontal: heightPercentageToDP(1),
              borderRadius: 20,
            }}
          />
          <Text
            style={{
              marginHorizontal: widthPercentageToDP(5),
              fontFamily: 'Metropolis-Bold',
              fontSize: 14,
            }}>
            Sri Lankan
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require('../../assets/icons/italian.jpg')}
            style={{
              width: widthPercentageToDP(25),
              height: heightPercentageToDP(14),
              borderRadius: 20,
              marginHorizontal: heightPercentageToDP(1),
            }}
          />
          <Text
            style={{
              marginHorizontal: widthPercentageToDP(8),
              fontFamily: 'Metropolis-Bold',
              fontSize: 14,
            }}>
            ltallan
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require('../../assets/icons/pizza.png')}
            style={{
              width: widthPercentageToDP(25),
              height: heightPercentageToDP(14),
              borderRadius: 20,
              marginHorizontal: heightPercentageToDP(1),
            }}
          />
          <Text
            style={{
              marginHorizontal: widthPercentageToDP(8),
              fontFamily: 'Metropolis-Bold',
              fontSize: 14,
            }}>
            Offers
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require('../../assets/icons/Cafe.jpg')}
            style={{
              width: widthPercentageToDP(25),
              height: heightPercentageToDP(14),
              borderRadius: 20,
              marginHorizontal: heightPercentageToDP(1),
            }}
          />
          <Text
            style={{
              marginHorizontal: widthPercentageToDP(3),
              fontFamily: 'Metropolis-Bold',
              fontSize: 14,
            }}>
            Cafe de Noir
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: widthPercentageToDP(5),
          marginVertical: heightPercentageToDP(5),
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Metropolis-ExtraBold',
            color: '#4A4B4D',
          }}>
          Popular Restaurents
        </Text>
        <Text
          style={{
            marginVertical: widthPercentageToDP(1),
            marginHorizontal: widthPercentageToDP(22),
            color: '#fc6011',
            fontSize: 13,
            fontFamily: 'Metropolis-Medium',
          }}>
          View all
        </Text>
      </View>
      <View style={{flexDirection: 'column'}}>
        <Image
          source={require('../../assets/icons/pizza.png')}
          style={{
            height: heightPercentageToDP(30),
            width: widthPercentageToDP(100),
            // marginHorizontal: widthPercentageToDP(6),
            marginVertical: heightPercentageToDP(-0.8),
          }}
        />
        <Text
          style={{
            fontFamily: 'Metropolis-Bold',
            fontSize: 16,
            color: '#4A4B4D',
            marginVertical: heightPercentageToDP(2),
            marginHorizontal: widthPercentageToDP(3),
          }}>
          Minute by tuk tuk
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: widthPercentageToDP(3),
            marginTop: heightPercentageToDP(-1),
          }}>
          <Image
            source={require('../../assets/icons/star.png')}
            style={{
              height: heightPercentageToDP(2),
              width: widthPercentageToDP(4),
              marginTop: heightPercentageToDP(-0.3),
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
            (124 Ratings)
          </Text>
          <Text
            style={{
              color: '#B6B7B7',
              fontFamily: 'Metropolis-Regular',
              fontSize: 11,
              marginVertical: heightPercentageToDP(-0.3),
              paddingLeft: widthPercentageToDP(1),
            }}>
            Cafe
          </Text>
          <Text
            style={{
              color: '#B6B7B7',
              fontFamily: 'Metropolis-Regular',
              fontSize: 11,
              marginVertical: heightPercentageToDP(-0.3),
              paddingLeft: widthPercentageToDP(10),
            }}>
            Western Food
          </Text>
        </View>
      </View>
      <View style={{marginVertical: heightPercentageToDP(1.5)}}>
        <Image
          source={require('../../assets/icons/Cafe.jpg')}
          style={{
            height: heightPercentageToDP(30),
            width: widthPercentageToDP(100),
            // marginHorizontal: widthPercentageToDP(6),
            marginVertical: heightPercentageToDP(2),
          }}
        />
        <Text
          style={{
            marginVertical: heightPercentageToDP(-1),
            marginLeft: widthPercentageToDP(3),
            fontFamily: 'Metropolis-Bold',
            fontSize: 16,
            color: '#4A4B4D',
          }}>
          Cafe de Noir
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: widthPercentageToDP(3),
            marginVertical: heightPercentageToDP(2),
          }}>
          <Image
            source={require('../../assets/icons/star.png')}
            style={{
              height: heightPercentageToDP(2),
              width: widthPercentageToDP(4),
              marginTop: heightPercentageToDP(-0.3),
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
            (124 Ratings)
          </Text>
          <Text
            style={{
              color: '#B6B7B7',
              fontFamily: 'Metropolis-Regular',
              fontSize: 11,
              marginVertical: heightPercentageToDP(-0.3),
              paddingLeft: widthPercentageToDP(1),
            }}>
            Cafe
          </Text>
          <Text
            style={{
              color: '#B6B7B7',
              fontFamily: 'Metropolis-Regular',
              fontSize: 11,
              marginVertical: heightPercentageToDP(-0.3),
              paddingLeft: widthPercentageToDP(10),
            }}>
            Western Food
          </Text>
        </View>
      </View>
      <Image
        source={require('../../assets/icons/Tella.jpeg')}
        style={{
          height: heightPercentageToDP(30),
          width: widthPercentageToDP(100),
          // marginHorizontal: widthPercentageToDP(6),
          marginVertical: heightPercentageToDP(-1),
        }}
      />
      <Text
        style={{
          marginHorizontal: widthPercentageToDP(3),
          // marginVertical: heightPercentageToDP(-1),
          marginVertical: heightPercentageToDP(2),
          fontFamily: 'Metropolis-Bold',
          fontSize: 16,
          color: '#4A4B4D',
        }}>
        Bakes by Tella
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: widthPercentageToDP(3),
          marginTop: heightPercentageToDP(-1),
        }}>
        <Image
          source={require('../../assets/icons/star.png')}
          style={{
            height: heightPercentageToDP(2),
            width: widthPercentageToDP(4),
            marginTop: heightPercentageToDP(-0.3),
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
          (124 Ratings)
        </Text>
        <Text
          style={{
            color: '#B6B7B7',
            fontFamily: 'Metropolis-Regular',
            fontSize: 11,
            marginVertical: heightPercentageToDP(-0.3),
            paddingLeft: widthPercentageToDP(1),
          }}>
          Cafe
        </Text>
        <Text
          style={{
            color: '#B6B7B7',
            fontFamily: 'Metropolis-Regular',
            fontSize: 11,
            marginVertical: heightPercentageToDP(-0.3),
            paddingLeft: widthPercentageToDP(10),
          }}>
          Western Food
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: widthPercentageToDP(5),
          marginTop: heightPercentageToDP(3),
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Metropolis-ExtraBold',
            color: '#4A4B4D',
          }}>
          Most Popular
        </Text>
        <Text
          style={{
            marginVertical: widthPercentageToDP(1),
            marginHorizontal: widthPercentageToDP(38),
            color: '#fc6011',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
          }}>
          View all
        </Text>
      </View>
      <ScrollView
        style={{margin: widthPercentageToDP(2)}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require('../../assets/icons/burger.jpg')}
            style={{
              width: widthPercentageToDP(40),
              height: heightPercentageToDP(15),
              borderRadius: 20,
              marginHorizontal: heightPercentageToDP(1),
            }}
          />
          <Text
            style={{
              marginHorizontal: widthPercentageToDP(15),
              fontFamily: 'Metropolis-Bold',
              color: '#4A4B4D',
              fontSize: 18,
            }}>
            Burger
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require('../../assets/icons/shri.jpg')}
            style={{
              width: widthPercentageToDP(40),
              height: heightPercentageToDP(15),
              marginHorizontal: heightPercentageToDP(1),
              borderRadius: 20,
            }}
          />
          <Text
            style={{
              marginHorizontal: widthPercentageToDP(11),
              fontFamily: 'Metropolis-Bold',
              color: '#4A4B4D',
              fontSize: 18,
            }}>
            Sri Lankan
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require('../../assets/icons/italian.jpg')}
            style={{
              width: widthPercentageToDP(40),
              height: heightPercentageToDP(15),
              borderRadius: 20,
              marginHorizontal: heightPercentageToDP(1),
            }}
          />
          <Text
            style={{
              marginHorizontal: widthPercentageToDP(15),
              fontFamily: 'Metropolis-Bold',
              color: '#4A4B4D',
              fontSize: 18,
            }}>
            ltallan
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require('../../assets/icons/pizza.png')}
            style={{
              width: widthPercentageToDP(40),
              height: heightPercentageToDP(15),
              borderRadius: 20,
              marginHorizontal: heightPercentageToDP(1),
            }}
          />
          <Text
            style={{
              marginHorizontal: widthPercentageToDP(15),
              fontFamily: 'Metropolis-Bold',
              color: '#4A4B4D',
              fontSize: 18,
            }}>
            Offers
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require('../../assets/icons/Cafe.jpg')}
            style={{
              width: widthPercentageToDP(40),
              height: heightPercentageToDP(15),
              borderRadius: 20,
              marginHorizontal: heightPercentageToDP(1),
            }}
          />
          <Text
            style={{
              marginHorizontal: widthPercentageToDP(8.5),
              fontFamily: 'Metropolis-Bold',
              color: '#4A4B4D',
              fontSize: 18,
            }}>
            Cafe de Noir
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: widthPercentageToDP(5),
          marginTop: heightPercentageToDP(3),
        }}>
        <Text
          style={{
            fontSize: 26,
            fontFamily: 'Metropolis-ExtraBold',
            color: '#4A4B4D',
          }}>
          Recent Items
        </Text>
        <Text
          style={{
            marginVertical: widthPercentageToDP(2),
            marginHorizontal: widthPercentageToDP(28),
            fontSize: 13,
            fontFamily: 'Metropolis-Medium',
            color: '#fc6011',
          }}>
          View all
        </Text>
      </View>

      <ScrollView
        style={{margin: widthPercentageToDP(2)}}
        Vertical={true}
        showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/icons/pizza1.jpg')}
            style={{
              width: widthPercentageToDP(30),
              height: heightPercentageToDP(15),
              borderRadius: 20,
              marginVertical: heightPercentageToDP(1),
            }}
          />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                marginHorizontal: widthPercentageToDP(7),
                marginTop: heightPercentageToDP(2),
                width: widthPercentageToDP(53),
                fontFamily: 'Metropolis-Bold',
                fontSize: 18,
                color: '#4A4B4D',
              }}>
              Mulberry Pizza by Josh
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: widthPercentageToDP(7),
              }}>
              <Text
                style={{
                  fontFamily: 'Metropolis-Regular',
                  fontSize: 11,
                  color: '#B6B7B7',
                }}>
                Cafe
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#FC6011',
                  marginTop: heightPercentageToDP(-1),
                  paddingLeft: widthPercentageToDP(1),
                }}>
                .
              </Text>
              <Text
                style={{
                  fontFamily: 'Metropolis-Regular',
                  fontSize: 11,
                  color: '#B6B7B7',
                }}>
                Western Food
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: widthPercentageToDP(7),
              }}>
              <Image
                source={require('../../assets/icons/star.png')}
                style={{marginTop: heightPercentageToDP(0.5)}}
              />
              <Text
                style={{
                  fontFamily: 'Metropolis-Regular',
                  color: '#Fc6011',
                  paddingLeft: widthPercentageToDP(1),
                }}>
                4.9
              </Text>
              <Text
                style={{
                  paddingLeft: widthPercentageToDP(1),
                  marginTop: heightPercentageToDP(0.3),
                  color: '#B6B7B7',
                  fontFamily: 'Metropolis-Regular',
                  fontSize: 11,
                }}>
                (124 Ratings)
              </Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/icons/Barita.jpg')}
            style={{
              width: widthPercentageToDP(30),
              height: heightPercentageToDP(15),
              marginVertical: heightPercentageToDP(1),
              borderRadius: 20,
            }}
          />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                marginHorizontal: widthPercentageToDP(7),
                marginTop: heightPercentageToDP(2),
                width: widthPercentageToDP(53),
                fontFamily: 'Metropolis-Bold',
                fontSize: 18,
                color: '#4A4B4D',
              }}>
              Barita
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: widthPercentageToDP(7),
              }}>
              <Text
                style={{
                  fontFamily: 'Metropolis-Regular',
                  fontSize: 11,
                  color: '#B6B7B7',
                }}>
                Cafe
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#FC6011',
                  marginTop: heightPercentageToDP(-1),
                  paddingLeft: widthPercentageToDP(1),
                }}>
                .
              </Text>
              <Text
                style={{
                  fontFamily: 'Metropolis-Regular',
                  fontSize: 11,
                  color: '#B6B7B7',
                }}>
                Food
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: widthPercentageToDP(7),
              }}>
              <Image
                source={require('../../assets/icons/star.png')}
                style={{marginTop: heightPercentageToDP(0.5)}}
              />
              <Text
                style={{
                  fontFamily: 'Metropolis-Regular',
                  color: '#Fc6011',
                  paddingLeft: widthPercentageToDP(1),
                }}>
                4.9
              </Text>
              <Text
                style={{
                  paddingLeft: widthPercentageToDP(1),
                  marginTop: heightPercentageToDP(0.3),
                  color: '#B6B7B7',
                  fontFamily: 'Metropolis-Regular',
                  fontSize: 11,
                }}>
                (124 Ratings)
              </Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/Pizza2.jpeg')}
              style={{
                width: widthPercentageToDP(30),
                height: heightPercentageToDP(15),
                borderRadius: 20,
                marginVertical: heightPercentageToDP(1),
              }}
            />
          </TouchableOpacity>

          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                marginHorizontal: widthPercentageToDP(7),
                marginTop: heightPercentageToDP(2),
                width: widthPercentageToDP(53),
                fontFamily: 'Metropolis-Bold',
                fontSize: 18,
                color: '#4A4B4D',
              }}>
              Pizza Rush Hour
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: widthPercentageToDP(7),
              }}>
              <Text
                style={{
                  fontFamily: 'Metropolis-Regular',
                  fontSize: 11,
                  color: '#B6B7B7',
                }}>
                Cafe
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#FC6011',
                  marginTop: heightPercentageToDP(-1),
                  paddingLeft: widthPercentageToDP(1),
                }}>
                .
              </Text>
              <Text
                style={{
                  fontFamily: 'Metropolis-Regular',
                  fontSize: 11,
                  color: '#B6B7B7',
                }}>
                Italian Food
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: widthPercentageToDP(7),
              }}>
              <Image
                source={require('../../assets/icons/star.png')}
                style={{marginTop: heightPercentageToDP(0.5)}}
              />
              <Text
                style={{
                  fontFamily: 'Metropolis-Regular',
                  color: '#Fc6011',
                  paddingLeft: widthPercentageToDP(1),
                }}>
                4.9
              </Text>
              <Text
                style={{
                  paddingLeft: widthPercentageToDP(1),
                  marginTop: heightPercentageToDP(0.3),
                  color: '#B6B7B7',
                  fontFamily: 'Metropolis-Regular',
                  fontSize: 11,
                }}>
                (124 Ratings)
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

export default App;
