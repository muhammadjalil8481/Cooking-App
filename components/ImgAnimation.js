import {StyleSheet, Text, Image, View, Easing, Animated} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {WIDTH} from '../assets/constants/Dimensions';

const ImgAnimation = ({Food1, Food2}) => {
  // let rotateValueHolder = new Animated.Value(0);
  const translateXValue = useRef(new Animated.Value(20)).current;
  const translateYValue = useRef(new Animated.Value(300)).current;
  const scaleXValue = useRef(new Animated.Value(0.1)).current;

  const translateXValueSmall = useRef(new Animated.Value(-70)).current;
  const translateYValueSmall = useRef(new Animated.Value(-295)).current;
  const scaleXValueSmall = useRef(new Animated.Value(3.5)).current;
  const [f1, setF1] = useState(Food1);
  const [f2, setF2] = useState(Food2);

  const animate1 = () => {
    Animated.timing(translateXValue, {
      toValue: -80,
      duration: 1000,
      delay: 700,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateYValue, {
      toValue: -80,
      duration: 1000,
      delay: 700,
      easing: Easing.bezier(0.6, 0.1, 0.6, 1.22),
      useNativeDriver: true,
    }).start();

    Animated.timing(scaleXValue, {
      toValue: 1.1,
      duration: 1000,
      delay: 700,
      useNativeDriver: true,
    }).start();
  };
  const animate2 = () => {
    Animated.timing(translateXValueSmall, {
      toValue: 10,
      duration: 1000,
      delay: 700,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateYValueSmall, {
      toValue: 30,
      duration: 1000,
      delay: 700,
      easing: Easing.bezier(0.6, 0.1, 0.6, 1.22),
      useNativeDriver: true,
    }).start();

    Animated.timing(scaleXValueSmall, {
      toValue: 1,
      duration: 1000,
      delay: 700,
      useNativeDriver: true,
    }).start();
  };
  const resetAnimate1 = () => {
    Animated.timing(translateXValue, {
      toValue: 20,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateYValue, {
      toValue: 300,
      duration: 1000,
      easing: Easing.bezier(0.6, 0.1, 0.6, 1.22),
      useNativeDriver: true,
    }).start();

    Animated.timing(scaleXValue, {
      toValue: 0.1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const resetAnimate2 = () => {
    Animated.timing(translateXValueSmall, {
      toValue: -70,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateYValueSmall, {
      toValue: -295,
      duration: 1000,
      easing: Easing.bezier(0.6, 0.1, 0.6, 1.22),
      useNativeDriver: true,
    }).start();

    Animated.timing(scaleXValueSmall, {
      toValue: 3.5,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  // useEffect(() => {
  //   animate1();
  //   animate2();
  // });
  useEffect(() => {
    setTimeout(() => setF1(Food1), 1000);
    setTimeout(() => setF2(Food2), 1000);
    resetAnimate1();
    resetAnimate2();
    setTimeout(() => {
      animate1();
      animate2();
    }, 1000);

    // animate1();
    // animate2();
  }, [translateXValue, Food1, Food2]);
  // const startImageRotateFunction = () => {
  //   rotateValueHolder.setValue(0);
  //   Animated.timing(rotateValueHolder, {
  //     toValue: 1,
  //     duration: 500,
  //     easing: Easing.linear,
  //     useNativeDriver: false,
  //   }).start(() => startImageRotateFunction());
  // };

  // const RotateData = rotateValueHolder.interpolate({
  //   inputRange: [1, 1],
  //   outputRange: ['0deg', '360deg'],
  // });
  // const position = new Animated.ValueXY({x: 0, y: 0});
  // const position1 = new Animated.ValueXY({x: 0, y: 0});
  // const [animation] = useState(new Animated.Value(0));

  // useEffect(() => {
  //   Animated.spring(position, {
  //     toValue: 250,
  //     duration: 3000,
  //     easing: Easing.circle, // Easing is an additional import from react-native
  //     useNativeDriver: true,
  //   }).start();

  //   Animated.timing(animation, {
  //     toValue: {x: 200, y: 200},
  //     duration: 3000,
  //     easing: Easing.circle, // Easing is an additional import from react-native
  //     useNativeDriver: true,
  //   }).start();
  //   console.log(animation.ValueXY);
  // }, []);
  // useEffect(() => {
  //   Animated.spring(position1, {
  //     toValue: -250,
  //     duration: 3000,
  //     easing: Easing.circle, // Easing is an additional import from react-native
  //     useNativeDriver: true,
  //   }).start();
  //   Animated.timing(animation, {
  //     toValue: {x: 200, y: 200},
  //     duration: 3000,
  //     easing: Easing.circle, // Easing is an additional import from react-native
  //     useNativeDriver: true,
  //   }).start();
  //   console.log(animation.ValueXY);
  // }, []);

  // useEffect(() => {
  //   Animated.timing(animation, {
  //     toValue: 0.6,
  //     duration: 9000,
  //     useNativeDriver: true,
  //   }).start();
  // }, []);

  // const rotate = animation.interpolate({
  //   inputRange: [1, 1],
  //   outputRange: ['360deg', '0deg'],
  // });
  // const scale = animation.interpolate({
  //   inputRange: [1, 1],
  //   outputRange: [2, 2],
  // });
  // const animatedStyle = {
  //   transform: [{rotate}, {scaleY: 1}],
  // };

  // useEffect(() => {
  //   startImageRotateFunction();
  //   setTimeout(() => {
  //     // navigation.replace('login');
  //   }, 3000);
  // }, []);

  return (
    <>
      <View
        style={{
          width: '100%',
          height: '90%',
          position: 'absolute',
          // right: -110,
          // right: 10,
          // left: -80,
          // top: -105,
        }}>
        <Animated.View
          // onPress={handleClickX}
          style={{
            paddingLeft: 30,
            paddingLeft: 30,
            transform: [
              {translateY: translateYValue},
              {translateX: translateXValue},
              {scale: scaleXValue},
            ],
          }}>
          <Animated.Image
            source={f1}
            resizeMode="contain"
            style={[
              {width: '100%'},
              // animatedStyle
            ]}
          />
        </Animated.View>
      </View>
      <View
        style={{
          width: 100,
          height: 100,
          position: 'absolute',
          right: -200,
          top: 200,
        }}>
        <Animated.View
          style={{
            paddingLeft: 30,
            transform: [
              {translateX: translateXValueSmall},
              {translateY: translateYValueSmall},
              {scale: scaleXValueSmall},
            ],
            // transform: [{translateY: position1.y}]
          }}>
          <Animated.Image
            source={f2}
            resizeMode="contain"
            style={[
              {width: '100%'},
              //  animatedStyle
            ]}
          />
        </Animated.View>
      </View>
    </>
  );
};

export default ImgAnimation;

const styles = StyleSheet.create({});
