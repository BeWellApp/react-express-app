import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

export default function Welcome() {
    return (
        <View>
            <View>
                <Header />
            </View>
            <View>
                <Text>Welcome</Text>
            </View>
        </View>
    )
}
