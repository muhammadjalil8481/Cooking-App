import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import Assets from '../assets';
import { Colors } from '../assets/constants/Colors';
import ButtonComponent from '../components/buttoncompone';
import { color } from 'react-native-reanimated';
const { WIDTH } = Dimensions.get('window');
const HEIGHT = Dimensions.get('window').height;

const Splash = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar backgroundColor="transparent" barStyle="light-content" /> */}
      <ImageBackground
        source={Assets.backgroundImages.whiteBG}
        style={styles.image}
        resizeMode="cover">
        <View
          style={{
            overflow: 'visible',
            // width: WIDTH < 375 ? 70 : 80,
            // height: WIDTH < 375 ? 70 : 80,
            position: 'absolute',
            bottom: 0,
            paddingBottom: 10,
          }}>
          <View style={{ paddingHorizontal: 15 }}>
            <Text numberOfLines={2} style={styles.headtext}>
              Add your meal & meal planner
            </Text>
            <Text numberOfLines={2} style={styles.paratext}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt...
            </Text>
          </View>
          <View
            style={{
              height: WIDTH <= 375 ? 40 : 57,
              width: WIDTH <= 323 ? 233 : 205,
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 35,
              backgroundColor: Colors.primary,
              paddingHorizontal: 25,
              alignSelf: 'center',
              marginBottom: 10,
              // justifyContent: 'flex-end',
              // alignItems: 'flex-end',
              alignSelf: 'flex-end',
            }}>
            <ButtonComponent
              circleIcon
              buttonText="Lets Start"
              buttonColor={Colors.primary}
              textColor={Colors.secondary}
              // onPress={() => navigation.goBack()}
              height={WIDTH <= 375 ? 40 : 57}
              width={WIDTH <= 323 ? 233 : 205}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  image: {
    overflow: 'visible',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  headtext: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 4,
    textAlign: 'left',
    fontFamily: 'Crispy Food DEMO',
    fontFamily: 'Crispy Food DEMO',
  },
  paratext: {
    marginTop: 10,
    color: '#000',
    fontSize: 12,
    fontWeight: '350',
    marginVertical: 4,
    textAlign: 'left',
    fontFamily: 'Crispy Food DEMO',
  },
});
