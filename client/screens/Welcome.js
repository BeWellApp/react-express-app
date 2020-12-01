import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PlayButton from '../components/PlayButton';
import WelcomeRecording from '../assets/sounds/welcome_recording.mp3';
import NextButton from '../components/NextButton';


export default function Welcome({navigation}) {
    return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.boldText}>ברוכה הבאה ל'בריאה'!   <View><PlayButton audio={WelcomeRecording} /></View></Text>
      </View>
      <View style={styles.body}>
      <Text>באפליקציה זו תוכלי לקבל מידע אודות גופך ובריאותך
      הנשית ובהתאם לגילך.
      חשוב לציין, אפליקציה זו אינה מהווה תחליף להמלצות רפואיות שניתנו ע"י רופאה.</Text>
      </View>
      <View>
        <NextButton onPress={() => { navigation.navigate("SelectAge") } }/>
    </View>
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
      backgroundColor:'#f9f1f1',
      padding: 20,
  },
  boldText: {
      fontWeight: 'bold',
      fontSize: 30
  },
  body: {
      backgroundColor:'#f9f1f1',
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 10
  },


});
