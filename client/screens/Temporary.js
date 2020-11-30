import React from 'react';
import { View, Button } from 'react-native';

export default function Temporary({ navigation }) {
    return (
        <View>
            <Button title="Go to Splash" onPress={() => navigation.navigate('Splash')} />
            <Button title="Go to SelectLan" onPress={() => navigation.navigate('SelectLan')} />
            <Button title="Go to Welcome" onPress={() => navigation.navigate('Welcome')} />
            <Button title="Go to SelectAge" onPress={() => navigation.navigate('SelectAge')} />
            <Button title="Go to MainMenu" onPress={() => navigation.navigate('MainMenu')} />
            <Button title="Go to BodyInfo" onPress={() => navigation.navigate('BodyInfo')} />
            <Button title="Go to ConversationMenu" onPress={() => navigation.navigate('ConversationMenu')} />
            <Button title="Go to ProtectYourself" onPress={() => navigation.navigate('ProtectYourself')} />
        </View>
    )
}


