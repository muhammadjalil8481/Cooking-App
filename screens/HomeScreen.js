import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SearchbarCompo from '../components/searchbar';
import ButtonComponent from '../components/buttoncompone';
import { WIDTH } from '../assets/constants/Dimensions';
import Assets from '../assets';
import { MenuIcon } from '../assets/Svg/SocialSvg';
import CardCompoLG from '../components/cardCompoLg';
import { Colors } from '../assets/constants/Colors';
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ paddingHorizontal: 15 }}>
          <View
            style={{
              flex: 1,
              marginTop: 'auto',
              paddingTop: 25,
              paddingBottom: 15,
            }}>
            <Header
              homeHeader
              onPress={() => navigation.navigate('CartScreen')}
            />
            <View style={{}}>
              <SearchbarCompo />
            </View>
            <View style={{ paddingTop: 5, paddingBottom: 15 }} />
            <ButtonComponent
              button3
              buttonText="Add Meal"
              paddingHorizontal={WIDTH < 375 ? 5 : 15}
              icon="arrow-right"
              onPress={() => navigation.navigate('AddMealScreen')}
              widthIcon={WIDTH < 375 ? 40 : 57}
              height={WIDTH < 375 ? 40 : 57}
              width={WIDTH < 375 ? 110 : 375}
            />
            <View style={styles.row}>
              <View style={{ flexDirection: 'row', }}>
                <Text style={[styles.Text, {
                  backgroundColor: Colors.BackgroundColorW,
                  position: 'absolute',
                  bottom: -15
                }]}>My Meals</Text>

              </View>
              <View
                style={{
                  paddingHorizontal: 5,
                  paddingBottom: 15,
                  position: 'absolute',
                  top: 40,
                  right: 0,
                  backgroundColor: '#EEEBEB',
                }}>
                <TouchableOpacity style={[styles.button, {}]}>
                  <MenuIcon />
                </TouchableOpacity>
              </View>
            </View>
            <CardCompoLG
              checkButton
              shadow={'#C00006'}
              bgColor={'#C00006'}
              FoodImage={Assets.FoodItems.FoodItem1}
              ButtonComponent={
                <ButtonComponent
                  button2
                  buttonText="View Full"
                  buttonColor={'red'}
                  //   textColor={Colors.secondary}
                  onPress={() => navigation.navigate('MealDetails')}
                  height={WIDTH <= 375 ? 40 : 55}
                  width={WIDTH <= 375 ? 125 : 175}
                />
              }
            />
            <View style={{ padding: 5 }} />
            <CardCompoLG
              checkButton
              shadow={'#00A0C0'}
              bgColor={'#00A0C0'}
              FoodImage={Assets.FoodItems.FoodItem1}
              ButtonComponent={
                <ButtonComponent
                  bluebtn
                  buttonText="View Full"
                  buttonColor={'red'}
                  //   textColor={Colors.secondary}
                  onPress={() => navigation.navigate('MealDetails')}
                  height={WIDTH <= 375 ? 40 : 55}
                  width={WIDTH <= 375 ? 125 : 175}
                />
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundColorW,
    justifyContent: 'flex-end',
  },
  row: {
    borderColor: Colors.Red,
    marginVertical: 25,
    paddingTop: 15,
    borderBottomWidth: 1,
  },
  fab: {
    position: 'absolute',
    backgroundColor: '#fff',
    right: 0,
    bottom: 0,
  },
  Text: {
    fontFamily: 'NoirPro-Regular',
    color: '#190C0C',
    fontSize: 28,
    paddingHorizontal: 5,
  },
  button: {
    position: 'absolute',
    bottom: 16,
    right: 0,

    backgroundColor: '#EEEBEB',

    borderRadius: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});
