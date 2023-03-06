import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { CheckIcon } from '../assets/Svg/SocialSvg';

const Mymodal = ({ modalVisible, setModalVisible, innerButton, modaltext1 }) => {
    return (

        <Overlay
            overlayStyle={styles.modalView}
            style={{}}
            // animationType="slide" // transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
                setModalVisible(modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={{ padding: 15 }}>
                    <CheckIcon />
                </View>

                <Text style={styles.modalText}>{modaltext1}</Text>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={innerButton}>
                    <Text style={styles.textStyle}>Close</Text>
                </Pressable>
            </View>
        </Overlay>

    );
};

const styles = StyleSheet.create({
    centeredView: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25
    },
    modalView: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 15,
        paddingVertical: 25
    },
    button: {
        borderRadius: 15,
        padding: 15,
        elevation: 2,
        paddingRight: 35,
        paddingLeft: 35
    },
    buttonClose: {
        backgroundColor: '#C00006',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 30,
        fontFamily: 'NoirPro-SemiBold'

    },
    modalText: {
        paddingBottom: 15,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 15, color: '#000000'
    },
});



export default Mymodal

