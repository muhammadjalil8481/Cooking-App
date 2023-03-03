import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CardCompoLG from '../components/cardCompoLg';
import Assets from '../assets';
import ButtonComponent from '../components/buttoncompone';
import {WIDTH} from '../assets/constants/Dimensions';
import {Colors} from '../assets/constants/Colors';

const CartScreen = ({navigation}) => {
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
          }}>
          <Header
            header
            headText={'Cart'}
            onPress={() => navigation.goBack()}
          />
          <View style={{paddingBottom: 15}}>
            <CardCompoLG
              bgColor={'#C00006'}
              FoodImage={Assets.FoodItems.FoodItem1}
              ButtonComponent={
                <ButtonComponent
                  button2
                  buttonText="View Full"
                  buttonColor={'red'}
                  //   textColor={Colors.secondary}
                  onPress={() => navigation.navigate('CartScreen')}
                  height={WIDTH <= 375 ? 40 : 55}
                  width={WIDTH <= 375 ? 125 : 175}
                />
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundColorW,
    justifyContent: 'flex-end',
  },
});
