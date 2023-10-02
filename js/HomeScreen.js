import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import CarouselComponent from './CarouselComponent';
import HomeMenuComponent from './HomeMenuComponent';

const HomeScreen = ({ navigation }) => {
    const name = useSelector((state) => state.auth.userName);

    return (
        <View style={styles.container}>
            <CarouselComponent />
            <HomeMenuComponent />
            <View style={styles.contentContainer}>
              <Text style={styles.heading}>Welcome {name}</Text>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontFamily: 'FontsFree-Net-Billabong',
      fontSize: 40,
      color: '#13293D',
      marginBottom: 20,
    },
});

export default HomeScreen;