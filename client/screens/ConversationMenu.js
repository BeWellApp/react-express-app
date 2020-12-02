import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import PlayButton from '../components/PlayButton';
import MenuCardSimple from '../components/MenuCardSimple';
import communicationAudio from '../assets/sounds/communication.mp3';
import motherDaughterAudio from '../assets/sounds/mother_daughter.mp3';
import seeDoctorAudio from '../assets/sounds/seeadoctor.mp3';
import couple from '../assets/couple.png';
import drandPatient from '../assets/drand_patient.png';
import womanAndDaughter from '../assets/woman_and_daughter.png';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ConversationMenu() {
    const data = [
        {
            title: 'איך לדבר עם אמך?',
            imageSource: womanAndDaughter,
            audio: motherDaughterAudio
        },
        {
            title: 'שיחה עם הבן זוג',
            imageSource: couple,
            audio: communicationAudio
        },
        {
            title: 'מהי רפואת נשים?',
            imageSource: drandPatient,
            audio: seeDoctorAudio
        }
    ]
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.title}>איך לדבר על זה?</Text>
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