import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { getUser } from '../apis/server/user';
const styles = StyleSheet.create({
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7'
    },
    logo: {
        width: '100%',
        height: '100%',
    }
});
export default function Splash({ navigation }) {
    let nextPage = 'SelectLan';
    setTimeout(() => {
        navigation.navigate(nextPage)
    }, 2000);

    useEffect(() => {
        (async () => {
            try {
                const user = await getUser(Constants.installationId);
                if (user === "user not found") {
                    nextPage = 'SelectLan';
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <SafeAreaView style={styles.logoContainer}>
            <ImageBackground resizeMode="contain" style={styles.logo} source={require('../assets/Logo.jpeg')} />
        </SafeAreaView>


    );
}