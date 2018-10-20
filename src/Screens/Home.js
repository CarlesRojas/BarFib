import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    ScrollView
} from 'react-native';

import MenuButton from'../components/MenuButton'
export default class Home extends React.Component {

    navigate = (destiny) => {
        this.props.navigation.navigate(destiny);
    }
    render() {
        return (
            <ImageBackground
                source = {require('../Img/bg2.jpg')}
                style={styles.container}>

                <View style={styles.overlayContainer}>
                    <View style={styles.top}>
                        <Text style={styles.header}>BARFIB</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.menuContainer}>
                            <MenuButton itemImage={require('../Img/pizza.png')} amplada={'100%'} onPress={() => {this.navigate('Coffee')}} ar={1210/617} name={'Plat del dia: Pizza'}/>
                            <MenuButton itemImage={require('../Img/coffee.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee')}} ar={1} name={'Café'}/>
                            <MenuButton itemImage={require('../Img/beer.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee')}} ar={1} name={'Cervesa'}/>
                            <MenuButton itemImage={require('../Img/braves.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee')}} ar={1} name={'Braves'}/>
                            <MenuButton itemImage={require('../Img/burger.png')} amplada={'50%'}  onPress={() => {this.navigate('Coffee')}} ar={1} name={'FiberBurger'}/>
                        </View>
                    </ScrollView>

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width:  '100%',
        height: '100%',

    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(47,163,218, .4)'
    },
    top: {
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: '#fff',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255,.1)'
    },

    menuContainer: {
        width: '100%',
        height: (((Dimensions.get('window').width * 3) - 90) / 2) + 40,
        paddingLeft: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});
