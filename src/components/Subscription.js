import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ImageBackground,
} from 'react-native'

const whiteImage = require('../Img/subscription_white.png')
const greenImage = require('../Img/subscription_green.png')

export default class Subscription extends Component {

    state = {
        buttonImage: whiteImage
    };

    subscribe = () => this.setState({ buttonImage: greenImage });

    render() {
        return (
            <View style={[styles.container, {width: this.props.amplada}, {aspectRatio: this.props.ar}]}>
                <TouchableOpacity
                    onPress={this.subscribe}
                    style={styles.button}>
                    <ImageBackground source={this.state.buttonImage} style={[styles.image, {aspectRatio: this.props.ar}]}>
                        <Text style={styles.text}> {this.props.infoSub} </Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginBottom: '5%',
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width: '100%',
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
