import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
      },
      title:{
        fontSize: '24',
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
      }
});

export default styles;