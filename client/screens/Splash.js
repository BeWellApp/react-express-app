import React from 'react';
import { View, Text } from 'react-native';

export default function Splash({navigation}) {
    setTimeout(() => {
        navigation.navigate('SelectLan')
    }, 3000);
    return (
        <Text>Splash</Text>
    )
}
