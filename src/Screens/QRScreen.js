import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image
} from 'react-native';
import Header from "../components/Header";

export default class QRScreen extends React.Component {

    render() {
        return (
            <ImageBackground source = {require('../Img/bg_brabas.png')} style={styles.container}>

                <Header topImg={require('../Img/coffee.png')}/>

                <View style={styles.image}>
                    <Image source={require('../Img/whiteWideButton.png')}/>
                </View>

                <View style={styles.qr}>
                    <Image source={require('../Img/qr.png')} />
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:  '100%',
        height: '100%',
    },
    image: {
        elevation: 10,
        position: 'absolute',
        top: '25%',
        width: '100%',
        height: '30%',
        backgroundColor: 'transparent',
    },
    qr: {
        position: 'absolute',
        bottom: '0%',
        width: '100%',
        height: '50%',
        justifyContent:'flex-end',
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
});