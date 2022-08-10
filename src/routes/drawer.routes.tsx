import { createDrawerNavigator} from '@react-navigation/drawer';

const {Screen, Navigator} = createDrawerNavigator();

import {ScreenA} from '../screens/ScreenA';
import {ScreenB} from '../screens/ScreenB';
import { MaterialIcons } from '@expo/vector-icons';

export function DrawerRoutes() {
    return (
        <Navigator>
            <Screen name="screenA"
                component={ScreenA}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: ( ) =>
                        <MaterialIcons
                        name='home'
                        color={'red'}
                        size={22}
                        />
                    
                }}
                />
                 
            <Screen name="screenB"
                component={ScreenB}
                options={{
                    drawerLabel: 'Login',
                    drawerIcon: () =>
                        <MaterialIcons
                        name='person'
                        color={'blue'}
                        size={22}
                        />
                    
                }}
                />
        </Navigator>
    )
}
