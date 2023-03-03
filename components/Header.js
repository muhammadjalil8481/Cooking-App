import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, FAB } from 'react-native-paper'
import Assets from '../assets'
import { Icon } from 'react-native-vector-icons/Icon'
import { LockIcon } from '../assets/Svg/SocialSvg'


const Header = ({ homeHeader }) => {
    return (
        <View>

            {homeHeader && (

                <View style={styles.Container}>
                    <View style={{ flexDirection: 'row' }}>
                        <Avatar.Image size={40} source={Assets.backgroundImages.profile} />
                        <Text style={styles.text}>Good Morning Alexa</Text>
                    </View>
                    <View style={{ marginTop: 25, paddingHorizontal: 5 }}>
                        <TouchableOpacity style={styles.button}>
                            <LockIcon />

                        </TouchableOpacity>
                    </View>

                </View>

            )}
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        // backgroundColor: 'green'
    },
    fab: {

        position: 'absolute',
        // margin: 12,
        backgroundColor: '#fff',
        right: 0,
        bottom: 0,
    },
    button: {
        position: 'absolute',
        bottom: 16,
        right: 1,

        backgroundColor: '#fff',
        borderRadius: 10,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15,
    },
    text: {
        paddingTop: 10,
        paddingLeft: 10

    }

})

export default Header

