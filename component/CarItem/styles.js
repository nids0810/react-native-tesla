import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
        alignItems: 'center',
      },
      title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: '30%',
      },
      subTitle: {
        fontSize: 14,
        color: '#555'
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      buttonConatiner: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
      },
      tagStyle: {
        textDecorationLine: 'underline',
      }
});

export default styles;