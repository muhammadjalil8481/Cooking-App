import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import Assets from '../assets';
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../assets/constants/Colors';
// import { Fonts } from '../assets/constants/Fonts';

const Card = ({ navigation }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [myListData, setMyListData] = useState([
    { id: 1, title: '• 3 chicken breast' },
    { id: 2, title: '• Salt' },
    { id: 3, title: '• Pepper' },
    { id: 4, title: '• Montreal roasted chicken' },
    { id: 5, title: '• Dash of Peprika' },
    { id: 6, title: '• 3 chicken breast' },
    { id: 7, title: '• 3 chicken breast' },
    { id: 8, title: '• Salt' },
    { id: 9, title: '• Pepper' },
    { id: 10, title: '• Montreal roasted chicken' },
    { id: 11, title: '• Dash of Peprika' },
    { id: 12, title: '• 3 chicken breast' },
  ]);

  const [myListData1, setMyListData1] = useState([
    { id: 1, title: '• Add layer of season to raw chicken' },
    { id: 2, title: '• Add layer of season to raw chicken' },
    { id: 3, title: '• Place on hot stove stop pan with dash of olive oil at medium heat - 8 minutes' },
    { id: 4, title: '• Montreal roasted chicken' },
    { id: 5, title: '• Montreal roasted chicken' },
    { id: 6, title: '• Flip to other side for additional 7 minutes' },
    { id: 7, title: '• Flip to other side for additional 7 minutes' },

  ]);
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
    </View>


  );
  return (

    <View style={[styles.contentContainer,]}>
      <LinearGradient
        colors={['#FBF9F9', '#CCCB']}
        style={{
          backgroundColor: '#FBF9F9', borderRadius: 20,
          padding: 5,
          paddingTop: 15,
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.43,
          shadowRadius: 9.51,
          elevation: 15,
        }}
      >
        <View style={{ paddingLeft: 10, paddingTop: 5 }}>
          <Text
            numberOfLines={4}
            style={[styles.text1, { fontFamily: 'NoirPro-Light', }]}>
            Add layer of season to raw chicken Place on hot stove stop pan with
            dash of olive oil at medium heat - 8 minutes Flip to other side for
            additional 7 minutes turn temperatur to Medium+ to get burn marks for
            flavor
          </Text>
          <Text
            numberOfLines={1}
            style={[styles.text1, { fontSize: 16, fontWeight: 'bold', paddingTop: 15 }]}>
            Ingredients:
          </Text>
          <View style={{ height: 120, width: 160 }}>
            <FlatList
              showsVerticalScrollIndicator={true}
              showsHorizontalScrollIndicator={true}
              data={myListData}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <Text
            numberOfLines={1}
            style={[styles.text1, { fontSize: 16, fontWeight: 'bold', paddingTop: 15, paddingBottom: 15 }]}>
            Story
          </Text>
          <View style={{ height: 120, width: 180, paddingTop: 5 }}>
            <FlatList
              showsVerticalScrollIndicator={true}
              showsHorizontalScrollIndicator={true}
              data={myListData1}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Card;
const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 15,
    paddingVertical: 15,
    paddingVertical: 5,
    // margin: 5,
    // paddingLeft: 15,
    alignSelf: 'center',
    backgroundColor: '#FFFF',
    // paddingBottom: 15,
    borderRadius: 20,
    // width: WIDTH <= 375 ? 338 : 356,
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
    height: 34,
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
    fontFamily: 'NoirPro-Light',
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