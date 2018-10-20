import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ImageBackground,
} from 'react-native'

export default class MenuButton extends Component {


    render() {
        return (
            <View style={[styles.menuItem, {width: this.props.amplada}, {aspectRatio: this.props.ar}]}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.props.onPress}>
                    <ImageBackground source={this.props.itemImage} style={styles.image}>
                        <View style={styles.gradient}>
                            <Text style={styles.text}> {this.props.name} </Text>
                        </View>

                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    menuItem: {
        height: '33.33333%',
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: 'transparent'
    },
    image: {
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent'
    },
    text: {
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
    gradient:{
        alignItems: 'flex-bottom'
    }
})
