import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions'
import { Colors } from '../assets/constants/Colors'

const CardCompoLG = () => {
    return (
        <View>
            <View style={styles.contentContainer}>

                <View style={[styles.contentContainer, { backgroundColor: Colors.Red }]}>


                    <View style={{ marginVertical: 5 }} />
                    <Text style={styles.text}>Green
                        <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Salad</Text>
                    </Text>

                    <View style={{ marginVertical: 10 }} />

                </View>
                <View style={{ marginVertical: 5 }} />

                <View style={{ marginVertical: 10 }} />

            </View>
        </View >
    )
}

export default CardCompoLG
const styles = StyleSheet.create({

    contentContainer: {
        alignSelf: 'center',
        backgroundColor: '#FFFF',
        borderRadius: 10,
        paddingBottom: 25,
        width: WIDTH <= 375 ? 315 : 375,
        paddingHorizontal: 25,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    text: {
        color: '#fff',
        fontSize: 17,

    }

})