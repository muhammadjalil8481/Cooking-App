import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { SearchBar } from 'react-native-screens';
import SearchbarCompo from '../components/searchbar';
import ButtonComponent from '../components/buttoncompone';
import { WIDTH } from '../assets/constants/Dimensions';
import { Colors } from '../assets/constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FAB } from 'react-native-paper';
import Assets from '../assets';
import { MenuIcon } from '../assets/Svg/SocialSvg';
import CardCompoLG from '../components/cardCompoLg';


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, paddingHorizontal: 15, marginTop: 'auto', paddingTop: 25 }}>
                    <Header homeHeader />
                    <SearchbarCompo />
                    <View style={{ paddingTop: 5 }} />
                    <ButtonComponent
                        button3
                        buttonText="Add Meal +"
                        paddingHorizontal={WIDTH < 375 ? 5 : 25}
                        icon="arrow-right"
                        onPress={() => goToNextSlide()}
                        widthIcon={WIDTH < 375 ? 40 : 57}
                        height={WIDTH < 375 ? 40 : 57}
                        width={WIDTH < 375 ? 110 : 375}
                    />
                    <View style={styles.row}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Text}>My Meal</Text>
                            <View style={{ borderWidth: 1, borderColor: 'red', height: 1, marginTop: 15, paddingHorizontal: 15 }} />
                        </View>
                        <View style={{ marginTop: 25, paddingHorizontal: 5 }}>
                            <TouchableOpacity style={styles.button}>
                                <MenuIcon />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <CardCompoLG />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    row: {
        paddingTop: 15

    },
    fab: {

        position: 'absolute',

        backgroundColor: '#fff',
        right: 0,
        bottom: 0,
    },

    Text: {
        fontSize: 28,
        paddingHorizontal: 5,

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
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 8,
    },
})
