import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const screenWidth = Dimensions.get('window').width;

const HomeMenuComponent = () => {
    return (
        <View style={styles.menuContainer}>

            <View style={styles.menuRow}>
            <TouchableOpacity style={styles.button}>
                <Icon name='badge-account-horizontal-outline' style={styles.icon} />
                <Text style={styles.text}>account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Icon name='alarm-check' style={styles.icon} />
                <Text style={styles.text}>Alarm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Icon name='barcode-scan' style={styles.icon} />
                <Text style={styles.text}>Barcode</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.menuRow}>
            <TouchableOpacity style={styles.button}>
                <Icon name='bell-ring-outline' style={styles.icon} />
                <Text style={styles.text}>Notif</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Icon name='calendar-text-outline' style={styles.icon} />
                <Text style={styles.text}>Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Icon name='chart-line' style={styles.icon} />
                <Text style={styles.text}>Report</Text>
            </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
      flexDirection: 'column',
      marginTop:  15,
      width: screenWidth * 0.95,
      backgroundColor: '#909cc2',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      padding: 10,
    },
    menuRow: {
      flexDirection: 'row',
      backgroundColor: 'transparent',
    },
    button: {
      width: 60,
      height: 60,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#084887',
      padding: 10,
      borderRadius: 10,
      marginTop: 10,
      marginBottom: 10,
      marginRight: 20,
      marginLeft: 20,
    },
    icon: {
        fontSize: 26,
        color: '#fbfcff',
    },
    text: {
        fontSize: 10,
        color: '#fbfcff'
    },
});

export default HomeMenuComponent;