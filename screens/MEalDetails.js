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
            paddingHorizontal: 25,
            marginTop: 'auto',
            paddingTop: 15,
            paddingBottom: 10,
          }}>
          <Header
            header
            headText={'Green Salad'}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.foodimage}>
            <Image
              source={Assets.FoodItems.FoodItem1}
              resizeMode="contain"
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <Card />
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
  foodimage: {
    marginTop: 10,
    paddingBottom: 15,
    width: 164,
    height: 164,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 7,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});

export default MealDetails;
