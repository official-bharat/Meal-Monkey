import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Modal, Text, Button, TextInput, Switch} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';

function PaymentScreen() {
  const {navigate} = useNavigation();
  const [visible, setVisible] = React.useState(false);
  const [isSwitchEnabled, setSwitch] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: '#ffffff',
    height: hp(155),
    width: wp(100),
    marginTop: hp(75),

    borderRadius: 25,
  };

  return (
    <View style={{backgroundColor: '#ffffff', flex: 1, padding: hp(0.5)}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigate('SearchFood')}>
          <Image
            source={require('../../assets/icons/leftarrow.png')}
            style={{width: wp(5), height: hp(2), marginTop: hp(2.2)}}
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
          Payment Details
        </Text>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/s1.png')}
            style={{
              width: wp(6),
              height: hp(3),
              marginLeft: wp(25),
              marginTop: hp(1),
            }}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontFamily: 'Metropolis-Bold',
          color: '#4A4B4D',
          fontSize: 16,
          marginHorizontal: wp(4),
          marginTop: hp(2),
        }}>
        Customize your payment method
      </Text>
      <View
        style={{
          borderBottomWidth: 1,
          marginHorizontal: wp(4),
          borderBottomColor: '#F6F6F6',
          marginTop: hp(2),
        }}
      />
      <View
        style={{
          width: wp(100),
          height: hp(25),

          marginTop: hp(4),
          backgroundColor: '#F6F6F6',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'Metropolis-Bold',
              fontSize: 12,
              color: '#4A4B4D',
              padding: hp(2),
            }}>
            Cash/Card on delivery
          </Text>
          <Image
            source={require('../../assets/icons/check.png')}
            style={{
              width: wp(5),
              height: hp(3),
              marginTop: hp(1.5),
              marginLeft: wp(45),
            }}
          />
        </View>
        <View
          style={{
            marginHorizontal: wp(4),
            borderBottomWidth: 1,
            borderBottomColor: '#E8E8E8',
            marginTop: hp(-0.5),
          }}
        />
        <View style={{flexDirection: 'row', marginTop: hp(2)}}>
          <Image
            source={require('../../assets/icons/visa.png')}
            style={{
              width: wp(15),
              height: hp(3),
              marginHorizontal: wp(4),
              marginTop: hp(2),
            }}
          />
          <Text style={{marginTop: hp(2.5)}}>**** **** **** 2187</Text>
          <Button
            style={{
              borderColor: '#FC6011',
              marginTop: hp(8),
              height: hp(5),
              width: wp(32),

              borderRadius: 25,
              borderWidth: 1,
              marginLeft: wp(5),
              marginTop: hp(1.2),
            }}>
            <Text
              style={{
                textTransform: 'none',
                fontSize: 11,
                color: '#FC6011',
                fontFamily: 'Metropolis-Bold',
                width: wp(10),
              }}>
              Delete Card
            </Text>
          </Button>
        </View>
        <View
          style={{
            marginHorizontal: wp(4),
            borderBottomWidth: 1,
            borderBottomColor: '#E8E8E8',
            marginTop: hp(1),
          }}
        />
        <Text
          style={{
            fontFamily: 'Metropolis-Bold',
            fontSize: 12,
            color: '#4A4B4D',
            marginHorizontal: wp(4),
            marginTop: hp(2),
          }}>
          Other Methods
        </Text>
      </View>
      <Button
        onPress={showModal}
        style={{
          margin: hp(1.6),
          backgroundColor: '#fc6011',
          borderRadius: 30,
          marginTop: hp(8),
        }}
        color="#fff"
        uppercase={false}
        contentStyle={{height: 53}}>
        <Text
          style={{
            fontSize: 16,
            color: '#ffffff',
            fontFamily: 'Metropolis-SemiBold',
          }}>
          + Add another Credit/debit card
        </Text>
      </Button>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(-66),
            marginHorizontal: wp(5),
          }}>
          <Text
            style={{
              fontFamily: 'Metropolis-Bold',
              fontSize: 12,
              color: '#2D2D2D',
            }}>
            Add Credit/Debit Card
          </Text>
          <TouchableOpacity onPress={hideModal}>
            <Image
              source={require('../../assets/icons/close.png')}
              style={{
                width: wp(3),
                height: hp(2),
                marginLeft: wp(50),
                marginTop: hp(-1),
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: wp(4),
            borderBottomWidth: 1,
            borderBottomColor: '#E8E8E8',
            marginTop: hp(2),
          }}
        />
        <View>
          <TextInput
            placeholder="Card Number"
            underlineColor="#fff"
            placeholderTextColor="#B6B7B7"
            backgroundColor="#F2F2F2"
            borderRadius={30}
            theme={{roundness: 28}}
            style={{
              fontSize: 14,
              borderRadius: 30,
              marginTop: hp(3),
              marginHorizontal: wp(5),

              height: hp(7.6),
              paddingHorizontal: wp(5),
              backgroundColor: '#F2F2F2',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: wp(4.5),
            marginTop: hp(1),
          }}>
          <Text
            style={{
              fontFamily: 'Metropolis-SemiBold',
              fontSize: 14,
              color: '#4A4B4D',
              marginTop: hp(5),
            }}>
            Expiry
          </Text>
          <TextInput
            placeholder="MM"
            underlineColor="#fff"
            placeholderTextColor="#B6B7B7"
            backgroundColor="#F2F2F2"
            borderRadius={30}
            theme={{roundness: 28}}
            style={{
              fontSize: 14,
              borderRadius: 30,
              marginTop: hp(3),
              marginLeft: wp(15),
              width: wp(30),

              height: hp(7.6),
              paddingHorizontal: wp(11),
              backgroundColor: '#F2F2F2',
            }}
          />
          <TextInput
            placeholder="YY"
            underlineColor="#fff"
            placeholderTextColor="#B6B7B7"
            backgroundColor="#F2F2F2"
            borderRadius={30}
            theme={{roundness: 28}}
            style={{
              fontSize: 14,
              borderRadius: 30,
              marginTop: hp(3),
              marginHorizontal: wp(5),

              height: hp(7.6),
              width: wp(30),
              paddingHorizontal: wp(12),
              backgroundColor: '#F2F2F2',
            }}
          />
        </View>
        <View style={{marginTop: hp(2)}}>
          <TextInput
            placeholder="Security Code"
            underlineColor="#fff"
            placeholderTextColor="#B6B7B7"
            backgroundColor="#F2F2F2"
            borderRadius={30}
            theme={{roundness: 28}}
            style={{
              fontSize: 14,
              borderRadius: 30,
              marginTop: hp(3),
              marginHorizontal: wp(5),

              height: hp(7.6),
              paddingHorizontal: wp(5),
              backgroundColor: '#F2F2F2',
            }}
          />
          <TextInput
            placeholder="First Name"
            underlineColor="#fff"
            placeholderTextColor="#B6B7B7"
            backgroundColor="#F2F2F2"
            borderRadius={30}
            theme={{roundness: 28}}
            style={{
              fontSize: 14,
              borderRadius: 30,
              marginTop: hp(3),
              marginHorizontal: wp(5),

              height: hp(7.6),
              paddingHorizontal: wp(5),
              backgroundColor: '#F2F2F2',
            }}
          />
          <TextInput
            placeholder="Last Namer"
            underlineColor="#fff"
            placeholderTextColor="#B6B7B7"
            backgroundColor="#F2F2F2"
            borderRadius={30}
            theme={{roundness: 28}}
            style={{
              fontSize: 14,
              borderRadius: 30,
              marginTop: hp(3),
              marginHorizontal: wp(5),

              height: hp(7.6),
              paddingHorizontal: wp(5),
              backgroundColor: '#F2F2F2',
            }}
          />
          <View style={{marginHorizontal: wp(4.5), flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Metropolis-Medium',
                fontSize: 14,
                color: '#7C7D7E',
                marginTop: hp(3),
              }}>
              You can remove this card{'\n'} at anytime
            </Text>
            <Switch
              value={isSwitchEnabled}
              onValueChange={value => setSwitch(value)}
              style={{marginTop: hp(3), marginLeft: wp(33)}}
            />
          </View>
          <Button
            style={{
              margin: hp(3),
              backgroundColor: '#fc6011',
              borderRadius: 30,
            }}
            color="#fff"
            uppercase={false}
            contentStyle={{height: 53}}>
            <Text
              style={{
                fontSize: 16,
                color: '#ffffff',
                fontFamily: 'Metropolis-SemiBold',
              }}>
              + Add Card
            </Text>
          </Button>
        </View>
      </Modal>
    </View>
  );
}

export default PaymentScreen;
