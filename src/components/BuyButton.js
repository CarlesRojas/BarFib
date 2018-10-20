import React, { Component } from 'react'
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ImageBackground,
} from 'react-native'

const whiteImage = require('../Img/buy_white.png')
const greenImage = require('../Img/buy_green.png')

export default class BuyButton extends Component {

    state = {
        buttonImage: whiteImage,
        buyText: 'Buy'
    };

    buyProduct = () => this.setState({ buttonImage: greenImage, buyText: 'Done' });

    render() {
        return (
            <View style={[{width: this.props.amplada}, {aspectRatio: this.props.ar}]}>
                <TouchableOpacity
                    onPress={this.buyProduct}>
                    <ImageBackground source={this.state.buttonImage} style={styles.image}>
                        <Text style={styles.title}> {this.state.buyText} </Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        width: '100%',
        height: '50%',
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 20,
        textAlign: 'center'
    },

})
