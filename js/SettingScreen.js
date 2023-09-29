import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthToken } from './action/authAction';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.authToken);

    const handleLogout = () => {
        dispatch(clearAuthToken());

        navigation.replace('Login');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Icon name='logout' style={styles.icon} />
                <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: 10,
    },
    icon: {
        fontSize: 24,
        marginRight: 5,
    },
    text: {
        fontSize: 20
    }
});

export default SettingScreen;