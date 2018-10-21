import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    ImageBackground,
} from 'react-native'

export default class Header extends Component {

    render() {
        return (
            <ImageBackground source={this.props.topImg} style={[styles.topImage, {height: this.props.height}]}>
                <Text style={styles.text}> {this.props.name} </Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    topImage: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    text: {
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 20,
        paddingBottom: 5
    },

})
