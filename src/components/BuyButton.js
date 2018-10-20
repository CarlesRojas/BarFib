import React, { Component } from 'react'
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ImageBackground,
} from 'react-native'

const blueImage = require('../Img/buy_blue.png')
const greenImage = require('../Img/buy_green.png')

export default class BuyButton extends Component {

    state = {
        buttonImage: blueImage,
    };

    buyProduct = () => this.setState({ buttonImage: greenImage });

    render() {
        return (
            <View style={[styles.menuItem, {width: this.props.amplada}, {aspectRatio: this.props.ar}]}>
                <TouchableOpacity
                    onPress={this.buyProduct}
                    style={styles.button}>
                    <ImageBackground source={this.state.buttonImage} style={[styles.image, {aspectRatio: this.props.ar}]}>
                        <Text style={styles.title}> Compra </Text>
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
        backgroundColor: 'transparent',
    },
    image:{
        marginTop: '10%',
        width: '60%',
        backgroundColor: 'transparent',
        alignItems: 'center',
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
