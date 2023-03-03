import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Avatar, FAB} from 'react-native-paper';
import Assets from '../assets';
import {Icon} from 'react-native-vector-icons/Icon';
import {ArrowIcon, LockIcon} from '../assets/Svg/SocialSvg';

const Header = ({homeHeader, header, onPress, headText}) => {
  return (
    <View>
      {homeHeader && (
        <View style={styles.Container}>
          <View style={{flexDirection: 'row'}}>
            <Avatar.Image size={40} source={Assets.backgroundImages.profile} />
            <Text style={styles.text}>Good Morning Alexa</Text>
          </View>
          <View style={{marginTop: 25, paddingHorizontal: 5}}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
              <LockIcon />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {header && (
        <View style={[styles.Container]}>
          <View style={{paddingHorizontal: 5}}>
            <TouchableOpacity style={styles.button1} onPress={onPress}>
              {/* <ArrowIcon /> */}
            </TouchableOpacity>
            <View style={{alignSelf: 'center', paddingBottom: 25}}>
              <Text style={styles.text1}>{headText}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: 'green'
  },
  fab: {
    position: 'absolute',
    // margin: 12,
    backgroundColor: '#fff',
    right: 0,
    bottom: 0,
  },
  button: {
    position: 'absolute',
    bottom: 16,
    right: 1,

    backgroundColor: '#fff',
    borderRadius: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
  button1: {
    position: 'absolute',
    bottom: 16,
    left: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
  text: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  text1: {paddingTop: 10, paddingLeft: 10, fontSize: 28, color: '#707070'},
});

export default Header;
