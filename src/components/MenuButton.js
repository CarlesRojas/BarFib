import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    View, Image,
} from 'react-native'

export default class MenuButton extends Component {


    onPress = () => {

    }

    render() {
        return (
            <View style={[styles.menuItem, {width: this.props.amplada}]}>
                <TouchableOpacity
                    style={styles.button} onPress={this.onPress}>
                    <Image source={this.props.itemImage} style={styles.image} />
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#828282'
    },
    menuItem: {
        height: '33.33333%',
        paddingRight: 10,
        paddingBottom: 10
    },

    image: {
        width: '100%',
        height: '100%'
    }
})

//AppRegistry.registerComponent('App', () => App)
