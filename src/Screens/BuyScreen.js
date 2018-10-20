import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground, ScrollView, Dimensions
} from 'react-native';
import Header from "../components/Header";
import BuyButton from "../components/BuyButton";

export default class BuyScreen extends React.Component {
    navigate = (destiny) => {
        this.props.navigation.navigate(destiny);
    }
    render() {
        return (
            <ImageBackground
                source = {require('../Img/bg2.jpg')}
                style={styles.container}>

                <View style={styles.overlayContainer}>

                    <Header topImg={require('../Img/coffee.png')}/>
                    <View style={styles.menuContainer}>
                        <BuyButton amplada={'90%'} onPress={() => {this.navigate('Home')}} ar={1210/422} name={'Café'} price={'1.10 €'}/>
                    </View>

                    <ScrollView>

                    </ScrollView>

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
        backgroundColor: 'rgba(47,163,218, .4)',
    },
    menuContainer: {
        justifyContent: 'center',
        width: '100%',
        height: (((Dimensions.get('window').width * 3) - 90) / 2) + 40,
        paddingLeft: 10,
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '-15%'
    }
});