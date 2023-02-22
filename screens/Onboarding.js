// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Dimensions,
//   Image,
//   ImageBackground,
//   FlatList,
//   StatusBar,
// } from 'react-native';
// import React, { useEffect, useRef, useState } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Orientation from 'react-native-orientation-locker';
// import { useIsFocused } from '@react-navigation/native';
// import Assets from '../assets';
// import { color } from 'react-native-reanimated';
// import { Colors } from '../assets/constants/Colors';
// import ButtonComponent from '../components/buttoncompone';
// const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;
// const Onboarding = ({ navigation }) => {
//   const isFocused = useIsFocused();
//   useEffect(() => {
//     Orientation.lockToPortrait();
//   }, [isFocused]);
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//   const ref = useRef();
//   const updateCurrentSlideIndex = e => {
//     const contentOffsetX = e.nativeEvent.contentOffset.x;
//     const currentIndex = Math.round(contentOffsetX / WIDTH);
//     setCurrentSlideIndex(currentIndex);
//   };

//   const goToNextSlide = () => {
//     const nextSlideIndex = currentSlideIndex + 1;

//     if (nextSlideIndex != slides.length) {
//       const offset = nextSlideIndex * WIDTH;
//       ref?.current.scrollToOffset({ offset });
//       setCurrentSlideIndex(currentSlideIndex + 1);
//     } else {
//       const offset = 0 * WIDTH;
//       ref?.current.scrollToOffset({ offset });
//       setCurrentSlideIndex(0);
//     }
//   };
//   const goToPrevSlide = () => {
//     const prevSlideIndex = currentSlideIndex - 1;

//     if (prevSlideIndex != slides.length) {
//       const offset = prevSlideIndex * WIDTH;
//       ref?.current.scrollToOffset({ offset });
//       setCurrentSlideIndex(currentSlideIndex - 1);
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <FlatList
//         ref={ref}
//         onMomentumScrollEnd={updateCurrentSlideIndex}
//         data={slides}
//         contentContainerStyle={{ flexGrow: 1 }}
//         style={{
//           flex: 1,
//         }}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         renderItem={({ item }) => (
//           <Slide
//             currentSlideIndex={currentSlideIndex}
//             goToNextSlide={goToNextSlide}
//             goToPrevSlide={goToPrevSlide}
//             navigation={navigation}
//             item={item}
//           />
//         )}
//       />
//     </View>
//   );
// };

// const Slide = ({
//   item,
//   currentSlideIndex,
//   goToNextSlide,
//   goToPrevSlide,
//   navigation,
// }) => {
//   return (
//     <View
//       style={{
//         alignItems: 'center', justifyContent: 'center',
//         width: WIDTH, backgroundColor: 'pink'
//       }}>

//       {item.id === 1 || item.id === 3 ? (
//         <>
//           <ImageBackground
//             source={Assets.backgroundImages.whiteBG}
//             style={{
//               overflow: 'visible',
//               width: '100%',
//               height: '100%',
//               resizeMode: 'cover',

//               // alignItems: 'center', justifyContent: 'center', width: WIDTH,
//               // position: 'absolute',
//               // top: 0,
//               // left: 0,
//               // right: 0,
//               // bottom: 0,
//             }}>
//             <View style={{ position: 'absolute', bottom: 30, width: '100%', paddingHorizontal: 15 }}>
//               <View
//                 style={{
//                   // justifyContent: 'center',
//                   // alignItems: 'center',
//                   // position: 'absolute',
//                   // top: 65,
//                   alignSelf: 'center'
//                 }}>

//                 <Text style={{
//                   color: '#000',
//                   fontSize: 27,
//                   // textAlign: 'center',
//                   marginVertical: 5,
//                   lineHeight: 36,
//                   fontFamily: 'Crispy Cream-Bold',

//                 }}>
//                   Add your meal & meal planner
//                 </Text>

//                 <Text
//                   style={{
//                     color: '#000',
//                     fontSize: 12,
//                     // textAlign: 'center',
//                     marginVertical: 5,
//                     lineHeight: 20,
//                     fontFamily: 'Crispy Cream-Bold',

