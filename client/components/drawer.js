import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import SelectAge from '../screens/SelectAge';
import SelectLan from '../screens/SelectLan';

const RootDrawerNavigator =createDrawerNavigator({
    AgeScreen:{
        screen:SelectAge,
    },
    LanScreen:{
        screen:SelectLan,
    }
});
export default createAppContainer(RootDrawerNavigator);