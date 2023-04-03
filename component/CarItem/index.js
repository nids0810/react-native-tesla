import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelS.jpeg')}
            style={styles.image}></ImageBackground>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>
    );
};

export default CarItem;