//                   }}>
//                   Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...
//                 </Text>
//               </View>
//               <View
//                 style={{
//                   height: WIDTH <= 375 ? 40 : 57,
//                   width: WIDTH <= 323 ? 233 : 205,
//                   alignSelf: 'flex-end',
//                   paddingHorizontal: 25
//                 }}>
//                 <ButtonComponent
//                   circleIcon
//                   buttonText="Lets Start"
//                   buttonColor={Colors.primary}
//                   textColor={Colors.secondary}
//                   onPress={navigation.na}

//                   height={WIDTH <= 375 ? 40 : 57}
//                   width={WIDTH <= 323 ? 233 : 205}
//                 />
//               </View>
//             </View>

//           </ImageBackground>

//         </>
//       ) : (
//         <>
//           <ImageBackground
//             source={Assets.backgroundImages.BackGroundBG}
//             style={{
//               overflow: 'visible',
//               width: '100%',
//               height: '100%',
//               resizeMode: 'cover',
//               // alignItems: 'center', justifyContent: 'center', width: WIDTH,
//               // position: 'absolute',
//               // top: 0,
//               // left: 0,
//               // right: 0,
//               // bottom: 0,
//             }}>

//             <View style={{ backgroundColor: "yellow" }}>

//               <Image source={Assets.backgroundImages.FoodItem1} />

//             </View>
//             <View style={{ position: 'absolute', bottom: 30, width: '100%', paddingHorizontal: 15 }}>
//               <View
//                 style={{
//                   // justifyContent: 'center',
//                   // alignItems: 'center',
//                   // position: 'absolute',
//                   // top: 65,
//                   alignSelf: 'center'
//                 }}>

//                 <Text style={{
//                   color: '#fff',
//                   fontSize: 27,
//                   // textAlign: 'center',
//                   marginVertical: 5,
//                   lineHeight: 36,
//                   fontFamily: 'Crispy Cream-Bold',

//                 }}>
//                   Add your meal & meal planner
//                 </Text>

//                 <Text
//                   style={{
//                     color: '#FFF',
//                     fontSize: 12,
//                     // textAlign: 'center',
//                     marginVertical: 5,
//                     lineHeight: 20,
//                     fontFamily: 'Crispy Cream-Bold',

//                   }}>
//                   Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...
//                 </Text>
//               </View>
//               <View
//                 style={{
//                   height: WIDTH <= 375 ? 40 : 57,
//                   width: WIDTH <= 323 ? 233 : 205,
//                   alignSelf: 'flex-end',
//                   paddingHorizontal: 25
//                 }}>
//                 <ButtonComponent
//                   circleIcon
//                   buttonText="Lets Start"
//                   buttonColor={Colors.primary}
//                   textColor={Colors.secondary}
//                   // onPress= navigation.navigate('namescreen', {
//                   //     showVerifyScreen: true,
//                   //   })
//                   // }
//                   height={WIDTH <= 375 ? 40 : 57}
//                   width={WIDTH <= 323 ? 233 : 205}
//                 />
//               </View>
//             </View>

//           </ImageBackground>
//         </>
//       )}
//     </View>
//   );
// };
// const Indicators = ({
//   currentSlideIndex,
//   goToPrevSlide,
//   goToNextSlide,
//   reanimatedStyle,
//   reanimatedIndicatorStyle,
//   reanimatedIndicator1Style,
//   reanimatedIndicator2Style,
//   reanimatedIndicatorColorStyle,
// }) => {
//   return (
//     <View
//       style={{
//         justifyContent: 'space-between',
//         paddingHorizontal: 20,
//         position: 'absolute',
//         bottom: hasNotch ? 25 : 15,
//         left: 0,
//         right: 0,
//       }}>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//         }}>
//         <Animated.View style={[reanimatedStyle]}>
//           <FAB
//             style={[
//               styles.fab,
//               {
//                 height: WIDTH < 375 ? 40 : 55,
//                 width: WIDTH < 375 ? 40 : 55,
//               },
//             ]}
//             size="small"
//             icon="arrow-left"
//             color={Colors.secondary}
//             onPress={() => goToPrevSlide()}
//           />
//         </Animated.View>
//         <ButtonComponent
//           buttonText="Next"
//           icon="arrow-right"
//           buttonColor={Colors.secondary}
//           textColor={Colors.primary}
//           onPress={() => goToNextSlide()}
//           height={WIDTH < 375 ? 40 : 55}
//           width={WIDTH < 375 ? 110 : 150}
//           viewOnRight={true}
//         />
//       </View>
//       {/* Indicator container */}
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'center',
//           marginTop: HEIGHT / 20,
//         }}>
//         {/* Render indicator */}
//         {slides.map((_, index) => {
//           return (
//             <>

