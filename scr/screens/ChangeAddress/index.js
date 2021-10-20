// import React from 'react';
// import {View, Image, ImageBackground, TouchableOpacity} from 'react-native';
// import {Text, TextInput, Button} from 'react-native-paper';

// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';
// import {useNavigation} from '@react-navigation/core';
// function ChangeAddress() {
//   const {navigate} = useNavigation();
//   return (
//     <View style={{backgroundColor: '#ffffff', flex: 1, padding: hp(0.5)}}>
//       <View style={{flexDirection: 'row'}}>
//         <TouchableOpacity onPress={() => navigate('SearchFood')}>
//           <Image
//             source={require('../../assets/icons/leftarrow.png')}
//             style={{width: wp(5), height: hp(2), marginTop: hp(2.2)}}
//           />
//         </TouchableOpacity>
//         <Text
//           style={{
//             fontSize: 24,
//             fontFamily: 'Metropolis-ExtraBold',
//             marginHorizontal: wp(3),
//             marginTop: hp(1),
//             color: '#4A4B4D',
//           }}>
//           Change Address
//         </Text>
//       </View>
//     </View>
//   );
// }
// export default ChangeAddress;
import React from 'react';
import {View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {
  Modal,
  Text,
  Button,
  TextInput,
  Switch,
  Checkbox,
} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';

function PaymentScreen() {
  const {navigate} = useNavigation();
  const [visible, setVisible] = React.useState(false);
  const [isSwitchEnabled, setSwitch] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [check, setCheck] = React.useState(false);
  const [chec, setChec] = React.useState(false);

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
        <TouchableOpacity onPress={() => navigate('SearchAddress')}>
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
          Checkout
        </Text>
      </View>
      <Text
        style={{
          marginHorizontal: wp(4),
          color: '#7C7D7E',
          fontSize: 13,
          fontFamily: 'Metropolis-Medium',
          marginTop: hp(3),
        }}>
        Delivery Address
      </Text>
      <View style={{marginHorizontal: wp(4), marginTop: hp(2)}}>
        <Text
          style={{
            color: '#4A4B4D',
            fontSize: 15,
            fontFamily: 'Metropolis-Bold',
          }}>
          653 Nostrand Ave.,
        </Text>
        <Text
          style={{
            color: '#4A4B4D',
            fontSize: 15,
            fontFamily: 'Metropolis-Bold',
          }}>
          Brooklyn, NY 11216
        </Text>
        <Text
          style={{
            color: '#FC6011',
            fontSize: 13,
            fontFamily: 'Metropolis-Bold',
            marginLeft: wp(74),
            marginTop: hp(-3.5),
          }}>
          Change
        </Text>
      </View>
      <View
        style={{
          width: wp(100),
          height: hp(2),
          backgroundColor: '#F6F6F6',
          marginTop: hp(4),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: wp(4),
          marginTop: hp(2),
        }}>
        <Text
          style={{
            color: '#7C7D7E',
            fontSize: 13,
            fontFamily: 'Metropolis-Medium',
          }}>
          Payment method
        </Text>
        <Text
          style={{
            color: '#FC6011',
            fontSize: 13,
            fontFamily: 'Metropolis-Bold',
            marginLeft: wp(40),
          }}>
          + Add Card
        </Text>
      </View>
      <View
        style={{
          width: wp(87),
          height: hp(7),
          backgroundColor: '#F6F6F6',
          marginTop: hp(4),
          borderWidth: 1,
          marginHorizontal: wp(6),
          flexDirection: 'row',
        }}>
        <Text style={{paddingLeft: wp(5), paddingTop: hp(1.5)}}>
          Cash on delivery
        </Text>
        <View style={{marginLeft: wp(42), paddingTop: hp(0.5)}}>
          <Checkbox
            color="#FC6011"
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
        <View style={{marginLeft: wp(45), marginTop: hp(0.5)}} />
      </View>
      <View
        style={{
          width: wp(87),
          height: hp(7),
          backgroundColor: '#F6F6F6',
          marginTop: hp(2),
          borderWidth: 1,
          marginHorizontal: wp(6.5),
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../assets/icons/visa.png')}
          style={{
            width: wp(12),
            height: hp(5),
            marginLeft: wp(3),
            marginTop: hp(1),
          }}
        />
        <Text style={{paddingLeft: wp(4), paddingTop: hp(1.7)}}>
          **** **** **** 2187
        </Text>
        <View style={{marginLeft: wp(24), paddingTop: hp(0.5)}}>
          <Checkbox
            color="#FC6011"
            status={check ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheck(!check);
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: wp(87),
          height: hp(7),
          backgroundColor: '#F6F6F6',
          marginTop: hp(2),
          borderWidth: 1,
          marginHorizontal: wp(6.5),
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../assets/icons/PayPal.jpg')}
          style={{
            width: wp(12),
            height: hp(5),
            marginLeft: wp(3),
            marginTop: hp(1),
          }}
        />
        <Text style={{paddingLeft: wp(5), paddingTop: hp(1.5)}}>
          johndoe@email.com
        </Text>
        <View style={{marginLeft: wp(19.6), paddingTop: hp(0.5)}}>
          <Checkbox
            color="#FC6011"
            status={chec ? 'checked' : 'unchecked'}
            onPress={() => {
              setChec(!chec);
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: wp(100),
          height: hp(2),
          backgroundColor: '#F6F6F6',
          marginTop: hp(4),
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
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(2),
          }}>
          Sub Total
        </Text>
        <Text
          style={{
            marginLeft: wp(66),
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
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(1),
          }}>
          Delivery Cost
        </Text>
        <Text
          style={{
            marginLeft: wp(62),
            color: '#FC6011',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(1),
          }}>
          $2
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
            marginLeft: wp(4.5),
            color: '#4A4B4D',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(1),
          }}>
          Discount
        </Text>
        <Text
          style={{
            marginLeft: wp(67),
            color: '#FC6011',
            fontFamily: 'Metropolis-Medium',
            fontSize: 13,
            paddingTop: hp(1),
          }}>
          -$4
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: wp(4),
          borderBottomWidth: 1,
          borderBottomColor: '#E8E8E8',
          marginTop: hp(-1),
        }}
      />
      <View
        style={{
          width: wp(100),
          height: hp(2),
          backgroundColor: '#F6F6F6',
          marginTop: hp(2),
        }}
      />
      <Button
        onPress={showModal}
        style={{
          marginHorizontal: wp(7),
          backgroundColor: '#fc6011',
          borderRadius: 30,
          marginTop: hp(2),
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
          Send order
        </Text>
      </Button>

      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <View
          style={{
            marginTop: hp(-82),
            marginHorizontal: wp(5),
          }}>
          <TouchableOpacity onPress={hideModal}>
            <Image
              source={require('../../assets/icons/close.png')}
              style={{
                width: wp(3),
                height: hp(2),
                marginLeft: wp(85),
                marginTop: hp(2.5),
              }}
            />
          </TouchableOpacity>
          <Image
            source={require('../../assets/icons/last.png')}
            style={{
              width: wp(51),
              height: hp(30),
              marginLeft: wp(20),
              marginBottom: hp(20),
            }}
          />
          <Text
            style={{
              color: '#4A4B4D',
              fontFamily: 'Metropolis-Bold',
              fontSize: 26,
              textAlign: 'center',
              marginTop: hp(-17),
            }}>
            Thank You!
          </Text>
          <Text
            style={{
              color: '#4A4B4D',
              fontFamily: 'Metropolis-Bold',
              fontSize: 17,
              textAlign: 'center',
              marginTop: hp(1),
            }}>
            for your order
          </Text>
          <Text
            style={{
              color: '#4A4B4D',
              fontFamily: 'Metropolis-Regular',
              fontSize: 14,
              textAlign: 'center',
              marginTop: hp(3),
            }}>
            Your Order is now being processed. We will let you{'\n'} know once
            the order is picked from the outlet. Check the status of your Order
          </Text>
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
              Track my order
            </Text>
          </Button>
          <TouchableOpacity onPress={() => navigate('SearchFood')}>
            <Text
              style={{
                fontSize: 16,
                color: '#4A4B4D',
                fontFamily: 'Metropolis-Bold',
                textAlign: 'center',
              }}>
              Back to home
            </Text>
          </TouchableOpacity>

          <View />
        </View>
      </Modal>
    </View>
  );
}

export default PaymentScreen;
