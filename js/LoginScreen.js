import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
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
            <Text style={styles.heading}>Login</Text>
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
            <Button title='login' onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      padding: 10,
    },
});

export default LoginScreen;