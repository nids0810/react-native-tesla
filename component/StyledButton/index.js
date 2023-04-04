import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = ({type, content, onPress}) => {
    const backgroundColor = type === 'primary'? '#333' : '#eee';
    const textColor = type === 'primary'? '#eee' : '#333';
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}>
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
      </View>
    );
};

export default StyledButton;