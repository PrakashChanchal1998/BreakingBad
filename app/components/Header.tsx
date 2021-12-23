import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigation, listData } = this.props
        return (
            <View style={styles.CONTAINER}>
                <View style={styles.HORIZANTALAYOUT}>
                    <Text style={styles.TEXTSIZE}>The Breaking Bad</Text>
                    <View style={styles.HORIZANTALAYOUT}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('FavourateList')}
                    >
                        <Image
                            source={(listData.length > 0) ?
                                require('../assets/HEART_FILLED.png')
                                : require('../assets/HEART.png')}
                            style={styles.IMAGE_STYLE}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    CONTAINER: {
        backgroundColor: "#242424",
        shadowColor: "#000",
        height: 60,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
    },
    TEXTSIZE: {
        margin: 10,
        fontSize: 26,
        color: '#FFFFFF'
    },
    HORIZANTALAYOUT: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    IMAGE_STYLE: {
        margin: 13,
        height: 45,
        width: 45,
    }
})