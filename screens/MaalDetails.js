import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Assets from '../assets';
import Card from '../components/Card';
import {Colors} from '../assets/constants/Colors';
import {WIDTH} from '../assets/constants/Dimensions';

const MealDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 15,
            marginTop: 15,
            paddingBottom: 10,
          }}>
          <Header
            header
            headText={'Green Salad'}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.contentContainere}>
            <Image
              source={Assets.FoodItems.FoodItem1}
              resizeMode="contain"
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <Card card1 />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundColorW,
    justifyContent: 'flex-end',
  },
  contentContainere: {
    width: 164,
    height: 164,
    alignSelf: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 100,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    shadowColor: '#000',
    paddingBottom: 4,
  },
});

export default MealDetails;
