<<<<<<< HEAD
=======

>>>>>>> a725aa5fc01bd23c419ba34bee2054ce494f334b
import BackButton from '../components/BackButton';
import NextButton from '../components/NextButton';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PlayButton from '../components/PlayButton';
import AmharicRecording from '../assets/sounds/amharic_recording.mp3';
import ArabicRecording from '../assets/sounds/arabic_recording.mp3';
import EnglishRecording from '../assets/sounds/english_recording.mp3';
import HebrewRecording from '../assets/sounds/hebrew_recording.mp3';
import RussianRecording from '../assets/sounds/russian_recording.mp3';
import TigreniaRecording from '../assets/sounds/tigrenia_recording.mp3';

export default function SelectLan({ navigation }) {
    const [boolState, setState] = useState(true);

    const clickHandler = () => {
        setState(false);
    }

    return (

        <View style={styles.mainContainer}>
            <Text style={styles.boldText}> באיזו שפה תרצי לקבל מידע ?</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.rowContainer}><PlayButton audio={HebrewRecording} /><View style={styles.button}><Button  title='עברית' onPress={clickHandler} /></View></View>
                <View style={styles.rowContainer}><PlayButton audio={AmharicRecording} /><View style={styles.button}><Button  title='አማርኛ' onPress={clickHandler} /></View></View>
                <View style={styles.rowContainer}><PlayButton audio={TigreniaRecording} /><View style={styles.button}><Button  title='ትግርኛ' onPress={clickHandler} /></View></View>
                <View style={styles.rowContainer}><PlayButton audio={ArabicRecording} /><View style={styles.button}><Button  title='عربيه' onPress={clickHandler} /></View></View>
                <View style={styles.rowContainer}><PlayButton audio={RussianRecording} /><View style={styles.button}><Button  title='Rрусский' onPress={clickHandler} /></View></View>
                <View style={styles.rowContainer}><PlayButton audio={EnglishRecording} /><View style={styles.button}><Button  title='English' onPress={clickHandler} /></View></View>
            </View>

            <View style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <View style={{
                    flex: 1
                }}>

                    <Button title='<' disabled={boolState} onPress={() => { navigation.navigate("Welcome") }}
                        style={{
                            backgroundColor: "#FE434C",
                            borderColor: "transparent",
                            borderRadius: 20,
                            width: 250
                        }}
                        textStyle={{ color: "#FFFFFF", fontSize: 100, fontWeight: '400' }} />

                </View><View style={{
                    flex: 1
                }}>


                </View>
            </View>
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
<<<<<<< HEAD

=======
>>>>>>> a725aa5fc01bd23c419ba34bee2054ce494f334b
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems:'center'
    },
    boldText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
    button: {
        flex:1,
        marginLeft:20
    },
    buttonContainer: {
        marginVertical:20
    },
    rowContainer: {
        marginVertical:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        width: 200
    }
});

