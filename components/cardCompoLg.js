import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {Colors} from '../assets/constants/Colors';
import Assets from '../assets';
import {matrixTransform} from 'react-native-svg/lib/typescript/elements/Shape';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import ButtonComponent from './buttoncompone';
import Icon from 'react-native-vector-icons/Feather';

const CardCompoLG = ({FoodImage, ButtonComponent, bgColor}) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [myListData, setMyListData] = useState([
    {id: 1, title: '• 3 chicken breast'},
    {id: 2, title: '• Salt'},
    {id: 3, title: '• Pepper'},
    {id: 4, title: '• Montreal roasted chicken'},
  ]);

  const renderItem = ({item}) => (
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
            justifyContent: 'center',
            paddingTop: 10,
            // paddingHorizontal: 5, // added padding
          },
        ]}>
        <View style={{alignSelf: 'flex-start'}}>
          <Text style={[styles.text, {paddingLeft: 5}]}>
            Green
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Salad</Text>
          </Text>
          <Text
            numberOfLines={2}
            style={{
              width: '55%',
              paddingLeft: 5,
              fontSize: WIDTH < 375 ? 10 : 12,
              color: '#fff',
              //   fontFamily: Fonts.default,
              fontWeight: '300',
              lineHeight: WIDTH < 375 ? 13 : 16,
            }}>
            Lorem ipsum dolor sit amet ntetur {'\n'} sadipscing elitr sed diam.
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
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>

      <View style={styles.content}>
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
          numberOfLines={2}
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 2,
          marginTop: 5,
        }}>
        {ButtonComponent}
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
      </View>
    </View>
  );
};
export default CardCompoLG;
const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 15,
    alignSelf: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 10,
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
  Containercontent: {
    alignSelf: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 10,
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
