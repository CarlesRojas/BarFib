import React, { Component } from 'react'
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
    StyleSheet,
    TouchableOpacity,
    Button,
    Text,
    View,
    ImageBackground,
} from 'react-native'

export default class InfoPanel extends Component {

    state = {
        isDateTimePickerVisible: false,
        pickUpTime: 'NOW',
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        const date2 = new Date(date);


        this._hideDateTimePicker();
        this.setState({pickUpTime: `${date2.getHours()}:${date2.getMinutes()}`})
    };

    render() {
        return (
            <View style={[styles.menuItem, {width: this.props.amplada}, {aspectRatio: this.props.ar}]}>
                <ImageBackground source={require('../Img/whiteWideButton.png')} style={styles.image}>

                    <Text style={styles.title}> {this.props.name}  </Text>
                    <View style={styles.menuContainer}>
                        <Text style={styles.subtitle}> {this.props.price} </Text>

                        <View style={[{width: "50%"} , {paddingBottom: 15}]}>
                            <View style={styles.timePicker}>
                                <Button
                                    onPress={this._showDateTimePicker}
                                    title= {this.state.pickUpTime}
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
    menuItem: {
        backgroundColor: 'transparent',
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
    timePicker: {
        width: '70%',
        paddingTop: 10,
        paddingLeft: '25%',
    },

})
