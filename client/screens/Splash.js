import React from 'react';
import { View, Text,ImageBackground,Image,StyleSheet  } from 'react-native';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';


const styles = StyleSheet.create({
    logoContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    logo: {
      width:'100%',
      height:'100%',
    }
  });
export default function Splash({navigation}) {
    setTimeout(() => {
        navigation.navigate('SelectLan')
    }, 2000);
    return (
        <SafeAreaView style={styles.logoContainer}>
        <ImageBackground resizeMode="contain" style={styles.logo} source={require('../assets/Logo.jpeg')}/>  

        </SafeAreaView>

        
    );
}