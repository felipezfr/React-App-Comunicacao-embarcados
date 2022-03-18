import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();


import LedsPage from './LedsPage';
import ColorPage from './ColorPage';
import MapsPage from './MapsPage';



const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator >
            <Tab.Screen name="FitasLed"
                component={LedsPage}
                options={{
                    tabBarLabel: 'Fitas de led',
                    tabBarIcon: ({ color, size }) => (
                        <IconCommunity name="led-strip" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Mudar cor"
                component={ColorPage}
                options={{
                    tabBarLabel: 'Mudar cor',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="color-lens" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Mapa"
                component={MapsPage}
                options={{
                    tabBarLabel: 'Mapa',
                    tabBarIcon: ({ color, size }) => (
                        <IconCommunity name="google-maps" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator >
    );
}

export default function App() {
    return (
        <MyTabs />
    );
}