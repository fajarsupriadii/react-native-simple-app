import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from 'react-redux';
import LoginScreen from './LoginScreen';
import HomeTabNavigator from "./HomeTabNavigator";
import WebViewScreen from './WebViewScreen';

const Stack = createStackNavigator();

const authNavigator = () => {
    const authToken = useSelector((state) => state.auth.authToken);
    const initRoute = authToken ? 'Home' : 'Login';

    const headerOption = (title) => {
        return ({
            title: title,
            headerStyle: {
                backgroundColor: '#E6FDFF',
            },
            headerTintColor: '#3E92CC',
            headerTitleStyle: {
                marginTop: 10,
                fontFamily: 'FontsFree-Net-Billabong',
                fontSize: 30,
            },
        });
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initRoute}>
                <Stack.Screen name="Home" component={HomeTabNavigator} options={{ headerShown: false }}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="WebView" component={WebViewScreen} options={headerOption('Web View')}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default authNavigator;