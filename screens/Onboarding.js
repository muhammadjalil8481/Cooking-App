import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Orientation from 'react-native-orientation-locker';

import {useIsFocused} from '@react-navigation/native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Onboarding = () => {
  const isFocused = useIsFocused();
  useEffect(() => {
    // Orientation.lockToPortrait();
  }, [isFocused]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / WIDTH);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;

    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * WIDTH;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      const offset = 0 * WIDTH;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(0);
    }
  };
  const goToPrevSlide = () => {
    const prevSlideIndex = currentSlideIndex - 1;

    if (prevSlideIndex != slides.length) {
      const offset = prevSlideIndex * WIDTH;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../')}>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          data={slides}
          contentContainerStyle={{flexGrow: 1}}
          style={{
            flex: 1,
          }}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Slide
              currentSlideIndex={currentSlideIndex}
              goToNextSlide={goToNextSlide}
              goToPrevSlide={goToPrevSlide}
              // navigation={navigation}
              item={item}
            />
          )}
        />
      </ImageBackground>
    </View>
  );
};

const Slide = ({
  item,
  currentSlideIndex,
  goToNextSlide,
  goToPrevSlide,
  navigation,
}) => {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', width: WIDTH}}>
      {item.id === 1 || item.id === 7 ? (
        <>
          <Image
            resizeMode="cover"
            source={item.img}
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 65,
            }}>
            <Image source={'../assets/images/FoodItem1.png'} style={{}} />
            <Text style={styles.headtext}>
              <Text style={{fontWeight: 'bold'}}>VIBE</Text>GARDEN
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                textAlign: 'center',
              }}>
              You're In full bloom
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                textAlign: 'center',
                marginVertical: 5,
                lineHeight: 30,
                fontFamily: 'BrandonGrotesque-Regular',
                paddingHorizontal: 15,
              }}>
              Tools, tips & magic for growing your communication to you!
            </Text>
          </View>
          <View style={{position: 'absolute', bottom: 100, width: '100%'}}>
            <Indicators currentSlideIndex={currentSlideIndex} marginTop={25} />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('namescreen', {
                  showVerifyScreen: true,
                })
              }
              style={styles.btn1}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#fff',
                  fontFamily: 'BrandonGrotesque-Medium',
                }}>
                Get Started
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('login')}
              style={styles.btn2}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#fff',
                  fontFamily: 'BrandonGrotesque-Medium',
                }}>
                Login In
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={{width: '100%', height: HEIGHT / 2}}>
            <Image
              resizeMode="contain"
              source={item.img}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <Text
            style={{
              color: 'rgba(28, 92, 46, 1)',
              fontSize: 15,
              textAlign: 'center',
              marginVertical: 5,
              lineHeight: 26,
              paddingHorizontal: 25,
              marginTop: 10,
              marginBottom: 80,
            }}>
            {item.text}
          </Text>

          <View
            style={{
              backgroundColor: '#ffff',
              position: 'absolute',
              alignSelf: 'center',
              bottom: 40,
            }}>
            <Indicators
              currentSlideIndex={currentSlideIndex}
              marginTop={5}
              marginBottom={30}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{marginRight: 10}}
                onPress={goToPrevSlide}
                // disabled={item.id === 2 ? true : false}
              >
                <Icon name="angle-left" size={20} />
              </TouchableOpacity>
              <Text
                style={{
                  alignSelf: 'center',
                  textAlign: 'center',
                  color: '#191919B8',
                }}>
                Swipe To See How It Works
              </Text>
              <TouchableOpacity
                style={{marginLeft: 10}}
                onPress={goToNextSlide}
                disabled={false}>
                <Text style={{color: '#191919B8'}}>
                  <Icon name="angle-right" size={20} />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};
const Indicators = ({currentSlideIndex, marginTop, marginBottom = 25}) => {
  return (
    <View
      style={{
        marginBottom: marginBottom,
        marginTop: marginTop,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}>
      {/* Indicator container */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {/* Render indicator */}
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {
                backgroundColor: 'rgba(205, 37, 141, 1)',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};
const slides = [
  {id: 1, img: require('../assets/images/FoodItem1.png')},
  {
    id: 2,
    img: require('../assets/images/FoodItem1.png'),
    text: `Welcome, you infinitely radiant being of light in human clothing. We've been waiting for you. You have a powerful soul signature, a unique vibration. And whether you remember it or not, you've come to Earth at this time to offer your resonance.`,
  },
  {
    id: 3,

    img: require('../assets/images/FoodItem1.png'),
    text: `AND. Embodying our fullness down here can be tricky! So with VibeBloom, we quest together. Kindling one another, as we employ joyful, powerful tools for coming home to ourselves and being all that we truly, uniquely are.`,
  },
  {
    id: 4,

    img: require('../assets/images/FoodItem1.png'),
    text: `You'll see we have tools for connecting to your light and we have tools for working with the beautifully tricky, sticky human stuff we've each decided to learn about along the way-like wounding, negative thought patterns, and habits that keep us small`,
  },
  {
    id: 5,

    img: require('../assets/images/FoodItem1.png'),
    text: `We also have tools to deepen connection with fellow journeyers - whether friends, partners, or family (Peep the "Garden Party" tag for these!)`,
  },
  {
    id: 6,

    img: require('../assets/images/FoodItem1.png'),
    text: `So are you ready to Bloom your vibe and embody your full, exquisite beingness? Excellent. Because Momma Earth and Humanity are counting on you. Let's come home together. Joy and freedom await. It's now now.`,
  },
  {id: 7, img: require('../assets/images/FoodItem1.png')},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: "center",
    // justifyContent: "center",
  },
  indicator: {
    height: 15,
    width: 15,
    backgroundColor: 'rgba(151, 155, 159, 0.4)',
    marginHorizontal: 3,
    borderRadius: 10,
  },
  btn2: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 55,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: -65,
  },
  btn1: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4053',
    alignItems: 'center',
    width: '80%',
    height: 55,
    borderRadius: 30,
    marginBottom: 20,
  },
  headtext: {
    fontWeight: '300',
    fontSize: 32,
    color: '#fff',
    marginVertical: 10,
  },
});
export default Onboarding;
