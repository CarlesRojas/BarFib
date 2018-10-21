import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ImageBackground,
} from 'react-native'

const whiteImage = require('../Img/subscription_white.png')

export default class TodayOrder extends Component {

    render() {
        return (
            <View style={[styles.container, {width: this.props.amplada}, {aspectRatio: this.props.ar}]}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={styles.button}>
                    <ImageBackground source={require('../Img/subscription_white.png')} style={[styles.image, {aspectRatio: this.props.ar}]}>
                        <Text style={styles.text}> {this.props.infoSub} </Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 15,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    image: {

        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    text: {
        padding: '5%',
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 20,
        textAlign:'center'
    },

})
