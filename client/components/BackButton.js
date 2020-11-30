import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
export default function BackButton({ onPress }) {
    return (
        <TouchableOpacity title="Back" onPress={onPress} > 
        <MaterialIcons name='navigate-next' size={30} />
        </TouchableOpacity>
                    
    )
}