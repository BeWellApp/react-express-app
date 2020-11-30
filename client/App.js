import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Temporary from './screens/Temporary';
import BodyInfo from './screens/BodyInfo';
import ConversationMenu from './screens/ConversationMenu';
import MainMenu from './screens/MainMenu';
import ProtectYourself from './screens/ProtectYourself';
import SelectAge from './screens/SelectAge';
import SelectLan from './screens/SelectLan';
import Splash from './screens/Splash';
import Welcome from './screens/Welcome';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={{ ...DefaultTheme, dark: false }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Temporary" component={Temporary} />
          <Stack.Screen name="BodyInfo" component={BodyInfo} />
          <Stack.Screen name="ConversationMenu" component={ConversationMenu} />
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen name="ProtectYourself" component={ProtectYourself} />
          <Stack.Screen name="SelectAge" component={SelectAge} />
          <Stack.Screen name="SelectLan" component={SelectLan} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

