import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import PlayButton from '../components/PlayButton';
import MenuCardSimple from '../components/MenuCardSimple';
import pillsAudio from '../assets/sounds/pills.mp3';
import condomsAudio from '../assets/sounds/condoms.mp3';
import condomImg from '../assets/condom.png';
import pillsImg from '../assets/pills.png';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProtectYourself() {
    const data = [
        {
            title: 'קונדומים',
            imageSource: condomImg,
            audio: condomsAudio
        },
        {
            title: 'גלולות למניעת הריון',
            imageSource: pillsImg,
            audio: pillsAudio
        }
    ]
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.title}>אמצעי מניעה</Text>
            {data.map((item, index) => <MenuCardSimple key={index} title={item.title} imageSource={item.imageSource} audio={item.audio} />)}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    // imageContainer: {
    //     width:
    // },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    title: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "bold"
    }
})