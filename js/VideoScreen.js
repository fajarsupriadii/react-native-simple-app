import React, { useEffect, useState } from "react";
import { View, FlatList, Image, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import axios from "axios";
import { useSelector } from 'react-redux';

const VideoScreen = () => {
    const API_KEY = useSelector((state) => state.auth.ytApiKey);
    const PLAYLIST_ID = 'PL2gNzJCL3m_8e21QH4D-Kz5KB7iC-Dk23';
    const   [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${PLAYLIST_ID}&key=${API_KEY}`)
            .then((response) => {
                const videoItems = response.data.items;
                setVideos(videoItems);
            }).catch((error) => {
                console.error('Error fetching video:'. error);
            });
    }, []);

    const handleVideo = (videoId) => {
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        Linking.openURL(videoUrl).catch((error) => {
            console.error('Error opening video:', error);
        })
    };

    const renderVideo = ({ item }) => {
        const video = item.snippet;
        return (
            <TouchableOpacity 
                style={styles.videoItem}
                onPress={() => handleVideo(video.resourceId.videoId)}
            >
                <Image
                    source={{ uri: video.thumbnails.default.url }}
                    style={styles.thumbnail}
                />
                <Text style={styles.title}>{video.title}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={videos}
                keyExtractor={(item) => item.id}
                renderItem={renderVideo}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    videoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    thumbnail: {
        width: 120,
        height: 90,
        marginRight: 10,
    },
    title: {
        flex: 1,
        fontSize: 16
    }
});

export default VideoScreen;