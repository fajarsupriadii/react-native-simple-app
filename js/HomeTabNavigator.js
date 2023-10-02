import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import Explore from './ExploreScreen';
import UploadScreen from './UploadScreen';
import VideoScreen from './VideoScreen';
import SettingScreen from './SettingScreen';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerTintColor: '#3E92CC',
        headerTitleStyle: {
          marginTop: 10,
          fontFamily: 'FontsFree-Net-Billabong',
          fontSize: 30,
        },
        headerStyle: {
          backgroundColor: '#E6FDFF',
        },
        tabBarActiveTintColor: '#3E92CC',
        tabBarInactiveTintColor: '#13293D',
        tabBarStyle: {
          backgroundColor: '#E6FDFF',
        },
      })}
    >
      <Tab.Screen
        name="Simple App"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <Icon name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          tabBarLabel: 'Upload',
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus-box" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Videos"
        component={VideoScreen}
        options={{
          tabBarLabel: 'Videos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="movie-open" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
