import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Routes from './scr/routes';
const App = () => {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
};
export default App;
// import React from 'react';
// import {View, Image, TouchableOpacity} from 'react-native';
// import {Text, TextInput, Button} from 'react-native-paper';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';
// const App = () => {
//   function hello() {
//     return alert('raman');
//   }

//   return (
//     <View>
//       <Text
//         style={{fontSize: 24, fontFamily: 'Metropolis-ExtraBold', margin: 5}}>
//         Profile
//       </Text>
//       <Image
//         style={{height: 200, width: 250}}
//         source={require('././scr/assets/icons/profile2.jpg')}
//         style={{
//           alignSelf: 'center',
//           height: hp(17),
//           width: wp(30),
//           borderRadius: 100,
//           marginVertical: hp(-2),
//         }}
//       />
//       <TouchableOpacity onPress={() => hello()}>
//         <Image
//           style={{height: 200, width: 250}}
//           source={require('././scr/assets/icons/4.png')}
//           style={{
//             alignSelf: 'center',

//             height: hp(3),
//             width: wp(7),
//             marginVertical: hp(-2),
//           }}
//         />
//       </TouchableOpacity>
//       <View style={{marginVertical: hp(3)}}>
//         <Text
//           style={{
//             textAlign: 'center',
//             color: '#FC6011',
//             fontSize: 10,
//             fontFamily: 'Metropolis-Medium',
//           }}>
//           Edit Profile
//         </Text>
//         <TextInput
//           label="Name"
//           style={{marginHorizontal: wp(7), margin: hp(1)}}
//         />
//         <TextInput
//           label="Name"
//           style={{marginHorizontal: wp(7), margin: hp(1)}}
//         />
//         <TextInput
//           label="Name"
//           style={{marginHorizontal: wp(7), margin: hp(1)}}
//         />
//         <TextInput
//           label="Name"
//           style={{marginHorizontal: wp(7), margin: hp(1)}}
//         />
//         <TextInput
//           label="Name"
//           style={{marginHorizontal: wp(7), margin: hp(1)}}
//         />
//         <TextInput
//           label="Name"
//           style={{marginHorizontal: wp(7), margin: hp(1)}}
//         />
//         <Button
//           style={{
//             marginHorizontal: wp(5),
//             margin: hp(1),
//             backgroundColor: '#fc6011',
//             borderRadius: 30,
//           }}
//           color="#fff"
//           uppercase={false}
//           contentStyle={{height: 60}}>
//           Login
//         </Button>
//       </View>
//     </View>
//   );
// };
// export default App;
