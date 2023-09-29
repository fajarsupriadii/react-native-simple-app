import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const CarouselScroolView = () => {
    return (
        <View style={styles.container}>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <Image source={require('../images/banner1.jpg')} style={styles.carouselItem} />
            <Image source={require('../images/banner2.jpg')} style={styles.carouselItem} />
            <Image source={require('../images/banner3.jpg')} style={styles.carouselItem} />
            {/* Add more images as needed */}
          </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    carouselItem: {
        width: 300,
        height: 200,
        marginRight: 10,
    }
});

export default CarouselScroolView;

