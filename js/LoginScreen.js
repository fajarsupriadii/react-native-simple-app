import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthToken } from './action/authAction';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('martin.lloyd@office.com');
    const [password, setPassword] = useState('');
    const urlBe = useSelector((state) => state.auth.urlBe);
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            const response = await axios.post(urlBe + 'auth', {
                email: username,
                password: password
            });
            const token = response.data.token;
            const name = response.data.name;
            dispatch(setAuthToken(token, name));

            navigation.replace('Home');
        } catch (error) {
            console.error(error.response.data.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Simple App</Text>
            <TextInput
                style={styles.input}
                placeholder='Username'
                value={username}
                onChangeText={(text) => setUsername(text)}
                onSubmitEditing={handleLogin}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                onSubmitEditing={handleLogin}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Icon name='login' style={styles.icon} />
                <Text style={styles.text}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6FDFF'
    },
    heading: {
        fontFamily: 'FontsFree-Net-Billabong',
        fontSize: 40,
        marginBottom: 5,
        color: '#13293D',
    },
    input: {
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
    },
    button: {
        width: '80%',
        height: 40,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#084887',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 16,
        marginRight: 10,
        color: '#fbfcff',
    },
    text: {
        fontSize: 16,
        color: '#fbfcff',
    }
});

export default LoginScreen;