//               <Animated.View
//                 key={index}
//                 style={[
//                   styles.indicator,
//                   index === 0 && reanimatedIndicatorStyle,
//                   index === 1 && reanimatedIndicator1Style,
//                   index === 2 && reanimatedIndicator2Style,
//                   reanimatedIndicatorColorStyle,
//                   currentSlideIndex == index && {
//                     opacity: 1,
//                   },
//                 ]}
//               />
//               <Indicators
//                 currentSlideIndex={currentSlideIndex}
//                 goToNextSlide={goToNextSlide}
//                 goToPrevSlide={goToPrevSlide}
//                 navigation={navigation}
//                 reanimatedStyle={reanimatedStyle}
//                 reanimatedIndicatorStyle={reanimatedIndicatorStyle}
//                 reanimatedIndicator1Style={reanimatedIndicator1Style}
//                 reanimatedIndicator2Style={reanimatedIndicator2Style}
//                 reanimatedIndicatorColorStyle={reanimatedIndicatorColorStyle}
//               />
//             </>
//           );
//         })}
//       </View>
//     </View>
//   );
// };

// const slides = [
//   {
//     id: 1,
//     image: Assets.backgroundImages.whiteBG,
//     // img: Images.BackGround.Bg1
//   },
//   {
//     id: 2,
//     image: Assets.backgroundImages.FoodItem1,
//     // img: Images.BackGround.storybg1,
//     text: `Welcome, you infinitely radiant being of light in human clothing. We've been waiting for you. You have a powerful soul signature, a unique vibration. And whether you remember it or not, you've come to Earth at this time to offer your resonance.`,
//   },
//   {
//     id: 3,
//     image: Assets.backgroundImages.whiteBG,
//     // img: Images.BackGround.storybg2,
//     text: `AND. Embodying our fullness down here can be tricky! So with VibeBloom, we quest together. Kindling one another, as we employ joyful, powerful tools for coming home to ourselves and being all that we truly, uniquely are.`,
//   },


// ];

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
//   indicator: {
//     height: 15,
//     width: 15,
//     backgroundColor: 'rgba(151, 155, 159, 0.4)',
//     marginHorizontal: 3,
//     borderRadius: 10,
//   },
//   btn2: {
//     alignSelf: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '80%',
//     height: 55,
//     borderRadius: 30,
//     borderWidth: 2,
//     borderColor: '#000',
//     marginBottom: -65,
//   },
//   btn1: {
//     justifyContent: 'flex-end',
//     alignSelf: 'center',
//     justifyContent: 'center',
//     backgroundColor: Colors.primary,
//     alignItems: 'center',
//     width: '50%',
//     height: 55,
//     borderRadius: 30,
//     marginBottom: 20,
//   },
//   headtext: {
//     fontWeight: '600',
//     fontSize: 27,
//     color: '#000',

//   },
// });
// export default Onboarding;




import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Assets from '../assets';

import { Colors } from '../assets/constants/Colors';
import ButtonComponent from '../components/buttoncompone';
import deviceInfoModule from 'react-native-device-info';
import { FAB } from 'react-native-paper';
// import Lottie from 'lottie-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
  interpolateColor,
} from 'react-native-reanimated';
import { WIDTH, HEIGHT } from '../assets/constants/Dimensions';
// import { Fonts } from '../assets/fonts/fonts';

let hasNotch = deviceInfoModule.hasNotch();

