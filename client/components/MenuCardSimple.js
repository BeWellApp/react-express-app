import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PlayButton from '../components/PlayButton';

export default function MenuCardSimple({ title, imageSource, audio }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <PlayButton audio={audio} />
            <Image resizeMode="contain" style={styles.image} source={imageSource} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        width: "80%",
        height: 205,
        marginBottom: 20,
        borderRadius: 10,
        padding: 20,
        position: "relative",
        backgroundColor: "#fff"
    },
    image: {
        width: 70,
        height: 100,
        alignSelf: "flex-end"
    },
    title: {
        fontSize: 20,
        paddingBottom: 20
    }
})