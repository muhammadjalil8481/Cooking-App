import React from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';
import {TouchableOpacity, Text, View} from 'react-native';
import {MenuIcon} from '../assets/Svg/SocialSvg';

const MyTooltip = ({isVisible, onClose, setVisible}) => {
  return (
    <Tooltip
      tooltipStyle={{padding: 15}}
      withPointer={false}
      contentStyle={{}}
      isVisible={isVisible}
      content={
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'NoirPro-Regular',
              color: '#1E0203',
            }}>
            Break Fast
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'NoirPro-Regular',
              color: '#1E0203',
            }}>
            Lunch
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'NoirPro-Regular',
              color: '#1E0203',
            }}>
            Dinner
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'NoirPro-Regular',
              color: '#1E0203',
            }}>
            Snackes
          </Text>
        </View>
      }
      placement="bottom"
      onClose={onClose}>
      <TouchableOpacity onPress={setVisible} style={styles.touchable}>
        <MenuIcon />
      </TouchableOpacity>
    </Tooltip>
  );
};
const styles = {
  touchable: {
    backgroundColor: '#EEEBEB',
    padding: 10,
    borderRadius: 5,
  },
};

export default MyTooltip;
