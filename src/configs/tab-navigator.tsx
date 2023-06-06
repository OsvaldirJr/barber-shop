import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/user-profile';
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: any;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Profile') {
                        iconName = 'user';
                    }
                    return <Feather name={iconName} size={size} color={color} />;
                },
                tabBarInactiveBackgroundColor: '#000100',
                tabBarActiveBackgroundColor: '#000100',
                tabBarActiveTintColor: '#004F75',
                tabBarInactiveTintColor: '#F0F0F0',
            })}

        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerTintColor: '#F0F0F0', headerStyle: ({ backgroundColor: '#000100' }) }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerTintColor: '#F0F0F0', headerStyle: ({ backgroundColor: '#000100' }) }} />
        </Tab.Navigator>
    );
};