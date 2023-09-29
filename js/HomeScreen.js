import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
// import { clearAuthToken } from './action/authAction';
import CarouselComponent from './CarouselComponent';
import HomeMenuComponent from './HomeMenuComponent';

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
            <HomeMenuComponent />
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
});

export default HomeScreen;