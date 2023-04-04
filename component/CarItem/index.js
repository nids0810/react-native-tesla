import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton'

const CarItem = (props) => {
    const {name, tagline, taglineCTA, image} = props.car;
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image}
            style={styles.image}></ImageBackground>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subTitle}>{tagline}&nbsp;
            <Text style={styles.tagStyle}>{taglineCTA}</Text>
            </Text>
            <View style={styles.buttonConatiner}>
                <StyledButton type="primary" 
                content="custom order"
                onPress={() => {
                    console.warn('custom order was pressed');
                }}></StyledButton>

                <StyledButton type="secondary" 
                content="existing inventory" 
                onPress={() => {
                    console.warn('existing inventory was pressed');
                }}></StyledButton>
            </View>
      </View>
    );
};

export default CarItem;