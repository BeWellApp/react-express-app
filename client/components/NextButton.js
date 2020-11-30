import React from 'react';
import { TouchableOpacity, Button, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function NextButton({ onPress }) {
    return (
        <TouchableOpacity title="Next" onPress={onPress} >
        <MaterialIcons name='navigate-before' size={30} />
        </TouchableOpacity>

    )
}