import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../modules/login-module/screen';
import TabNavigator from './tab-navigator';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{ headerShown: false, statusBarColor: 'black', statusBarStyle: 'light' }}
                />
                <Stack.Screen
                    name='App'
                    component={TabNavigator}
                    options={{ headerShown: false, statusBarColor: 'black', statusBarStyle: 'light' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};