import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PlayButton from '../components/PlayButton';
import AgesRecording from '../assets/sounds/ages_recording.mp3';
import Until23 from '../assets/sounds/15-23.mp3';
import Until40 from '../assets/sounds/24-40.mp3';
import Until65 from '../assets/sounds/41-65.mp3';

export default function SelectAge() {
    const [boolState, setState] = useState(true);

    const clickHandler = () => {
        setState(false);
    }
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.boldText}> מה גילך ?                 <View><PlayButton audio={AgesRecording} /></View></Text>
            <View style={styles.buttonContainer}>
                <View style={styles.rowContainer}><PlayButton audio={Until23} /><View style={styles.button}><Button  title='15-23' onPress={clickHandler} /></View></View>
                <View style={styles.rowContainer}><PlayButton audio={Until40} /><View style={styles.button}><Button  title='24-40' onPress={clickHandler} /></View></View>
                <View style={styles.rowContainer}><PlayButton audio={Until65} /><View style={styles.button}><Button  title='41-65' onPress={clickHandler} /></View></View>
            </View>

            <View style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <View style={{
                    flex: 1
                }}>

                    <Button title='<' disabled={boolState} onPress={() => { navigation.navigate("MainMenu") }}
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
                    <Button title='>' onPress={() => { navigation.navigate("Welcome") }}
                        style={{
                            backgroundColor: "#FE434C",
                            borderColor: "transparent",
                            borderRadius: 20,
                            width: 250
                        }}
                        textStyle={{ color: "#FFFFFF", fontSize: 100, fontWeight: '400' }} />

                </View>
            </View>

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
