import { Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../assets/constants/Colors';
import Assets from '../assets';
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';

import Icon from 'react-native-vector-icons/Feather';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Input from '../components/inputs';
import ButtonComponent from '../components/buttoncompone';
import { FAB } from 'react-native-paper';
import ImgAnimation from '../components/ImgAnimation';
// import { Fonts } from '../assets/constants/Fonts';

const Login = ({ navigation }) => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={
          Assets.backgroundImages.BackGroundBG
        }
        resizeMode="cover"
        style={styles.container} >
        <View
          style={
            {
              width: WIDTH < 375 ? 70 : 80,
              height: WIDTH < 375 ? 70 : 80,
              position: 'absolute',
              // right: 0,
              // top: 0,
              left: 120,
              top: 30,
            }
          }>

          <ImgAnimation Food1={Assets.FoodItems.fooditem5} />
          <ImgAnimation Food2={Assets.FoodItems.fooditem5} />
          {/* <Image source={item.Food1} resizeMode="contain" /> */}
        </View>

        <View style={{ justifyContent: 'flex-end' }}>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            enableOnAndroid={true}
            enableAutomaticScroll={true}
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.contentContainer}>
              <View style={styles.loginTextContainer}>
                <Text style={styles.loginText}>Login</Text>
              </View>
              <View style={{ marginVertical: 5 }} />
              <Input
                placeholder="Username"
                text={data.username}
                setText={setData}
                formKey="username"
              />
              <View style={{ marginVertical: 15 }} />
              <Input
                placeholder="Password"
                text={data.password}
                setText={setData}
                formKey="password"
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => setRememberMe(!rememberMe)}>
                  <Icon
                    name={rememberMe ? 'check-square' : 'square'}
                    size={20}
                    color={rememberMe ? Colors.primary : Colors.tertiary}
                  />
                  <Text style={[styles.text, { marginLeft: 5 }]}>Remember me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}>
                  <Text
                    style={[
                      styles.text,
                      { textDecorationLine: 'underline', color: Colors.primary },
                    ]}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <ButtonComponent
                  buttonText="Login"
                  buttonColor={Colors.primary}
                  textColor={Colors.secondary}
                  onPress={() => navigation.navigate('Drawer')}
                  height={WIDTH <= 375 ? 40 : 55}
                  width={WIDTH <= 375 ? 125 : 175}
                />
                <Text style={[styles.text, { color: Colors.tertiary, opacity: 0.5 }]}>
                  Or
                </Text>
                <View style={{ flexDirection: 'row', marginVertical: 12, justifyContent: 'space-evenly' }}>
                  <FAB style={styles.fab} />
                  <FAB style={styles.fab} />
                  <FAB style={styles.fab} /></View>

              </View>
            </View>
          </KeyboardAwareScrollView>

        </View>

      </ImageBackground>
    </SafeAreaView >
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    justifyContent: 'flex-end'
  },
  loginText: {
    fontSize: WIDTH <= 375 ? 25 : 30,
    // fontFamily: Fonts.default,
    backgroundColor: '#FFFF',
    fontWeight: '700',
    marginRight: 2.5,
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    alignSelf: 'center',
    backgroundColor: '#FFFF', borderRadius: 10, marginTop: 25,
    paddingTop: 25, paddingBottom: 25,
    width: WIDTH <= 375 ? 315 : 375, paddingHorizontal: 15
  },
  loginTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // position: 'absolute',
    backgroundColor: '#FFFF',
    // top: -50,
    // left: 50,
  },
  // logo: {
  //   width: WIDTH <= 375 ? 45 : 50,
  //   height: WIDTH <= 375 ? 45 : 50,
  // },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  text: {
    fontSize: 14,
    // fontFamily: Fonts.default,
    fontWeight: '200',
    letterSpacing: 0.7,
    color: Colors.tertiary,
  },
  fab: {
    height: 55,
    width: 55,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
  },
});
