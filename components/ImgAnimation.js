// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
// } from 'react-native-reanimated';
// import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

// const AnimationIMG = props => {
//   const rotation = useSharedValue(0);
//   const offset = useSharedValue(0);

//   const animatedStyles = useAnimatedStyle(() => {
//     return {
//       transform: [{translateX: offset.value * 255}],
//     };
//   });

//   return (
//     <>
//       <Animated.View style={[styles.box, animatedStyles]} />
//       <TouchableOpacity
//         onPress={() => (offset.value = Math.random())}
//         title="Move">
//         <Text>BtnText </Text>
//       </TouchableOpacity>
//     </>
//   );
// };
// export default AnimationIMG;
// const styles = StyleSheet.create({
//   box: {width: 100, height: 100, backgroundColor: 'green'},
// });

import {StyleSheet, Text, Image, View, Easing, Animated} from 'react-native';
import React, {useState, useEffect} from 'react';
import {WIDTH} from '../assets/constants/Dimensions';

const ImgAnimation = ({Food1, Food2}) => {
  const [currentSlide, setCurrentSlide] = useState(false);
  const position = new Animated.ValueXY({x: 0, y: 0});
  // const [animation] = useState(new Animated.ValueXY({x: 0, y: 0}));

  const position1 = new Animated.ValueXY({x: 0, y: 0});
  useEffect(() => {
    Animated.spring(position, {
      toValue: 250,
      duration: 3000,
      easing: Easing.circle, // Easing is an additional import from react-native
      useNativeDriver: true,
    }).start();

    Animated.timing(animation, {
      toValue: {x: 200, y: 200},
      duration: 3000,
      easing: Easing.circle, // Easing is an additional import from react-native
      useNativeDriver: true,
    }).start();
    console.log(animation.ValueXY);
  }, []);

  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 0.6,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],
  });

  const animatedStyle = {
    transform: [{rotate}, {scale}],
  };

  return (
    <>
      <View
        style={{
          width: 220,
          height: 100,
          position: 'absolute',
          right: -220,
          top: -140,
        }}>
        <Animated.View
          style={{
            paddingLeft: 30,
            //    transform: [{translateY: position.y}]
          }}>
          {currentSlide === true ? (
            <Image
              source={Food1}
              resizeMode="contain"
              style={[{width: '100%'}, animatedStyle]}
            />
          ) : (
            <Animated.Image
              source={Food1}
              resizeMode="contain"
              style={[{width: '100%'}, animatedStyle]}
            />
          )}
        </Animated.View>
      </View>
      <View
        style={{
          width: 140,
          height: 140,
          position: 'absolute',
          right: -250,
          top: 200,
        }}>
        <Animated.View
          style={{paddingLeft: 30, transform: [{translateY: position1.y}]}}>
          <Image source={Food2} resizeMode="contain" style={{width: '100%'}} />
        </Animated.View>
      </View>
    </>
  );
};

export default ImgAnimation;

const styles = StyleSheet.create({});
