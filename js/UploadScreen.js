import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

const UploadScreen = () => {
    const cameraRef = useRef(null);

    const takePicture = async () => {
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true };
            const data = await cameraRef.current.takePictureAsync(options);
            console.log('Photo data:', data);
        }
    };

    return (
        <View style={styles.container}>
            <RNCamera
                ref={cameraRef}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                captureAudio={false}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={takePicture} style={styles.capture}>
                    <Text style={styles.captureText}>Take Photo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
    },
    captureText: {
        fontSize: 16,
    },
});

export default UploadScreen;