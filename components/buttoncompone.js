import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Button, TouchableRipple } from 'react-native-paper';
import { Colors } from '../assets/constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Assets from '../assets';

const ButtonComponent = ({
  icon,
  buttonColor,
  textColor,
  onPress,
  buttonText,
  height,
  width,
  disabled,
  icon1,
  Icon1,
  SvgICon,
  paddingHorizontal,
  circleIcon,
}) => {
  return (
    <TouchableRipple
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        { height: height, width: width, backgroundColor: buttonColor },
      ]}>
      <View
        style={{
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            color: textColor,
            fontSize: 16,
            fontFamily: 'Bahnschrift',
            fontWeight: 400,
            textAlign: 'center',
            paddingHorizontal: 20,
          }}>
          {buttonText}
        </Text>

        {circleIcon && (
          <View
            style={{
              // marginLeft: 30,
              backgroundColor: 'red',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              width: 40,
              height: 40,
              paddingHorizontal: 20
            }}>
            <Image
              source={Assets.icon.play}
              resizeMode="contain"
              style={{}}
            />
          </View>
        )}
      </View>
    </TouchableRipple>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '80%',
    // height: 55,
    borderRadius: 30,
    // borderWidth: 2,
    // borderColor: '#fff',
    // marginBottom: -65,
    borderRadius: 50,
    justifyContent: 'center',
    paddingHorizontal: 10,
    shadowColor: Colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});

{
  /* <Button
      disabled={disabled}
      icon={icon}
      mode="contained"
      buttonColor={buttonColor}
      textColor={textColor}
      contentStyle={{
        height: '100%',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: icon ? 'space-between' : 'center',
      }}
      style={{
        height: height,
        width: width,
        borderRadius: 50,
        justifyContent: 'center',
        shadowColor: Colors.tertiary,
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
      }}
      labelStyle={{fontSize: 22}}
      onPress={onPress}>
      <Text style={{fontSize: 16, fontFamily: 'Bahnschrift', fontWeight: 400}}>
        {buttonText}
      </Text>
    </Button> */
}
