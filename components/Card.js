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
import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../assets/constants/Colors';
import Assets from '../assets';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import Icon from 'react-native-vector-icons/Feather';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Input from '../components/inputs';
import ButtonComponent from '../components/buttoncompone';
import {FAB} from 'react-native-paper';
import ImgAnimation from '../components/ImgAnimation';
import LinearGradient from 'react-native-linear-gradient';
// import { Fonts } from '../assets/constants/Fonts';

const Card = ({navigation}) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [myListData, setMyListData] = useState([
    {id: 1, title: '• 3 chicken breast'},
    {id: 2, title: '• Salt'},
    {id: 3, title: '• Pepper'},
    {id: 4, title: '• Montreal roasted chicken'},
    {id: 5, title: '• Dash of Peprika'},
    {id: 6, title: '• 3 chicken breast'},
  ]);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
  return (
    <LinearGradient
      colors={['#FBF9F9', '#CCCBCB00']}
      style={styles.contentContainer}>
      <>
        <Text
          numberOfLines={4}
          style={{
            paddingVertical: 10,
            fontSize: WIDTH < 375 ? 10 : 12,
            color: '#707070',
            //   fontFamily: Fonts.default,
            fontWeight: '300',
            lineHeight: WIDTH < 375 ? 13 : 16,
          }}>
          Add layer of season to raw chicken Place on hot stove stop pan with
          dash of olive oil at medium heat - 8 minutes Flip to other side for
          additional 7 minutes turn temperatur to Medium+ to get burn marks for
          flavor
        </Text>
        <Text
          numberOfLines={2}
          style={{
            marginTop: 15,
            fontSize: WIDTH < 375 ? 14 : 16,
            color: '#707070',
            //   fontFamily: Fonts.default,
            fontWeight: 'bold',
            lineHeight: WIDTH < 375 ? 13 : 16,
          }}>
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
          style={{
            fontSize: WIDTH < 375 ? 10 : 12,
            color: '#707070',
            //   fontFamily: Fonts.default,
            fontWeight: 'bold',
            lineHeight: WIDTH < 375 ? 10 : 12,
          }}>
          Story
        </Text>
        <Text
          numberOfLines={10}
          style={{
            paddingVertical: 10,
            fontSize: WIDTH < 375 ? 10 : 12,
            color: '#707070',
            //   fontFamily: Fonts.default,
            fontWeight: '300',
            lineHeight: WIDTH < 375 ? 13 : 16,
          }}>
          Add layer of season to raw chicken Place on hot stove stop pan with
          dash of olive oil at medium heat - 8 minutes {'\n'}Flip to other side
          for additional 7 minutes turn temperatur to Medium+ to get burn marks
          for flavor{'\n'}Add layer of season to raw chicken Place on hot stove
          stop pan with dash of olive oil .
        </Text>
      </>
    </LinearGradient>
  );
};
export default Card;
const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 10,
    alignSelf: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 20,
    paddingBottom: 15,
    width: WIDTH <= 375 ? 315 : 338,
    paddingHorizontal: 25,
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
    // backgroundColor: 'green',
  },

  item: {
    fontSize: 12,
    height: 34,

    fontSize: WIDTH < 375 ? 10 : 12,
    color: '#707070',
    //   fontFamily: Fonts.default,
    fontWeight: 'bold',
    lineHeight: WIDTH < 375 ? 13 : 16,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});
