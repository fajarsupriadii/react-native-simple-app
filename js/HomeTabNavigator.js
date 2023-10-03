import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import Explore from './ExploreScreen';
import UploadScreen from './UploadScreen';
import VideoScreen from './VideoScreen';
import SettingScreen from './SettingScreen';
import DatatableScreen from './DatatableScreen';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  const tabOption = (title, icon) => {
    return ({
      tabBarLabel: title,
      tabBarIcon: ({ color, size }) => (
        <Icon name={icon} color={color} size={size} />
      ),
    });
  }

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
        options={tabOption('Home', 'home')}
      />
      <Tab.Screen
        name="Explore"
        component={DatatableScreen}
        options={tabOption('Explore', 'magnify')}
      />
      <Tab.Screen
        name="Upload"
        component={UploadScreen}
        options={tabOption('Upload', 'plus-box')}
      />
      <Tab.Screen
        name="Videos"
        component={VideoScreen}
        options={tabOption('Videos', 'movie-open')}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={tabOption('Settings', 'cog')}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
