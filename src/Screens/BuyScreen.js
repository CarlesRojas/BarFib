import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground, ScrollView, Dimensions
} from 'react-native';
import Header from "../components/Header";
import InfoPanel from "../components/InfoPanel";
import BuyButton from "../components/BuyButton";

export default class BuyScreen extends React.Component {
    navigate = (destiny) => {
        this.props.navigation.navigate(destiny);
    }
    render() {
        return (
            <ImageBackground
                source = {require('../Img/coffee_bg.png')}
                style={styles.container}>

                <View style={styles.overlayContainer}>

                    <Header topImg={require('../Img/coffee.png')}/>
                    <View style={styles.menuContainer}>
                        <InfoPanel amplada={'85%'} onPress={() => {this.navigate('Home')}} ar={1210/400} name={'Café'} price={'1.10 €'}/>
                        <BuyButton amplada={'85%'} ar={1210/400}/>
                    </View>

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        flex: 1,
        width:  '100%',
        height: '100%',
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    menuContainer: {
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '-15%'
    }
});