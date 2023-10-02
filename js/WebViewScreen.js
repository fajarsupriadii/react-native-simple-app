import React, { Component } from 'react';
import { View } from "react-native";
import { WebView } from 'react-native-webview';

const WebViewScreen = () => {
    return (
        <View style={{flex: 1}}>
            <WebView 
                source={{ uri: 'https://blog.logrocket.com/react-native-webview-a-complete-guide/' }} 
            />
        </View>
    );
};

export default WebViewScreen;