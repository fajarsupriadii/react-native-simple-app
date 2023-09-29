import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { clearAuthToken } from './action/authAction';
import CarouselComponent from './CarouselComponent';

const HomeScreen = ({ navigation }) => {
    // const dispatch = useDispatch();
    // const token = useSelector((state) => state.auth.authToken);
    const name = useSelector((state) => state.auth.userName);

    // const handleLogout = () => {
    //     dispatch(clearAuthToken());

    //     navigation.replace('Login');
    // };

    return (
        <View style={styles.container}>
            <CarouselComponent />
            <View style={styles.contentContainer}>
            <Text style={styles.heading}>Welcome {name}</Text>
              <Text style={styles.heading}>You are Logged In!</Text>
              {/* <Button title='Logout' onPress={handleLogout} /> */}
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

export default HomeScreen;