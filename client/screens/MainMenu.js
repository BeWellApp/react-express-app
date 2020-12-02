import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MenuCardSimple from '../components/MenuCardSimple';
import frontBodyWoman from '../assets/frontbodywoman.png';
import drandPatient from '../assets/drand_patient.png';
import couple from '../assets/couple.png';
import body from '../assets/sounds/body.mp3';
import talkto from '../assets/sounds/talkto.mp3';
import preservative from '../assets/sounds/preservative.mp3';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MainMenu({navigation}) {
    const data = [
        {
            title: 'מידע על גופך',
            imageSource: frontBodyWoman,
            audio: body,
            nextPage:'BodyInfo'
        },
        {
            title: 'עם מי כדאי לך להתייעץ?',
            imageSource: couple,
            audio: talkto,
            nextPage:'ConversationMenu'

        },
        {
            title: 'איך תשמרי על עצמך?',
            imageSource: drandPatient,
            audio: preservative,
            nextPage:'ProtectYourself'

        }
    ]
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.title}>בריאה</Text>
            {data.map((item, index) => <MenuCardSimple key={index} title={item.title} imageSource={item.imageSource} audio={item.audio} nextPage={item.nextPage} navigation={navigation}/>)}
            
        </SafeAreaView>
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