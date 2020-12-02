import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MenuCardSimple from '../components/MenuCardSimple';
import frontBodyWoman from '../assets/frontbodywoman.png';
import drandPatient from '../assets/drand_patient.png';
import couple from '../assets/couple.png';
import body from '../assets/sounds/body.mp3';
import talkto from '../assets/sounds/talkto.mp3';
import preservative from '../assets/sounds/preservative.mp3';

export default function MainMenu() {
    const data = [
        {
            title: 'מידע על גופך',
            imageSource: frontBodyWoman,
            audio: body
        },
        {
            title: 'עם מי כדאי לך להתייעץ?',
            imageSource: couple,
            audio: talkto
        },
        {
            title: 'איך תשמרי על עצמך?',
            imageSource: drandPatient,
            audio: preservative
        }
    ]
    return (
        <View style={styles.mainContainer}>
            {data.map((item, index) => <MenuCardSimple key={index} title={item.title} imageSource={item.imageSource} audio={item.audio} />)}
        </View>
    )
}

const styles = StyleSheet.create({
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