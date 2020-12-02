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
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { registerRootComponent } from 'expo'; 

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="close">
        <Drawer.Screen name="FeSelectAge" component={SelectAge} />
        <Drawer.Screen name="SelectLan" component={SelectLan} />
        <Drawer.Screen name="close" component={MyStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Temporary" component={Temporary} /> */}
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name="BodyInfo" component={BodyInfo} options={{headerShown:false}}/>
      <Stack.Screen name="ConversationMenu" component={ConversationMenu} options={{headerShown:false}}/>
      <Stack.Screen name="MainMenu" component={MainMenu} options={{headerShown:false}}/>
      <Stack.Screen name="ProtectYourself" component={ProtectYourself} options={{headerShown:false}}/>
      <Stack.Screen name="SelectAge" component={SelectAge} options={{headerShown:false}}/>
      <Stack.Screen name="SelectLan" component={SelectLan} options={{headerShown:false}}/>
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default registerRootComponent(App);