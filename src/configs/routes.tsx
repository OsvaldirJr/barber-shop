import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import HomeScreen from '../screens/home';
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
                    name='Home'
                    component={TabNavigator}
                    options={{ headerShown: false, statusBarColor: 'black', statusBarStyle: 'light' }}
                    // headerBackButtonMenuEnabled: false, title: 'Home', headerTintColor: 'white', headerStyle: ({ backgroundColor: '#000100' }), statusBarColor: 'black', statusBarStyle: 'auto', headerBackVisible: false
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};