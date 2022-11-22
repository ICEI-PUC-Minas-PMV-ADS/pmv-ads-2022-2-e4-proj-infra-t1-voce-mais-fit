import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const StylesExercices = StyleSheet.create({

    inputBtn: {
        width: 80,
        height: 40,
        color: 'white',
        marginLeft: 20,
        marginRight: 20,
    },
    img: {
        width: 100,
        height: 100,
    },
    containeListExercices: {
        flex: 1,
        maxHeight: 500,
    },
    menuExercicesButton: {
        height: 50,
        borderRadius: 10,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
    },
    btnModalClose: {
        height: 25,
        borderRadius: 10,
        backgroundColor: 'pink',
    }

})

export default StylesExercices;