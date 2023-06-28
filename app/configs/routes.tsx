import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../modules/login-module/screen';
import TabNavigator from './tab-navigator';
import { AuthContext } from '../contexts/auth';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    const { user } = useContext<any>(AuthContext);

    return (
        <Stack.Navigator>
            {!user.isLogged ?
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{ headerShown: false, statusBarColor: 'black', statusBarStyle: 'light' }}
                />
                :
                <Stack.Screen
                    name='Home'
                    component={TabNavigator}
                    options={{ headerShown: false, statusBarColor: 'black', statusBarStyle: 'light' }}
                />
            }
        </Stack.Navigator>
    );
};