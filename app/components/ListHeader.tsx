import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ListHeader extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.CONTAINER}>
                <View style={styles.HORIZANTALAYOUT}>
                    <Text style={styles.TEXTSIZE}>FAVOURATES</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Icon name="close" size={30}
                            color="#ffffff"
                            style={{ padding: 20 }}
                            onPress={() => navigation.goBack()} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    CONTAINER: {
        backgroundColor: "#141414",
        shadowColor: "#000",
        height: 70,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
    },
    TEXTSIZE: {
        margin: 10,
        fontSize: 30,
        color: '#18CA75'
    },
    HORIZANTALAYOUT: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    IMAGE_STYLE: {
        margin: 15,
        height: 35,
        width: 35,
    }
})