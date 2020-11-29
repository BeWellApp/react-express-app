import React from 'react';
import { View, Button } from 'react-native';

export default function Temporary({ navigation }) {
    return (
        <View>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}
