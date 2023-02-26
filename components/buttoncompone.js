import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Button, FAB, TouchableRipple } from 'react-native-paper';
import { Colors } from '../assets/constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Assets from '../assets';
import { WIDTH } from '../assets/constants/Dimensions';

const ButtonComponent = ({
  icon,
  buttonColor,
  textColor,
  onPress,
  buttonText,
  height,
  width,
  disabled,

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


          <View style={styles.container}>

            <FAB
              style={[
                styles.fab,
                {
                  height: WIDTH < 375 ? 30 : 35,
                  width: WIDTH < 375 ? 30 : 35,
                },
              ]}
              size="small"
              Icon="arrow-left"
              color={Colors.secondary}
              onPress={onPress} />


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
  box: {
    width: '60%',
    aspectRatio: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50

  },
  fab: {
    height: 35,
    width: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    shadowColor: Colors.secondary,
    // shadowOffset: {
    //   width: 0,
    //   height: 7,
    // },
    // shadowOpacity: 0.43,
    // shadowRadius: 9.51,
    // elevation: 15,
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
