import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import { Colors } from '../assets/constants/Colors';
import Icon from 'react-native-vector-icons/Feather';
import { CrossIcon } from '../assets/Svg/SocialSvg';

const CardCompoLG = ({ FoodImage, ButtonComponent, bgColor, checkButton, removeText,
  shadow,
  removebtn, onPress }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [myListData, setMyListData] = useState([
    { id: 1, title: '• 3 chicken breast' },
    { id: 2, title: '• Salt' },
    { id: 3, title: '• Pepper' },
    { id: 4, title: '• Montreal roasted chicken' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.contentContainer}>
      <View
        style={[
          styles.Containercontent,
          {
            backgroundColor: bgColor,
            flexDirection: 'row',
            // justifyContent: 'center',
            paddingLeft: 15,
            shadowColor: shadow,
            shadowOffset: {
              width: 10,
              height: 20,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,
            elevation: 15,
          },
          // paddingHorizontal: 5, // added padding

        ]}>
        <View style={{ alignSelf: 'flex-start', width: '70%' }}>
          <Text style={[styles.text, { textAlign: 'left', fontFamily: 'NoirPro-Light' }]}>
            Green
            <Text style={{ fontWeight: 'bold', fontSize: 20, fontFamily: 'NoirPro-Bold' }}>  Salad</Text>
          </Text>
          <Text
            numberOfLines={2}
            style={[styles.text1, { color: Colors.primary, fontWeight: '300', fontFamily: 'NoirPro-Regular' }]}>
            Lorem ipsum dolor sit amet ntetur {'\n'}sadipscing elitr sed diam.
          </Text>
        </View>
        <View
          style={{
            width: 74,
            height: 74,
            alignSelf: 'center',
            marginLeft: 10,
          }}>
          <Image
            source={FoodImage}
            resizeMode="contain"
            style={{ width: '100%', height: '100%' }}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Text
          numberOfLines={2}
          style={[styles.text1, { fontFamily: 'NoirPro-SemiBold' }]}>
          Ingredients:
        </Text>
        <View style={styles.container}>
          <FlatList
            data={myListData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <Text
          numberOfLines={2}
          style={[styles.text1, { fontWeight: 'bold', fontFamily: 'NoirPro-SemiBold' }]}>
          Story
        </Text>
        <Text
          numberOfLines={2}
          style={[styles.text1, { fontFamily: 'NoirPro-Light', }]}>
          Add layer of season to raw chicken Place on hot stove stop pan with
          dash of olive oil at medium heat - 8 minutes Flip to other side for
          additional 7 minutes turn temperatur to Medium+ to get burn marks for
          flavor
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
          marginTop: 5,
        }}>
        {ButtonComponent}
        {checkButton && (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => setRememberMe(!rememberMe)}>
            <Icon
              name={rememberMe ? 'check-square' : 'square'}
              size={27}
              color={rememberMe ? Colors.cards.BlueText : Colors.cards.BlueText}
            />
            <Text
              style={[
                {
                  marginLeft: 5,
                  color: Colors.cards.BlueText,
                  fontWeight: '500',
                },
              ]}>
              {rememberMe === true ? 'Added to cart' : null}
            </Text>
          </TouchableOpacity>
        )}
        {
          removebtn && (
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={onPress}>
              <CrossIcon />
              <Text style={{ color: Colors.Red, paddingLeft: 5, fontFamily: 'NoirPro-Regular' }}>{removeText}</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  );
};
export default CardCompoLG;
const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 20,
    width: WIDTH <= 375 ? 110 : 375,
    paddingHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  Containercontent: {
    paddingTop: 10,
    alignSelf: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 20,
    width: WIDTH <= 375 ? 110 : 375,
    paddingHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  text: {
    color: '#fff',
    fontSize: 17,

  },
  textpara: {
    color: '#fff',
    fontSize: 12,
  },
  content: {
    paddingTop: 15,
    paddingHorizontal: 15,
    // backgroundColor: 'green',
  },

  title: {
    fontSize: 12,
    height: 24,
    fontSize: WIDTH < 375 ? 10 : 12,
    color: '#707070',
    fontFamily: 'NoirPro-Light',
    lineHeight: WIDTH < 375 ? 13 : 16,
  },
  container: {
    flex: 1,

  },
  text1: {
    fontSize: WIDTH < 375 ? 10 : 12,
    color: '#707070',
    //   fontFamily: Fonts.default,

    lineHeight: WIDTH < 375 ? 10 : 12,
    paddingVertical: 5,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 5,
  },
});
