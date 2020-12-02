import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MenuCardSimple from '../components/MenuCardSimple';
import frontBodyWoman from '../assets/frontbodywoman.png';
import drandPatient from '../assets/drand_patient.png';
import couple from '../assets/couple.png';

export default function MainMenu() {
    const data = [
        {
            title: 'מידע על גופך',
            imageSource: frontBodyWoman,
            // audio: motherDaughterAudio
        },
        {
            title: 'איך לדבר על זה?',
            imageSource: couple,
            // audio: communicationAudio
        },
        {
            title: 'איך תשמרי על עצמך?',
            imageSource: drandPatient,
            // audio: seeDoctorAudio
        }
    ]
    return (
        <View style={styles.mainContainer}>
            {data.map((item, index) => <MenuCardSimple key={index} title={item.title} imageSource={item.imageSource} /* audio={item.audio}  *//>)}
        </View>
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