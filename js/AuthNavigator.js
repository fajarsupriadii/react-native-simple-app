import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from 'react-redux';
import LoginScreen from './LoginScreen';
import HomeTabNavigator from "./HomeTabNavigator";
import SettingScreen from './SettingScreen';
import WebViewScreen from './WebViewScreen';

const Stack = createStackNavigator();

const authNavigator = () => {
    const authToken = useSelector((state) => state.auth.authToken);
    const initRoute = authToken ? 'Home' : 'Login';

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initRoute}>
                <Stack.Screen name="Home" component={HomeTabNavigator} options={{ headerShown: false }}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="WebView" component={WebViewScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default authNavigator;