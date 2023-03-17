import {
  StyleSheet,
  Text,
  Animated,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Header from '../components/Header';
import CardCompoLG from '../components/cardCompoLg';
import Assets from '../assets';
import ButtonComponent from '../components/buttoncompone';
import {WIDTH} from '../assets/constants/Dimensions';
import {Colors} from '../assets/constants/Colors';
import Mymodal from '../components/Mymodal';

const CartScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [innerPopupVisible, setInnerPopupVisible] = useState(false);
  const toggleInnerPopup = () => {
    setInnerPopupVisible(!innerPopupVisible);
  };
  const slideAnim = useRef(new Animated.Value(100)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const delay = setTimeout(() => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    }, 500); // Delay in milliseconds

    return () => clearTimeout(delay);
  }, [slideAnim, opacityAnim]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              paddingHorizontal: 15,
              marginTop: 15,
              paddingTop: 15,
            }}>
            <Header
              header
              headText={'Cart'}
              onPress={() => navigation.goBack()}
            />
          </View>
          <Animated.View
            style={{
              transform: [{translateY: slideAnim}],
              opacity: opacityAnim,
            }}>
            <View
              style={{
                flex: 1,
                // paddingHorizontal: 15,
              }}>
              <View style={{paddingBottom: 15}}>
                <CardCompoLG
                  onPress={() => setModalVisible(true)}
                  removebtn={true}
                  removeText={'Remove'}
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
              </View>
            </View>
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
      <Mymodal
        modaltext1={'Removed Successfully'}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        innerButton={() => navigation.navigate('HomeScreen')}
      />
    </>
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