const Onboarding = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();

  // ReAnimated Initials Values
  const progress = useSharedValue(0);
  const progressIndicator = useSharedValue(13);
  const progressIndicator1 = useSharedValue(13);
  const progressIndicator2 = useSharedValue(13);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  }, []);
  const reanimatedIndicatorStyle = useAnimatedStyle(() => {
    return {
      width: progressIndicator.value,
    };
  }, []);
  const reanimatedIndicator1Style = useAnimatedStyle(() => {
    return {
      width: progressIndicator1.value,
    };
  }, []);
  const reanimatedIndicator2Style = useAnimatedStyle(() => {
    return {
      width: progressIndicator2.value,
    };
  }, []);
  const indicatorColor = useDerivedValue(() => {
    return withTiming(currentSlideIndex > 0 ? 0 : 1);
  });

  const reanimatedIndicatorColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      indicatorColor.value,
      [0, 1],
      [Colors.primary, Colors.secondary],
    );
    return {
      backgroundColor,
    };
  });

  useEffect(() => {
    if (currentSlideIndex > 0) {
      progress.value = withSpring(1);
    } else {
      progress.value = withSpring(0);
    }
    if (currentSlideIndex === 0) {
      progressIndicator.value = withSpring(42);
    } else {
      progressIndicator.value = withSpring(13);
    }
    if (currentSlideIndex === 1) {
      progressIndicator1.value = withSpring(42);
    } else {
      progressIndicator1.value = withSpring(13);
    }
    if (currentSlideIndex === 2) {
      progressIndicator2.value = withSpring(42);
    } else {
      progressIndicator2.value = withSpring(13);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlideIndex]);

  // Onboard Slide Functions
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / WIDTH);
    setCurrentSlideIndex(currentIndex);
  };
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (currentSlideIndex === 2) {
      navigation.replace('Login');
      return;
    }
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * WIDTH;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  const goToPrevSlide = () => {
    const nextSlideIndex = currentSlideIndex - 1;
    if (currentSlideIndex === 0) {
      return;
    }
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * WIDTH;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };
  return (
    <>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={slides}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        horizontal
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={WIDTH}
        onScrollEndDrag={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Indicators
        currentSlideIndex={currentSlideIndex}
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
        navigation={navigation}
        reanimatedStyle={reanimatedStyle}
        reanimatedIndicatorStyle={reanimatedIndicatorStyle}
        reanimatedIndicator1Style={reanimatedIndicator1Style}
        reanimatedIndicator2Style={reanimatedIndicator2Style}
        reanimatedIndicatorColorStyle={reanimatedIndicatorColorStyle}
      />
    </>
  );
};

export default Onboarding;

