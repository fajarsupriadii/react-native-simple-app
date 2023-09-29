import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const carouselData = [
    { id: 1, img: require('../images/banner1.jpg') },
    { id: 2, img: require('../images/banner2.jpg') },
    { id: 3, img: require('../images/banner3.jpg') },
];
const caroulseWidth = Dimensions.get('window').width * 0.95;

const CarouselComponent = () => {
    const [activeSlide, setActiveSlide] = React.useState(0);
    
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.img} style={styles.image} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel
                data={carouselData}
                renderItem={renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={caroulseWidth}
                onSnapToItem={(index) => setActiveSlide(index)}
                enableSnap={true}
                loop={true}
                autoplay={true}
                autoplayInterval={2500}
            />
            {/* <View style={styles.dotsContainer}>
                <Pagination
                    dotsLength={carouselData.length}
                    activeDotIndex={activeSlide}
                    containerStyle={styles.pagination}
                    dotStyle={styles.dot}
                    inactiveDotOpacity={0.6}
                    inactiveDotScale={0.8}
                />
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        // flex: 1,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: caroulseWidth,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'ligthGray',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        borderRadius: 15,
    },
    dotsContainer: {
        // height: 70,
    },
    pagination: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'blue'
    }
});

export default CarouselComponent;