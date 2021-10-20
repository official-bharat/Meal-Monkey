import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';

function MoreScreen() {
  const {navigate} = useNavigation();
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1, padding: hp(0.5)}}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Metropolis-ExtraBold',
            marginHorizontal: wp(3),
            marginTop: hp(1),
            color: '#4A4B4D',
          }}>
          More
        </Text>
        <Image
          source={require('../../assets/icons/cardt.png')}
          style={{
            width: wp(6),
            height: hp(3),
            marginLeft: wp(64),
            marginTop: hp(1),
          }}
        />
      </View>
      <View
        style={{
          width: wp(85),
          height: hp(12),

          margin: wp(5),
          marginTop: hp(5),
          backgroundColor: '#F2F2F2',
        }}>
        <Text
          style={{
            fontFamily: 'Metropolis-SemiBold',
            fontSize: 14,
            color: '#4A4B4D',
            textAlign: 'center',
            paddingTop: hp(4.5),
          }}>
          Payment Details
        </Text>
      </View>
      <View
        style={{
          width: wp(17),
          height: hp(8),

          borderRadius: 35,
          marginTop: hp(-12.6),
          marginLeft: wp(9),
          backgroundColor: '#D8D8D8',
        }}>
        <Image
          source={require('../../assets/icons/Payment.png')}
          style={{marginTop: hp(1.5), marginHorizontal: wp(5)}}
        />
      </View>
      <View
        style={{
          width: wp(10),
          height: hp(5),

          borderRadius: 35,
          marginTop: hp(-6.7),
          marginLeft: wp(84),
          backgroundColor: '#F2F2F2',
        }}>
        <TouchableOpacity onPress={() => navigate('PaymentScreen')}>
          <Image
            source={require('../../assets/icons/next.png')}
            style={{marginVertical: hp(0.7), marginLeft: wp(3)}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: wp(85),
          height: hp(12),

          margin: wp(5),
          marginTop: hp(6),
          backgroundColor: '#F2F2F2',
        }}>
        <Text
          style={{
            fontFamily: 'Metropolis-SemiBold',
            fontSize: 14,
            color: '#4A4B4D',
            textAlign: 'center',
            paddingTop: hp(4.5),
          }}>
          My Orders
        </Text>
      </View>
      <View
        style={{
          width: wp(17),
          height: hp(8),

          borderRadius: 35,
          marginTop: hp(-12.6),
          marginLeft: wp(9),
          backgroundColor: '#D8D8D8',
        }}>
        <Image
          source={require('../../assets/icons/oder.png')}
          style={{marginTop: hp(2), marginHorizontal: wp(6)}}
        />
      </View>
      <View
        style={{
          width: wp(10),
          height: hp(5),

          borderRadius: 35,
          marginTop: hp(-6.7),
          marginLeft: wp(84),
          backgroundColor: '#F2F2F2',
        }}>
        <TouchableOpacity onPress={() => navigate('OrderScreen')}>
          <Image
            source={require('../../assets/icons/next.png')}
            style={{marginVertical: hp(0.7), marginLeft: wp(3)}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: wp(85),
          height: hp(12),

          margin: wp(5),
          marginTop: hp(6),
          backgroundColor: '#F2F2F2',
        }}>
        <Text
          style={{
            fontFamily: 'Metropolis-SemiBold',
            fontSize: 14,
            color: '#4A4B4D',
            textAlign: 'center',
            paddingTop: hp(4.5),
          }}>
          Notifications
        </Text>
      </View>
      <View
        style={{
          width: wp(17),
          height: hp(8),

          borderRadius: 35,
          marginTop: hp(-12.6),
          marginLeft: wp(9),
          backgroundColor: '#D8D8D8',
        }}>
        <Image
          source={require('../../assets/icons/notification.png')}
          style={{marginTop: hp(2.3), marginHorizontal: wp(5.5)}}
        />
      </View>
      <View
        style={{
          width: wp(10),
          height: hp(5),

          borderRadius: 35,
          marginTop: hp(-6.7),
          marginLeft: wp(84),

          backgroundColor: '#F2F2F2',
        }}>
        <TouchableOpacity onPress={() => navigate('NotificationScreen')}>
          <Image
            source={require('../../assets/icons/next.png')}
            style={{marginVertical: hp(0.7), marginLeft: wp(3)}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: wp(85),
          height: hp(12),

          margin: wp(5),
          marginTop: hp(6),
          backgroundColor: '#F2F2F2',
        }}>
        <Text
          style={{
            fontFamily: 'Metropolis-SemiBold',
            fontSize: 14,
            color: '#4A4B4D',
            textAlign: 'center',
            paddingTop: hp(4.5),
          }}>
          Inbox
        </Text>
      </View>
      <View
        style={{
          width: wp(17),
          height: hp(8),

          borderRadius: 35,
          marginTop: hp(-12.6),
          marginLeft: wp(9),
          backgroundColor: '#D8D8D8',
        }}>
        <Image
          source={require('../../assets/icons/inbox.png')}
          style={{marginTop: hp(3), marginHorizontal: wp(5.5)}}
        />
      </View>
      <View
        style={{
          width: wp(10),
          height: hp(5),

          borderRadius: 35,
          marginTop: hp(-6.7),
          marginLeft: wp(84),
          backgroundColor: '#F2F2F2',
        }}>
        <TouchableOpacity onPress={() => navigate('IndexScreen')}>
          <Image
            source={require('../../assets/icons/next.png')}
            style={{marginVertical: hp(0.7), marginLeft: wp(3)}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: wp(85),
          height: hp(12),

          margin: wp(5),
          marginTop: hp(6),
          backgroundColor: '#F2F2F2',
        }}>
        <Text
          style={{
            fontFamily: 'Metropolis-SemiBold',
            fontSize: 14,
            color: '#4A4B4D',
            textAlign: 'center',
            paddingTop: hp(4.5),
          }}>
          About Us
        </Text>
      </View>
      <View
        style={{
          width: wp(17),
          height: hp(8),

          borderRadius: 35,
          marginTop: hp(-12.6),
          marginLeft: wp(9),
          backgroundColor: '#D8D8D8',
        }}>
        <Image
          source={require('../../assets/icons/Iicon.png')}
          style={{marginTop: hp(1.6), marginHorizontal: wp(6.5)}}
        />
      </View>
      <View
        style={{
          width: wp(10),
          height: hp(5),

          borderRadius: 35,
          marginTop: hp(-6.7),
          marginLeft: wp(84),
          backgroundColor: '#F2F2F2',
        }}>
        <TouchableOpacity onPress={() => navigate('AboutScreen')}>
          <Image
            source={require('../../assets/icons/next.png')}
            style={{marginVertical: hp(0.7), marginLeft: wp(3)}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MoreScreen;