const Slide = ({ item }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH,
        height: HEIGHT,
      }}>
      <ImageBackground
        source={item.id === 1 ? Assets.backgroundImages.whiteBG : Assets.backgroundImages.BackGroundBG}
        resizeMode="cover"
        style={[
          styles.image,
          { backgroundColor: item.id !== 1 ? Assets.backgroundImages.whiteBG : 'transparent' },
        ]}>
        {item.id === 1 && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}>

          </View>
        )}
        <View
          style={{
            width: WIDTH,
            height: HEIGHT / 2.5,
            alignItems: 'center',
          }}>
          {item.id !== 1 && (
            <>
              <View
                style={{
                  width: WIDTH < 375 ? 70 : 80,
                  height: WIDTH < 375 ? 70 : 80,
                  position: 'absolute',
                  right: 30,
                  top: -15,
                }}>

              </View>

            </>
          )}
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            paddingTop: HEIGHT < 700 ? HEIGHT / 15 : HEIGHT / 12.5,
          }}>
          {item.id === 1 ? (
            <>
              <Text
                style={[
                  styles.title,
                  {
                    lineHeight: HEIGHT < 700 ? 40 : 55,
                  },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit>
                Get Yourself <Text style={{ fontWeight: 400 }}>Healthy</Text>
              </Text>
              <Text
                style={[
                  styles.title,
                  {
                    lineHeight: HEIGHT < 700 ? 40 : 55,
                  },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit>
                with Us!
              </Text>
            </>
          ) : item.id === 2 ? (
            <>
              <Text
                style={[
                  styles.title,
                  { color: Colors.tertiary, lineHeight: HEIGHT < 700 ? 40 : 55 },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit>
                Get Yourself{' '}
                <Text style={{ fontWeight: 400, color: Colors.primary }}>
                  Healthy
                </Text>
              </Text>
              <Text
                style={[
                  styles.title,
                  { color: Colors.tertiary, lineHeight: HEIGHT < 700 ? 40 : 55 },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit>
                &
                <Text style={{ fontWeight: 400, color: Colors.primary }}>
                  {' '}
                  Strong{' '}
                </Text>
                with Us!
              </Text>
            </>
          ) : item.id === 3 ? (
            <>
              <Text
                style={[
                  styles.title,
                  { color: Colors.primary, lineHeight: HEIGHT < 700 ? 40 : 55, },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit>
                Add your meal & meal planner
              </Text>

            </>
          ) : null}
          <Text
            style={[
              styles.subTitle,
              {
                color: item.id !== 1 ? Colors.primary : Colors.primary,
                lineHeight: HEIGHT < 700 ? 25 : 30,
              },
            ]}
            numberOfLines={2}
            adjustsFontSizeToFit>
            {item.subtitle}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const Indicators = ({
  currentSlideIndex,
  goToPrevSlide,
  goToNextSlide,
  reanimatedStyle,
  reanimatedIndicatorStyle,
  reanimatedIndicator1Style,
  reanimatedIndicator2Style,
  reanimatedIndicatorColorStyle,
}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: hasNotch ? 25 : 15,
        left: 0,
        right: 0,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: HEIGHT / 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => {
            return (
              <Animated.View
                key={index}
                style={[
                  styles.indicator,
                  index === 0 && reanimatedIndicatorStyle,
                  index === 1 && reanimatedIndicator1Style,
                  index === 2 && reanimatedIndicator2Style,
                  reanimatedIndicatorColorStyle,
                  currentSlideIndex == index && {
                    opacity: 1,
                  },
                ]}
              />
            );
          })}
        </View>
        <Animated.View style={[reanimatedStyle]}>
          <FAB
            style={[
              styles.fab,
              {
                height: WIDTH < 375 ? 40 : 55,
                width: WIDTH < 375 ? 40 : 55,
              },
            ]}
            size="small"
            icon="arrow-left"
            color={Colors.secondary}
            onPress={() => goToNextSlide()}
          />
        </Animated.View>
        {currentSlideIndex == 0 ?

          (
            <ButtonComponent
              circleIcon
              buttonText="Next"
              icon="arrow-right"
              buttonColor={Colors.primary}
              textColor={Colors.secondary}
              onPress={() => goToNextSlide()}
              height={WIDTH < 375 ? 40 : 55}
              width={WIDTH < 375 ? 110 : 150}
              viewOnRight={true}

            />
          ) : null
        }

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: HEIGHT,
    width: WIDTH,
    paddingTop: HEIGHT / 12.5,
  },
  title: {
    // fontFamily: Fonts.default,
    fontSize: 34.25,
    fontWeight: 700,
    color: '#1E0203',
    letterSpacing: 1.75,
  },
  subTitle: {
    // fontFamily: Fonts.default,
    fontSize: 16,
    fontWeight: 200,
    color: '#1E0203',
    marginTop: 0,
    marginBottom: 65,
  },
  indicator: {
    height: 13,
    width: 13,
    opacity: 0.5,
    marginHorizontal: 3,
    borderRadius: 10,
  },
  fab: {
    height: 55,
    width: 55,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});

const slides = [
  {
    id: 1,
    title: 'Get Yourself Healthy & Strong with Us!',
    subtitle:
      'Lorem ipsum dolor sit amet, consetetur sscing elitr, sed diam nonumy eirmod tempor',
  },
  {
    id: 2,
    title: 'Get Yourself Healthy & Strong with Us!',
    subtitle:
      'Lorem ipsum dolor sit amet, consetetur sscing elitr, sed diam nonumy eirmod tempor',
    // animation: Assets.animation.onboardAnimation2,
  },
  {
    id: 3,
    title: 'Transform your life for Better!',
    subtitle:
      'Lorem ipsum dolor sit amet, consetetur sscing elitr, sed diam nonumy eirmod tempor',
    // animation: Assets.animation.onboardAnimation3,
  },
];





