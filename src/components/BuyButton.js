import React, { Component } from 'react'
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
    StyleSheet,
    TouchableOpacity,
    Button,
    Text,
    View,
    ImageBackground, Dimensions,
} from 'react-native'

export default class BuyButton extends Component {

    state = {
        isDateTimePickerVisible: false,
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };

    render() {
        return (
            <View style={[styles.menuItem, {width: this.props.amplada}, {aspectRatio: this.props.ar}]}>
                <ImageBackground source={require('../Img/whiteWideButton2.png')} style={styles.image}>

                    <Text style={styles.title}> {this.props.name} </Text>
                    <View style={styles.menuContainer}>
                        <Text style={styles.subtitle}> {this.props.price} </Text>
                        <View style={[{width: "50%"}]}>
                            <View style={styles.timePicker2}>
                                <Button
                                    onPress={this._showDateTimePicker}
                                    title="NOW"
                                    color="#5D5D5D"
                                />
                                <DateTimePicker
                                    isVisible={this.state.isDateTimePickerVisible}
                                    mode={'time'}
                                    onConfirm={this._handleDatePicked}
                                    onCancel={this._hideDateTimePicker}
                                />
                            </View>
                        </View>
                    </View>
                </ImageBackground>
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
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    title: {
        width: '100%',
        height: '50%',
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 30,
        paddingTop: 10,
        textAlign: 'center'

    },
    menuContainer: {
        justifyContent: 'center',
        width: '100%',
        height: '50%',
        paddingLeft: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    subtitle: {
        width: '50%',
        backgroundColor: 'transparent',
        color: '#636363',
        fontSize: 20,
        paddingTop: 10,
        textAlign: 'center'
    },


    timePicker2: {
        width: '70%',
        paddingTop: 10,
        paddingLeft: '25%',
        textAlign: 'center'
    },

})
